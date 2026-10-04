import { useCallback, useEffect, useState } from 'react';

export const TAB_IDS = ['projects', 'about', 'contact'] as const;
export type TabId = (typeof TAB_IDS)[number];

const DEFAULT_TAB: TabId = 'projects';

function isTabId(value: string): value is TabId {
  return (TAB_IDS as readonly string[]).includes(value);
}

// "#about" → 'about'; anything else (empty, "#top", typos) → null
export function tabFromHash(hash: string): TabId | null {
  const id = hash.replace(/^#/, '').toLowerCase();
  return isTabId(id) ? id : null;
}

function scrollToWorks() {
  document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' });
}

/**
 * Single source of truth for the Works tab, shared by the header nav and the tabs.
 * Keeps the URL hash in sync and turns any in-page `#projects` / `#about` / `#contact`
 * link into "switch tab + scroll to the section".
 */
export function useActiveTab() {
  const [active, setActive] = useState<TabId>(
    () => tabFromHash(window.location.hash) ?? DEFAULT_TAB
  );

  const select = useCallback((id: TabId, { scroll = false } = {}) => {
    setActive(id);
    history.replaceState(null, '', `#${id}`);
    if (scroll) scrollToWorks();
  }, []);

  useEffect(() => {
    // Delegated so every tab link on the page works, even when the hash is already current
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
      const link = (e.target as Element).closest?.('a[href^="#"]');
      const id = link && tabFromHash(link.getAttribute('href') ?? '');
      if (!id) return;
      e.preventDefault();
      select(id, { scroll: true });
    };

    // Back/forward or a hand-edited URL
    const onHashChange = () => {
      const id = tabFromHash(window.location.hash);
      if (!id) return;
      setActive(id);
      scrollToWorks();
    };

    document.addEventListener('click', onClick);
    window.addEventListener('hashchange', onHashChange);
    return () => {
      document.removeEventListener('click', onClick);
      window.removeEventListener('hashchange', onHashChange);
    };
  }, [select]);

  // Opening the page at /#about should land on the section, not the hero
  useEffect(() => {
    if (tabFromHash(window.location.hash)) requestAnimationFrame(scrollToWorks);
  }, []);

  return [active, select] as const;
}

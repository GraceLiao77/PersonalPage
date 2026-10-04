import { useEffect, useRef, useState } from 'react';
import './Cat.css';

const LINES = ['meow~', 'purrr…', 'thanks for visiting!', 'there’s more below ↓', 'meow meow!'];

const HEAD =
  'M92 26 C132 26 156 52 156 84 C156 114 130 134 92 134 C54 134 28 114 28 84 C28 52 52 26 92 26 Z';
const BODY =
  'M56 118 C48 146 52 172 66 184 L152 184 C168 176 172 148 162 124 C152 108 128 104 106 108 Z';

// Whether the Halloween props (pumpkin + bat) should be out on this date.
function isHalloweenSeason(date: Date): boolean {
  // TODO(human)
  void date;
  return true;
}

// A chibi blue-and-white British Shorthair. Pupils follow the pointer; clicking makes it talk.
export default function Cat() {
  const [line, setLine] = useState('');
  const [show, setShow] = useState(false);
  const count = useRef(0);
  const timer = useRef<number>(undefined);
  const svgRef = useRef<SVGSVGElement>(null);
  const spooky = isHalloweenSeason(new Date());

  useEffect(() => () => window.clearTimeout(timer.current), []);

  useEffect(() => {
    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const svg = svgRef.current;
        if (!svg) return;
        const r = svg.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width * 0.45);
        const dy = e.clientY - (r.top + r.height * 0.42);
        const dist = Math.hypot(dx, dy) || 1;
        const reach = Math.min(dist / 140, 1) * 3;
        svg.style.setProperty('--px', `${(dx / dist) * reach}px`);
        svg.style.setProperty('--py', `${(dy / dist) * reach}px`);
      });
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  const pet = () => {
    setLine(LINES[count.current++ % LINES.length]);
    setShow(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setShow(false), 2200);
  };

  return (
    <div className="cat-corner">
      <span className={`cat-bubble${show ? ' show' : ''}`} aria-live="polite">
        {line}
      </span>
      <button type="button" className="cat" onClick={pet} aria-label="Pet the kitten">
        <svg ref={svgRef} viewBox="4 0 210 204" aria-hidden="true">
          <defs>
            <linearGradient id="cat-blue" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#b7c2d1" />
              <stop offset="1" stopColor="#8d9cb0" />
            </linearGradient>
            <clipPath id="cat-head-clip">
              <path d={HEAD} />
            </clipPath>
            <clipPath id="cat-body-clip">
              <path d={BODY} />
            </clipPath>
          </defs>

          <g className="cat-tail">
            <path
              className="blue ink"
              d="M154 140 C172 126 178 100 172 78 C169 66 184 62 187 75 C193 104 184 134 164 150 Z"
            />
            <path className="tip" d="M172 80 C170 70 182 66 185 76 C186 82 182 86 178 84 Z" />
          </g>

          <g className="cat-body">
            <path className="blue ink" d={BODY} />
            <g clipPath="url(#cat-body-clip)">
              <path
                className="cream"
                d="M50 116 C46 146 52 170 64 186 L110 186 C116 160 116 130 106 110 Z"
              />
              <ellipse className="neck-shadow" cx="92" cy="128" rx="44" ry="9" />
              <path
                className="belly-shade"
                d="M120 170 C134 176 150 176 166 168 L166 190 L120 190 Z"
              />
            </g>
            <path className="fur-tick" d="M68 146 l4 5 M80 152 l3 5 M94 148 l3 5 M74 162 l3 4" />

            <path className="cream ink" d="M139 160 L140 184 C140 193 160 193 160 184 L158 156 Z" />
            <path className="cream ink" d="M62 158 L62 186 C62 195 84 195 84 186 L84 160 Z" />
            <path className="cream ink" d="M94 160 L94 188 C94 197 116 197 116 188 L116 160 Z" />
            <path
              className="toe"
              d="M70 191 v-5 M76 191 v-5 M102 193 v-5 M108 193 v-5 M147 189 v-4 M153 189 v-4"
            />
          </g>

          {spooky && (
            <g className="pumpkin">
              <path className="stem" d="M37 160 C36 154 38 150 43 148" />
              <path
                className="leaf ink-2"
                d="M41 154 C46 149 54 151 54 156 C49 158 45 158 41 154 Z"
              />
              <ellipse className="orange ink-3" cx="25" cy="178" rx="13" ry="16" />
              <ellipse className="orange ink-3" cx="51" cy="178" rx="13" ry="16" />
              <ellipse className="orange-light ink-3" cx="38" cy="177" rx="14" ry="17.5" />
              <g className="pumpkin-face">
                <path d="M29 174 l4.5 -6.5 l4.5 6.5 Z" />
                <path d="M39 174 l4.5 -6.5 l4.5 6.5 Z" />
                <path d="M27 181 C31 190 45 190 49 181 L45.5 183.5 L42 181 L38 184.5 L34 181 L30.5 183.5 Z" />
              </g>
            </g>
          )}

          <g className="cat-head">
            <g className="cat-ear cat-ear-l">
              <path className="blue ink" d="M38 58 C34 34 38 14 46 8 C58 10 74 22 82 32 Z" />
              <path className="inner-ear" d="M44 46 C42 32 45 20 49 16 C57 19 66 26 71 32 Z" />
            </g>
            <g className="cat-ear cat-ear-r">
              <path className="blue ink" d="M146 58 C150 34 146 14 138 8 C126 10 110 22 102 32 Z" />
              <path
                className="inner-ear"
                d="M140 46 C142 32 139 20 135 16 C127 19 118 26 113 32 Z"
              />
            </g>

            <path className="blue" d={HEAD} />
            <g clipPath="url(#cat-head-clip)">
              <path
                className="cream"
                d="M92 44 C86 58 70 70 50 84 C34 104 52 136 92 136 C132 136 150 104 134 84 C114 70 98 58 92 44 Z"
              />
              <path className="marking" d="M80 34 l3 11 M92 31 v13 M104 34 l-3 11" />
            </g>
            <path className="ink" d={HEAD} fill="none" />

            <ellipse className="blush" cx="52" cy="104" rx="9" ry="5" />
            <ellipse className="blush" cx="132" cy="104" rx="9" ry="5" />

            <g className="cat-eyes">
              <circle className="iris" cx="64" cy="86" r="15.5" />
              <g className="cat-pupils">
                <circle className="pupil" cx="64" cy="85" r="12.5" />
                <circle className="glint" cx="69" cy="79" r="4.6" />
                <circle className="glint" cx="59" cy="91" r="2" />
              </g>
              <circle className="iris" cx="120" cy="86" r="15.5" />
              <g className="cat-pupils">
                <circle className="pupil" cx="120" cy="85" r="12.5" />
                <circle className="glint" cx="125" cy="79" r="4.6" />
                <circle className="glint" cx="115" cy="91" r="2" />
              </g>
            </g>

            <path
              className="nose"
              d="M86 103 C86 99.5 98 99.5 98 103 C98 106 94 108 92 109 C90 108 86 106 86 103 Z"
            />
            <path
              className="mouth"
              d="M92 109 v3 M92 112 C90 116.5 84.5 116.5 82.5 113 M92 112 C94 116.5 99.5 116.5 101.5 113"
            />
            <path
              className="whisker"
              d="M46 101 L14 95 M47 108 L16 111 M138 101 L170 95 M137 108 L168 111"
            />
          </g>
          {spooky && (
            <g className="bat">
              <g transform="translate(180 22) scale(1.3) translate(-175 -21)">
                <g className="bat-wings">
                  <path d="M171 21 C165 13 156 13 151 17 C155 19 156 24 154 27 C158 25 162 26 164 29 C165 25 168 23 171 24 Z" />
                  <path d="M179 21 C185 13 194 13 199 17 C195 19 194 24 196 27 C192 25 188 26 186 29 C185 25 182 23 179 24 Z" />
                </g>
                <path d="M171 15 L172.5 10 L174.5 14 L175.5 14 L177.5 10 L179 15 Z" />
                <ellipse cx="175" cy="21" rx="5.5" ry="7" />
                <circle className="bat-eye" cx="173" cy="20" r="1.1" />
                <circle className="bat-eye" cx="177" cy="20" r="1.1" />
              </g>
            </g>
          )}
        </svg>
      </button>
    </div>
  );
}

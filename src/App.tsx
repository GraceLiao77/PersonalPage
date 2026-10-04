import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import Works from './components/Works/Works';
import Cat from './components/Cat/Cat';
import Footer from './components/Footer/Footer';
import { useActiveTab } from './hooks/useActiveTab';

export default function App() {
  const [tab, selectTab] = useActiveTab();

  return (
    <>
      <div className="bg-dots" />
      <div className="bg-fade" />
      <div className="col">
        <Nav active={tab} />
        <main>
          <Hero />
          <Works active={tab} onSelect={selectTab} />
        </main>
        <Footer />
      </div>
      <Cat />
    </>
  );
}

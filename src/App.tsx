import Footer from './components/globals/Footer';
import Section1 from './components/S1Portada';
import Section2 from './components/S2Event';
import BigComponet from './components/globals/ComponentBig';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <BackgroundEffect /> */}
      <div className="overflow-x-hidden">
        <Section1 />
        <Section2 />
        <BigComponet />
      </div>
      <Footer />
    </div>
  );
}
export default App;

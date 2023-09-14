import Header from './../src/components/Header/Header'
import Brands from './components/Brands/Brands';
import Arrivels from './components/arrivels/Arrivels';

import Promo from './components/promo/Promo';

function App() {
  return (
    <div className="App">
      
      <Header/>
      <Promo/>
      <Brands/>
      <Arrivels/>
      
    </div>
  );
}

export default App;

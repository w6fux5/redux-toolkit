import { Route, Routes } from 'react-router-dom';
import { Home, SingleCocktail } from '@/pages';
import { Header } from '@/components';

const App = () => (
  <div className="App">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cocktail/:id" element={<SingleCocktail />} />
    </Routes>
  </div>
);

export default App;

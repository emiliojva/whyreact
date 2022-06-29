#Instalar bootstrap


## Instalar React Router
npm install history react-router-dom@6.0.0-beta.0

### BrowserRouter, Routes e Route

O BrowserRouter deve ser o componente pai que envolve tudo que depender do react-router. O Routes define a área em que vamos colocar os nossos Route. O Route recebe um caminho em path, se esse caminho for o mesmo do URL ele irá renderizar o component que estiver dentro de element={}.

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contato from './Contato';
import Sobre from './Sobre';
import Home from './Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="contato" element={<Contato />} />
        <Route path="*" element={<Pagina404 />} />				
      </Routes>
    </BrowserRouter>
  );
};
```
# Why React ?

Passo a Passo da Construçao do App.

<hr>

v1.0.0 - Instalar o React 
  
```cli
npm install -g create-react-app
create-react-app why-react
```

Executar 

```cli
cd why-react
npm start
```

<hr>

v1.0.1 - Limpar a instalaçao inicial 

   - Apagar CSS e arquivos de Testes.Desnecessários inicialmente.
   - Demonstrar criaçao de um Component Input, envolvido por um Component Header e Cabeçalho. No Component App.js

<hr>

v1.0.2 - Demonstrar uso de libs externas. Instalaçao e uso do Bootstrap com Component Input.  <br>
   Instalando:
   ```cli
    npm install bootstrap
    ```
    <br>

   Usando:
   ```
    /* Libs externas */
    import "bootstrap/dist/js/bootstrap.bundle.min.js";
    import "bootstrap/dist/css/bootstrap.min.css";
    ```

<hr>

v1.0.3 Introdindo Reatividade com Hook useState, para email e password. - v1.0.3
  ```useState``` 
  <hr>

v1.0.4 Efetuando Login com api externa. Refatorando ES6. Uso de API Fetch para consumo de dados, ES6 function async, try/catch, style Object, Component Loading, e capturando jwt com autenticacao. Interagindo com estados e eventos. Uso de Props - v1.0.4

<hr>

v1.0.5 Uso de React Routes, Header e footer estaticos, criacao de paginas de  login e listagem de regioes. Criacao de um service para consumir login da api. Usando table bootstrap em regioes 

  ##### Instalar React Router

  ```cli
  npm install history react-router-dom@6.0.0-beta.0
  ```

  ##### Usar no app

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

<hr>

v1.0.6 - Usando nova funcao da api para checar validade do token em Home e Regiao 

<hr>
   
v1.0.7 -  Listando Regioes e antes validando token.

<hr>

v1.0.8 -  Listando municipios por Regiao - 

<hr>




---
---
---


# README ORIGINAL DA EQUIPE React
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

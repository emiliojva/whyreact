import Footer from "./Footer";
import Input from "./formFields/Input";
import Header from "./Header";

import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";

function App() {
  return (
    <div class="container">
      <Header />

      <main>
        <Login />
      </main>

      <Footer />
    </div>
  );
}

export default App;

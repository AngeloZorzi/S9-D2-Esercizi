import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./CustomNavbar";
import MyFooter from "./MyFooter";
import Welcome from "./Welcome";
import AllTheBooks from "./AllTheBooks";

function App() {
  return (
    <>
      <body className="vh-100 bg-dark">
        <MyNavbar />
        <Welcome />
        <AllTheBooks />

        <MyFooter />
      </body>
    </>
  );
}

export default App;

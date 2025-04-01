import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./CustomNavbar";
import MyFooter from "./MyFooter";
import Welcome from "./Welcome";

function App() {
  return (
    <>
      <body className="vh-100">
        <MyNavbar />
        <Welcome />

        <MyFooter />
      </body>
    </>
  );
}

export default App;

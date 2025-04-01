import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./CustomNavbar";
import MyFooter from "./MyFooter";

function App() {
  return (
    <>
      <body className="vh-100">
        <MyNavbar />

        <MyFooter />
      </body>
    </>
  );
}

export default App;

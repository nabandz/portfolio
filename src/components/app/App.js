import { Route, Routes, useLocation } from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";

import Header from "../header/Header";
import Footer from "../footer/Footer";

import { MainPage, ExperiencePage, Page404 } from "../pages";

import "./app.scss";

function App() {
  const location = useLocation();

  return (
    <div className="app">
      <Header />
      <main className="main">
        <SwitchTransition component={null}>
          <CSSTransition
            key={location.pathname}
            timeout={300}
            classNames="page"
            unmountOnExit
          >
            <Routes location={location}>
              <Route key={"Page404"} path="*" element={<Page404 />}></Route>
              <Route key={"MainPage"} path="/" element={<MainPage />}></Route>
              <Route
                key={"ExperiencePage"}
                path="/experience"
                element={<ExperiencePage />}
              ></Route>
            </Routes>
          </CSSTransition>
        </SwitchTransition>
      </main>
      <Footer />
    </div>
  );
}

export default App;

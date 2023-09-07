import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";
import { Fragment } from "react";

import { DefaultLayout } from "./components/Layout";
import { AuthRoute } from "./hook/AuthRoute";

import { AuthProvider } from "./hook/AuthHook";

function App() {
  //Chỉ có 1 Router và 1 Routes
  //Router sẽ wrap lại tất cả những Routes
  //Routes bao gồm single Route
  //Route -> render the specific element on that Route
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            {publicRoutes.map((route, index) => {
              const Layout = route.layout === null ? Fragment : DefaultLayout;
              const Page = route.component;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    route?.require ? (
                      <AuthRoute role={route.require}>
                        <Page />
                      </AuthRoute>
                    ) : (
                      <Layout>
                        <Page />
                      </Layout>
                    )
                  }
                />
              );
            })}
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;

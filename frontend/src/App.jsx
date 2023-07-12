import { useEffect } from "react";
import WebFont from "webfontloader";
import router from "./router/Routes";
import { RouterProvider } from "react-router-dom";

const App = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Nunito", "Quicksand", "Poppins"],
      },
    });
  }, []);

  return <RouterProvider router={router} />;
};

export default App;

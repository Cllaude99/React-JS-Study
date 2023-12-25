import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import App from "./App";
import About from "./pages/About";
import Coins from "./pages/Coins";
import Coin from "./pages/Coin";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Coins />,
      },
      {
        path: ":coinId",
        element: <Coin />,
      },
    ],
  },
]);

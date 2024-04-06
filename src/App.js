import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import LayoutPage from "./pages/LayoutPage.js";
import InvestorsList from "./components/investors/InvestorsList.js";
import NewInventor from "./components/investors/NewInventor.js";
import InvestorDetails from "./components/investors/investorDetails/InvestorDetails.js";

import "./App.css";

const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <Navigate to="/investors" replace={true} />,
    },

    {
      path: "/investors",
      element: <LayoutPage />,
      children: [
        {
          index: true,
          element: <InvestorsList />,
        },
        {
          path: "addInvestor",
          element: <NewInventor />,
        },
        {
          path: ":id",
          element: <InvestorDetails />,
        },
      ],
    },
  ],
  {
    basename: "",
  }
);

function App() {
  return (
    <>
      {/* <Publik /> */}
      <RouterProvider router={routes} />
    </>
  );
}

export default App;

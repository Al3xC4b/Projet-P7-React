import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../pages/404/404";
import FicheLogement from "../../pages/Logement/Logement";
import Home from "../../pages/Home/Home.jsx";
import About from "../../pages/About/About.jsx";
import Layout from "../Layout/Layout.jsx";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <Layout />,
      errorElement: (
         <>
            <Header />
            <ErrorPage />
            <Footer />
         </>
      ),
      children: [
         {
            path: "/",
            element: <Home />,
         },
         {
            path: "/logement/:logementId",
            element: <FicheLogement />,
         },
         {
            path: "/about",
            element: <About />,
         },
      ],
   },
]);

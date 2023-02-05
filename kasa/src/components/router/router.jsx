import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import FicheLogement from "../../pages/Logement/Logement";
import Home from "../../pages/Home/Home.jsx";
import About from "../../pages/About/About.jsx";
import Layout from "../../Layout/Layout.jsx";
import Header from "../../Layout/Header/Header";
import Footer from "../../Layout/Footer/Footer";

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
         {
            path: "*",
            element: <ErrorPage />,
         },
      ],
   },
]);

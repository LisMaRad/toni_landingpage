import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Index from "../pages/Index";
import Impressum from "../pages/Impressum";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "", element: <Index /> },
            { path: "impressum", element: <Impressum /> },
        ],
    },
]);
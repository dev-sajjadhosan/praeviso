import RootLayout from "@/layouts/root-layout";
import AboutPage from "@/pages/about/about";
import HomePage from "@/pages/home/home";
import NotFoundPage from "@/pages/not-found/not-found";
import { createBrowserRouter, RouterProvider } from "react-router";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
]);

export default function RoutesComponent() {
  return (
    <main className="p-5 font-afacad h-full">
      <RouterProvider router={routes} />
    </main>
  );
}

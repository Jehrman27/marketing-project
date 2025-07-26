import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import { ProfileCardPage } from "./pages/ProfileCardPage/ProfileCardPage";
import { Layout } from "./pages/Layout/Layout";
import { TestimonialCardPage } from "./pages/TestimonialCardPage/TestimonialCardPage";
import { BlogCardPage } from "./pages/BlogCardPage/BlogCardPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "testimonial-card",
        element: <TestimonialCardPage />,
      },
      {
        path: "blog-card",
        element: <BlogCardPage />,
      },
      {
        path: "profile-card",
        element: <ProfileCardPage />,
      },
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};

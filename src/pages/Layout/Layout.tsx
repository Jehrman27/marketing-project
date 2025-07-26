import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <div className="fixed left-0 right-0 top-0 bottom-0 bg-gradient-to-br from-[#f9fafb] to-[#d2d6db]">
      <Outlet />
    </div>
  );
};

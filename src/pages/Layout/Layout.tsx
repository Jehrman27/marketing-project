import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <>
      <div className="fixed inset-0 bg-gradient-to-br from-[#f9fafb] to-[#d2d6db] -z-10"></div>
      <div className="relative min-h-screen">
        <Outlet />
      </div>
    </>
  );
};

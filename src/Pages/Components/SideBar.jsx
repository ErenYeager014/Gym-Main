import React from "react";
import { Link, NavLink } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  Avatar,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import brandImg from "../../assets/Images/raw_fitness_logo-01.png";
import routes from "../../Routers/routes";
import {
  useMaterialTailwindController,
  setOpenSidenav,
} from "../../Context/index";
const SideBar = () => {
  const [controller, dispatch] = useMaterialTailwindController();
  const { openSidenav } = controller;
  const brandName = "Raw Fitness";
  return (
    <>
      {" "}
      <aside
        className={`bg-white shadow-lg ${
          openSidenav ? "translate-x-0" : "-translate-x-80"
        }  fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0`}
      >
        <div className="relative border-b  border-blue-gray-50">
          <Link to="/" className="flex items-center gap-4 py-6 px-8">
            <Avatar src={brandImg} size="sm" />
            <Typography variant="h6" color="blue-gray">
              {brandName}
            </Typography>
          </Link>
          <IconButton
            variant="text"
            color="white"
            size="sm"
            ripple={false}
            className="absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
            onClick={() => setOpenSidenav(dispatch, false)}
          >
            <XMarkIcon strokeWidth={2.5} className="h-5 w-5 text-white" />
          </IconButton>
        </div>
        <div className="m-4">
          {routes.map(({ layout, title, pages }, key) => (
            <ul key={key} className="mb-4 flex flex-col gap-1">
              {title && (
                <li className="mx-3.5 mt-4 mb-2">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-black uppercase opacity-75"
                  >
                    {title}
                  </Typography>
                </li>
              )}
              {pages.map(({ icon, name, path }) => (
                <li key={name}>
                  <NavLink to={`/${layout}${path}`}>
                    {({ isActive }) => (
                      <Button
                        variant={isActive ? "gradient" : "text"}
                        color={isActive ? "orange" : "blue-gray"}
                        className="flex items-center gap-4 px-4 capitalize"
                        fullWidth
                      >
                        {icon}
                        <Typography
                          color="inhert"
                          className="font-medium capitalize"
                        >
                          {name}
                        </Typography>
                      </Button>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </aside>
    </>
  );
};

export default SideBar;

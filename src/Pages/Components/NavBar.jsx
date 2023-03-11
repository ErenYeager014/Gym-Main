import React, { useState, useEffect } from "react";
import {
  Navbar as MTNavbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <>
      {" "}
      <MTNavbar className="p-3">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          {/* <Link to="/"> */}
          <Typography
            variant="small"
            className="mr-4 ml-2 cursor-pointer py-1.5 font-bold"
          >
            GYM
          </Typography>
          {/* </Link> */}
          <div className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 hidden lg:inline-block">
            <Typography
              key={name}
              as="li"
              variant="small"
              color="blue-gray"
              className="capitalize"
            >
              Welcome
            </Typography>
          </div>
          <Button
            className="hidden lg:inline-block"
            variant="gradient"
            size="sm"
            color="orange"
          >
            Register
          </Button>
          <IconButton
            variant="text"
            size="sm"
            className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon strokeWidth={2} className="h-6 w-6" />
            ) : (
              <Bars3Icon strokeWidth={2} className="h-6 w-6" />
            )}
          </IconButton>
        </div>
        <MobileNav open={openNav}>
          <Button variant="gradient" size="sm" color="orange" fullWidth>
            Register
          </Button>
        </MobileNav>
      </MTNavbar>
    </>
  );
};

export default NavBar;

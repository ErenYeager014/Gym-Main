import { HomeIcon, UserCircleIcon, UsersIcon } from "@heroicons/react/24/solid";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
      },
      {
        icon: <UsersIcon {...icon} />,
        name: "All Members",
        path: "/allmembers",
      },
    ],
  },
];

export default routes;

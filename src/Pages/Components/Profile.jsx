import React from "react";
import {
  Card,
  CardBody,
  Avatar,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import brandImg from "../../assets/Images/victor-freitas-WvDYdXDzkhs-unsplash.jpg";
import profile from "../../assets/Images/raw_fitness_logo-01.png";
import Form from "./Sub-components/Form";

const Profile = () => {
  return (
    <>
      <div
        className={`relative mt-8 h-72 w-full overflow-hidden rounded-xl  bg-cover bg-center`}
        style={{ backgroundImage: `url(${brandImg})` }}
      >
        <div className="absolute inset-0 h-full w-full bg-amber-500/10" />
      </div>
      <Card className="mx-3 -mt-16 mb-6 lg:mx-4">
        <CardBody className="p-4">
          <div className="mb-10 flex items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <Avatar
                src={profile}
                alt="bruce-mars"
                size="xl"
                className="rounded-lg shadow-lg shadow-blue-gray-500/40"
              />
              <div>
                <Typography variant="h5" color="blue-gray" className="mb-1">
                  Richard Davis
                </Typography>
                <Typography
                  variant="small"
                  className="font-normal text-blue-gray-600"
                >
                  CEO / Co-Founder
                </Typography>
              </div>
            </div>
          </div>
          <Form />
        </CardBody>
      </Card>
    </>
  );
};

export default Profile;

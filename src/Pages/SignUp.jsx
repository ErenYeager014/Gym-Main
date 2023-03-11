import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Typography,
} from "@material-tailwind/react";
import Background from "../assets/Images/victor-freitas-WvDYdXDzkhs-unsplash.jpg";
import { Formik } from "formik";
import * as Yup from "yup";
import TextInput from "./Components/InputFields/TextInput";
import CardHeaders from "./Components/Sub-components/LoginPage/CardHeader";
import CardFoter from "./Components/Sub-components/LoginPage/CardFoter";
const SignUp = () => {
  return (
    <>
      <img
        src={Background}
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
            cpassword: "",
          }}
          validationSchema={Yup.object().shape({
            username: Yup.string().min(4, "Minimum 4 character").required(),
            email: Yup.string().email().required(),
            password: Yup.string().required(),
            cpassword: Yup.string()
              .oneOf([Yup.ref("password"), null], "Passwords must match")
              .required(),
          })}
        >
          {({
            values,
            handleChange,
            handleBlur,
            errors,
            touched,
            setFieldValue,
            handleSubmit,
          }) => (
            <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
              <CardHeaders Title="sign Up" />
              <CardBody className="flex flex-col gap-4">
                <div>
                  <TextInput
                    label="Name"
                    name="username"
                    size="lg"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    color="orange"
                    error={
                      errors.username && touched.username && errors.username
                    }
                    success={
                      !errors.username && touched.username ? "Valid" : ""
                    }
                  />
                  <p className="text-red-500 text-xs italic">
                    {errors.username && touched.username && errors.username}
                  </p>
                </div>
                <div>
                  <TextInput
                    type="email"
                    label="Email"
                    name="email"
                    size="lg"
                    color="orange"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.email && touched.email && errors.email}
                    success={!errors.email && touched.email ? "Valid" : ""}
                  />
                  <p className="text-red-500 text-xs italic">
                    {errors.email && touched.email && errors.email}
                  </p>
                </div>
                <div>
                  <TextInput
                    type="password"
                    label="Password"
                    size="lg"
                    color="orange"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      errors.password && touched.password && errors.password
                    }
                    success={
                      !errors.password && touched.password ? "Valid" : ""
                    }
                  />
                  <p className="text-red-500 text-xs italic">
                    {errors.password && touched.password && errors.password}
                  </p>
                </div>
                <div>
                  <TextInput
                    type="password"
                    label="Confirm Password"
                    size="lg"
                    color="orange"
                    name="cpassword"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      errors.cpassword && touched.cpassword && errors.cpassword
                    }
                    success={
                      !errors.cpassword && touched.cpassword ? "Valid" : ""
                    }
                  />
                  <p className="text-red-500 text-xs italic">
                    {errors.cpassword && touched.cpassword && errors.cpassword}
                  </p>
                </div>
              </CardBody>
              <CardFoter Title="Sign up" handleSubmit={handleSubmit} />
            </Card>
          )}
        </Formik>
      </div>
    </>
  );
};

export default SignUp;

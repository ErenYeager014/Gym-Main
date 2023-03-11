import React, { useEffect } from "react";
import Background from "../assets/Images/victor-freitas-WvDYdXDzkhs-unsplash.jpg";
import { Card, CardBody } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import TextInput from "./Components/InputFields/TextInput";
import Axios from "../Axios/Axios";
import CardHeader from "./Components/Sub-components/LoginPage/CardHeader";
import CardFooter from "./Components/Sub-components/LoginPage/CardFoter";
import CardHeaders from "./Components/Sub-components/LoginPage/CardHeader";
import CardFoter from "./Components/Sub-components/LoginPage/CardFoter";
const Login = () => {
  const navigate = useNavigate();
  const fetcher = async () => {
    // console.log("request");
    // const res = await Axios.get("/signin");
    // if (res.data.message) {
    //   navigate("/dashborad/home");
    // }
    const res = await fetch("http://localhost:5000/signin", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data = await res.json();
    if (data.message) {
      navigate("dashboard/home");
    }
  };
  useEffect(() => {
    fetcher();
  }, []);
  const sender = async (values) => {
    // try {
    //   const res = await Axios.post("/signin", JSON.stringify(values));
    //   console.log(res.status);
    //   if (res.status == 208) {
    //     console.log(res.data.message);
    //   }
    //   // Wrong password
    //   else if (res.status === 401) {
    //     alert("wrong password");
    //   }
    //   //success
    //   else {
    //     navigate("/dashboard/home");
    //   }
    // } catch (e) {
    //   console.log(e);
    // }
    try {
      const req = await fetch("http://localhost:5000/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
        withCredentials: true, // should be there
        credentials: "include", // should be there for cookies
      });
      const res = await req.json();

      // mail not exists
      if (req.status == 208) {
        console.log(res);
      }
      // Wrong password
      else if (req.status == 401) {
        console.log(pmm);
      }
      //success
      else {
        navigate("/dashboard/home");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      {" "}
      <img
        src={Background}
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50 " />
      <div className="container mx-auto p-4">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            password: Yup.string().required("Required"),
          })}
          onSubmit={(values) => {
            sender(values);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            setFieldValue,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
                <CardHeaders Title="Login" />
                <CardBody className="flex flex-col gap-4">
                  <TextInput
                    type="email"
                    name="email"
                    label="Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    error={
                      errors.password && touched.password && errors.password
                    }
                    success={!errors.email && touched.email ? "Valid" : ""}
                  />
                  <p className="text-red-500 text-xs italic">
                    {errors.email && touched.email && errors.email}
                  </p>
                  <TextInput
                    type="password"
                    name="password"
                    label="Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
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
                </CardBody>
                <CardFoter Title="Login" handleSubmit={handleSubmit} />
              </Card>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Login;

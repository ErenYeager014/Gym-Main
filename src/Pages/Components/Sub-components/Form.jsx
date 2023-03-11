import React from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Formik } from "formik";
import * as Yup from "yup";
import TextInput from "../InputFields/TextInput";
const Form = () => {
  return (
    <>
      <Formik
        initialValues={{
          username: "",
          email: "",
          opass: "",
          npass: "",
          cpass: "",
        }}
        validationSchema={Yup.object().shape({
          username: Yup.string(),
          email: Yup.string().email("Please enter valid email"),
          opass: Yup.string(),
          npass: Yup.string(),
          cpass: Yup.string().oneOf(
            [Yup.ref("npass"), null],
            "Passwords must match"
          ),
        })}
        onSubmit={(values) => {
          alert(JSON.stringify(values));
        }}
      >
        {({
          values,
          handleBlur,
          handleChange,
          setFieldValue,
          handleSubmit,
          touched,
          errors,
        }) => (
          <form
            className="w-100 grid grid-cols-1 gap-4 md:grid-cols-2"
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <Typography variant="medium" className="md:col-span-2">
              User Details
            </Typography>
            <TextInput
              label="Username"
              name="username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
              error={errors.username && touched.username && errors.username}
              success={!errors.username && touched.username ? "Valid" : ""}
            />
            <div>
              <TextInput
                label="Email"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                error={errors.email && touched.email && errors.email}
                success={!errors.email && touched.email ? "Valid" : ""}
              />
              <p className="text-red-500 text-xs italic">
                {errors.email && touched.email && errors.email}
              </p>
            </div>
            <Typography variant="medium" className="md:col-span-2">
              Password
            </Typography>
            <TextInput
              label="old password"
              name="opass"
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.opass && touched.opass && errors.opass}
              success={!errors.opass && touched.opass ? "Valid" : ""}
            />
            <TextInput
              label="New password"
              type="password"
              name="npass"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.npass && touched.npass && errors.npass}
              success={!errors.npass && touched.npass ? "Valid" : ""}
            />
            <div>
              <TextInput
                label="Confirm Password"
                type="password"
                name="cpass"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.cpass && touched.cpass && errors.cpass}
                success={!errors.cpass && touched.cpass ? "Valid" : ""}
              />
              <p className="text-red-500 text-xs italic">
                {errors.cpass && touched.cpass && errors.cpass}
              </p>
            </div>
            <Button
              className="md:col-span-2"
              fullWidth
              type="submit"
              onSubmit={handleSubmit}
            >
              Update
            </Button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Form;

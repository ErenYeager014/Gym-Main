import React from "react";
import {
  Input,
  Select,
  Option,
  Typography,
  CardBody,
  Card,
  Button,
} from "@material-tailwind/react";
import * as Yup from "yup";
import brandImg from "../../assets/Images/victor-freitas-WvDYdXDzkhs-unsplash.jpg";
import { Formik } from "formik";
import TextInput from "./InputFields/TextInput";
const EditMemebers = () => {
  const formatDate = (date, n) => {
    var d = new Date(date);

    var month = d.getMonth() + Number(n);

    var day = d.getDate(),
      year = d.getFullYear();

    return `${day}-${month}-${year}`;
  };
  return (
    <>
      <div
        className={`relative mt-8 h-72 w-full overflow-hidden rounded-xl  bg-cover bg-center`}
        style={{ backgroundImage: `url(${brandImg})` }}
      >
        <div className="absolute inset-0 h-full w-full bg-amber-500/10" />
      </div>
      <Formik
        initialValues={{
          memType: "",
          fdate: "",
          todate: "",
          amount: "",
          mop: "",
        }}
        validationSchema={Yup.object({
          memType: Yup.string().required(),
          fdate: Yup.date().required(),
          todate: Yup.date().required(),
          amount: Yup.number().required(),
          mop: Yup.string().required(),
        })}
      >
        {({
          values,
          handleChange,
          handleBlur,
          setFieldValue,
          errors,
          touched,
        }) => (
          <Card className="mx-3 -mt-16 mb-6 lg:mx-4">
            <CardBody className="p-4">
              <Typography
                varient="lg"
                color="blue-grey"
                className="font-bold py-4 text-2xl"
              >
                Add Membership
              </Typography>
              <form className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Select
                  label="membership-Type"
                  name="memType"
                  onChange={(e) => {
                    console.log(e);
                    setFieldValue("memType", e);
                    setFieldValue("todate", values.fdate, e);
                  }}
                  onBlur={handleBlur}
                  error={errors.memType && touched.memType && errors.memType}
                  success={!errors.memType && touched.memType ? "valid" : ""}
                >
                  <Option value="1">1 month</Option>
                  <Option value="2">2 month</Option>
                  <Option value="3">3 month</Option>
                </Select>
                <Input
                  label="From-Date"
                  type="date"
                  name="fdate"
                  onChange={(e) => {
                    setFieldValue("fdate", e.target.value);
                    console.log(values.memType);
                    setFieldValue(
                      "todate",
                      formatDate(e.target.value, values.memType)
                    );
                  }}
                  onBlur={handleBlur}
                  error={errors.fdate && touched.fdate && errors.fdate}
                  success={!errors.fdate && touched.fdate ? "valid" : ""}
                />
                <Input
                  label="To-Date"
                  type="date"
                  name="todate"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.todate}
                  error={errors.todate && touched.todate && errors.todate}
                  success={!errors.todate && touched.todate ? "valid" : ""}
                />
                <TextInput
                  type="number"
                  label="Amount"
                  name="amount"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.amount && touched.amount && errors.amount}
                  success={!errors.amount && touched.amount ? "valid" : ""}
                />
                <Select
                  label="Payment-Method"
                  name="mop"
                  onChange={(e) => setFieldValue("mop", e)}
                  onBlur={handleBlur}
                  error={errors.mop && touched.mop && errors.mop}
                  success={!errors.mop && touched.mop ? "valid" : ""}
                >
                  <Option value="upi">Upi</Option>
                  <Option value="cash">Cash</Option>
                </Select>
                <Button className="md:col-span-2" color="orange" fullWidth>
                  Edit{" "}
                </Button>
              </form>
            </CardBody>
          </Card>
        )}
      </Formik>
    </>
  );
};

export default EditMemebers;

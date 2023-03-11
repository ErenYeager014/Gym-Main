import React, { useState } from "react";
import {
  Card,
  CardBody,
  Input,
  Select,
  Option,
  Typography,
  Button,
} from "@material-tailwind/react";
import brandImg from "../../assets/Images/victor-freitas-WvDYdXDzkhs-unsplash.jpg";
import { Formik } from "formik";
import * as Yup from "yup";
import TextInput from "./InputFields/TextInput";
const formatDate = (date = 0, m = 0, days = 0) => {
  if ((date && m) || (date && days)) {
    var d = new Date(date);
    if (m) {
      d.setMonth(Number(d.getMonth()) + Number(m));
    }
    if (days) {
      d.setDate(Number(d.getDate()) + Number(days));
    }
    var month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return [year, month, day].join("-");
  } else {
    return "";
  }
};
const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const days = [];
for (let i = 0; i < 30; i++) {
  days.push(i);
}
const AddMembership = () => {
  const [mop, setmop] = useState();
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
          month: "",
          days: "",
          fdate: "",
          todate: "",
          amount: "",
          mop: "",
        }}
        validationSchema={Yup.object({
          month: Yup.number().required(),
          days: Yup.number().required(),
          fdate: Yup.date().required(),
          todate: Yup.date().required(),
          amount: Yup.number().required(),
          mop: Yup.string().required(),
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
          errors,
          touched,
        }) => (
          <Card className="mx-3 -mt-16 mb-6 lg:mx-4">
            <CardBody className="p-4">
              <Typography
                varient="xlg"
                color="blue-grey"
                className="font-bold py-4 text-3xl"
              >
                Add Membership
              </Typography>
              <form className="grid grid-cols-1 gap-7 md:grid-cols-2">
                <Select
                  label="Months"
                  name="month"
                  onChange={(e) => {
                    console.log(e);
                    setFieldValue("month", e);
                    setFieldValue(
                      "todate",
                      formatDate(values.fdate, e, values.days)
                    );
                  }}
                  onBlur={handleBlur}
                  error={errors.month && touched.month && errors.month}
                  success={!errors.month && touched.month ? "Valid" : ""}
                >
                  {months.map((mon, i) => {
                    return (
                      <Option value={mon} key={i}>
                        {mon}
                      </Option>
                    );
                  })}
                </Select>
                <Select
                  label="Days"
                  name="days"
                  onChange={(e) => {
                    setFieldValue("days", e);
                    setFieldValue(
                      "todate",
                      formatDate(values.fdate, values.month, e)
                    );
                  }}
                  onBlur={handleBlur}
                  error={errors.days && touched.days && errors.days}
                  success={!errors.days && touched.days ? "Valid" : ""}
                >
                  {days.map((mon) => {
                    return <Option value={mon}>{mon}</Option>;
                  })}
                </Select>
                <TextInput
                  type="date"
                  name="fdate"
                  label="From Date"
                  onChange={(e) => {
                    console.log(e.target.value);
                    setFieldValue("fdate", e.target.value);
                    setFieldValue(
                      "todate",
                      formatDate(e.target.value, values.month, values.days)
                    );
                  }}
                  onBlur={handleBlur}
                  value={values.fdate}
                  error={errors.fdate && touched.fdate && errors.fdate}
                  success={!errors.fdate && touched.fdate ? "Valid" : ""}
                />
                <TextInput
                  type="date"
                  name="todate"
                  label="To Date"
                  readonly
                  onBlur={handleBlur}
                  value={values.todate}
                  error={errors.todate && touched.todate && errors.todate}
                  success={!errors.todate && touched.todate ? "Valid" : ""}
                />
                <TextInput
                  type="number"
                  name="amount"
                  label="Amount"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.amount}
                  error={errors.amount && touched.amount && errors.amount}
                  success={!errors.amount && touched.amount ? "Valid" : ""}
                />

                <Select
                  label="payment Method"
                  name="mop"
                  onChange={(e) => {
                    console.log(e);
                    setFieldValue("mop", e);
                  }}
                  onBlur={handleBlur}
                  error={errors.mop && touched.mop && errors.mop}
                  success={!errors.mop && touched.mop ? "Valid" : ""}
                >
                  <Option value="cash">Cash</Option>
                  <Option value="upi">Upi</Option>
                </Select>
                <Button color="orange" className="md:col-span-2" fullWidth>
                  Add Membership
                </Button>
              </form>
            </CardBody>
          </Card>
        )}
      </Formik>
    </>
  );
};

export default AddMembership;

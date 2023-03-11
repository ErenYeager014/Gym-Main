import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Chip,
} from "@material-tailwind/react";

import { allmemberData } from "../../../../public/dummydata/allmemberData";
const AllMemeberShipTable = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="mt-12 mb-8 flex flex-col gap-12">
        <Card>
          <CardHeader variant="gradient" color="orange" className="mb-8 p-6">
            <Typography variant="h6" color="white">
              {data.title} Table
            </Typography>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {[
                    "id",
                    "Name",
                    "Phone Number",
                    "months",
                    "days",
                    "status",
                    "from date",
                    "To Date",
                    "amount",
                    "Method Of Payment",
                  ].map((el) => (
                    <th
                      key={el}
                      className="border-b border-blue-gray-50 py-3 px-5 text-left"
                    >
                      <Typography
                        variant="small"
                        className="text-[11px] font-bold uppercase text-blue-gray-400"
                      >
                        {el}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data?.data.map((props, key) => {
                  const className = `py-3 px-5 ${
                    key === data?.data.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={props.name}>
                      <td className={className}>
                        <Typography
                          className="text-xs font-semibold"
                          color="blue-gray"
                        >
                          {key}
                        </Typography>
                      </td>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <div>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {props.name}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <Typography
                          className="text-xs font-semibold"
                          color="blue-gray"
                        >
                          {props.ph_no}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography
                          className="text-xs font-semibold"
                          color="blue-gray"
                        >
                          {props.mon}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography
                          className="text-xs font-semibold"
                          color="blue-gray"
                        >
                          {props.days}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography
                          className="text-xs font-semibold"
                          color="blue-gray"
                        >
                          {props.from_date}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Chip
                          variant="gradient"
                          color={props.status === "active" ? "green" : "red"}
                          value={props.status}
                          className="py-1.5 px-3 rounded text-[11px] font-medium  "
                        />
                      </td>
                      <td className={className}>
                        <Typography
                          className="text-xs font-semibold"
                          color="blue-gray"
                        >
                          {props.to_date}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography
                          className="text-xs font-semibold"
                          color="blue-gray"
                        >
                          {props.amount}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography
                          className="text-xs font-semibold"
                          color="blue-gray"
                        >
                          {props.mop}
                        </Typography>
                      </td>

                      <td className={className}>
                        <Typography
                          color="blue-gray"
                          className="text-xs font-semibold"
                        >
                          Edit
                        </Typography>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default AllMemeberShipTable;

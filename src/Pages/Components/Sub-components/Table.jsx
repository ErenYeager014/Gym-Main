import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Chip,
} from "@material-tailwind/react";
import authorsTableData from "../../../../public/dummydata/authorData";
import TableHeader from "./Table/TableHeader";
const Table = () => {
  return (
    <>
      <div className="mt-12 mb-8 flex flex-col gap-12">
        <Card>
          <CardHeader variant="gradient" color="orange" className="mb-8 p-6">
            <Typography variant="h6" color="white">
              Members Table
            </Typography>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <TableHeader
                headers={[
                  "id",
                  "Name",
                  "DOB",
                  "Blood Group",
                  "Gender",
                  "Phone",
                  "Profession",
                ]}
              />
              <tbody>
                {authorsTableData.map((props, key) => {
                  const className = `py-3 px-5 ${
                    key === authorsTableData.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={name}>
                      <td className={className}>
                        <Chip
                          variant="gradient"
                          color="orange"
                          value={key}
                          className="py-1.5 px-3 rounded text-[11px] font-medium  cursor-pointer"
                        />
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
                          {props.dob}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography
                          className="text-xs font-semibold"
                          color="blue-gray"
                        >
                          {props.bloodgroup}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography
                          className="text-xs font-semibold"
                          color="blue-gray"
                        >
                          {props.Gender}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography
                          className="text-xs font-semibold"
                          color="blue-gray"
                        >
                          {props.phoneNO}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography
                          className="text-xs font-semibold"
                          color="blue-gray"
                        >
                          {props.profession}
                        </Typography>
                      </td>
                      {/* <td className={className}>
                        <Typography
                          color="blue-gray"
                          className="text-xs font-semibold"
                        >
                          Edit
                        </Typography>
                      </td> */}
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

export default Table;

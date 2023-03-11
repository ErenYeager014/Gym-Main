import React from "react";
import { Typography } from "@material-tailwind/react";
const TableHeader = ({ headers }) => {
  return (
    <>
      <thead>
        <tr>
          {headers.map((el) => (
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
    </>
  );
};

export default TableHeader;

import React from "react";
import { CardHeader, Typography } from "@material-tailwind/react";
const CardHeaders = ({ Title }) => {
  return (
    <>
      <CardHeader
        variant="gradient"
        color="orange"
        className="mb-4 grid h-28 place-items-center"
      >
        <Typography variant="h3" color="white">
          {Title}
        </Typography>
      </CardHeader>
    </>
  );
};

export default CardHeaders;

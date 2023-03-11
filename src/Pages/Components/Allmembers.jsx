import React from "react";
import Table from "../Components/Sub-components/Table";
import AllMemeberShipTable from "./Sub-components/AllMemeberShipTable";
import { allmemberData } from "../../../public/dummydata/allmemberData";
import MembershipTable from "./Sub-components/MembershipTable";
const Allmembers = () => {
  return (
    <div>
      {allmemberData.map((data) => {
        return <AllMemeberShipTable data={data} />;
      })}
      <Table />
    </div>
  );
};

export default Allmembers;

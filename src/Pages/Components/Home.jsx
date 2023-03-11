import React, { useEffect } from "react";
import StatisticsCard from "./Sub-components/StatisticsCard";
import statisticsCardsData from "../../../public/dummydata/statisticalcarddata";
import Table from "./Sub-components/Table";
import Axios from "../../Axios/Axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const fetcher = async () => {
    const req = await fetch("http://localhost:5000/user/members", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data = await req.json();
    if (req.status == 401) {
      // navigate("/");
    }
  };
  useEffect(() => {
    fetcher();
  }, []);

  return (
    <>
      <div className="mt-12">
        <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
          {statisticsCardsData.map(({ icon, title, ...rest }) => (
            <StatisticsCard
              key={title}
              {...rest}
              title={title}
              icon={React.createElement(icon, {
                className: "w-6 h-6 text-white",
              })}
            />
          ))}
        </div>
        <Table />
      </div>
    </>
  );
};

export default Home;

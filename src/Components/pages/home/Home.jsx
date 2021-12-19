import React from "react";
// import FeaturedInfo from "../../featuredinfo/FeaturedInfo";
import "./Home.css";
import Finfo from "../../featuredinfo/Finfo.jsx";
export default function Home() {
  const data = [
    { title: "Orders", revenue: "$4000", profit: "+12%" },
    { title: "Payment", revenue: "$2200", profit: "-6%" },
    { title: "Due Balance", revenue: "$1800", profit: "+8%" },
  ];
  return (
    <div className="home">
      <div className="featured">
        {data.map((user, index) => {
          return (
            <div className="featuredItems">
              <Finfo
                key={index}
                title={user.title}
                revenue={user.revenue}
                profit={user.profit}
              />
              
            </div>
          );
        })}
      </div>
    </div>
  );
}

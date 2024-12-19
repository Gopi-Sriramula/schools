import React from "react";
import "./style.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function SchoolsData({value}) {
  const { data } = useSelector((state) => state.a);
  const data2 = data.filter(item=>item.schoolName.toLowerCase().includes(value.toLowerCase()));
  return (
    <div className="schoolData">
      {data2.map((item,i) => {
        return (
          <Link className="chip" to={`/showSchools/${i}`} key={item.id}>
            <div className="logoContainer">
              <img
                className="logo"
                src={item.img}
                alt="Image failed to load"
                loading="lazy"
              />
            </div>
            <span className="city">{item.city}</span>
            <div className="about">
              <h2 className="h2">{item.schoolName}</h2>
              <span className="street">{item.state}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default SchoolsData;

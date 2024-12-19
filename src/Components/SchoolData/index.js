import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./style.css";
function SchoolData() {
  const { id } = useParams();
  const { data } = useSelector((state) => state.a);
  const item = [data[id]];
  console.log(item);
  if (!item) {
    return <h1 style={{ margin: "1rem" }}>Loading....</h1>;
  }
  return (
    <div>
      {item.map((item) => {
        return (
          <div className="schoolDetails">
            <div className="div1">
              <img src={item.img} className="logo2" />
              <div className="nameCity">
                <h1>
                  {item.schoolName},{item.city}
                </h1>
                <span>{item.state}</span>
              </div>
            </div>
            <div className="div2">
              <h1 className="h1">School Information</h1>
              <div>
                <b>School Board: </b>
                <p>CBSE</p>
              </div>
              <div>
                <b>Type: </b>
                <p>	Co-Education</p>
              </div>
              <div>
                <b>Hostel Facility: </b>
                <p>Day cum Residential School</p>
              </div>
              <div>
                <b>Address:</b>
                <p>{item.address}</p>
              </div>
              <div>
                <b>Email: </b>
                <p>{item.email}</p>
              </div>
              <div>
                <b>Contact Number: </b>
                <p>{item.phoneNo}</p>
              </div>
              <div>
                <b>Medium of Instruction: </b>
                <p>English</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SchoolData;

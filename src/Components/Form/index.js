import { useDispatch } from "react-redux";
import "./style.css";
import { addSchool } from "../../store";
let id = 1005
function Form() {
  const dispatch = useDispatch();
  const onSubmit = function (e) {
    e.preventDefault();
    const schoolData = {
      id: id,
      img:e.target.image.value,
      schoolName:e.target.name.value,
      city: e.target.city.value,
      state:e.target.state.value,
      phoneNo: e.target.contact.value,
      email: e.target.email.value,
      adrress: e.target.address.value,
    };
    dispatch(addSchool(schoolData))
    e.target.reset();
    id++;
  };
  return (
    <div className="form">
      <h1 className="head2">Add Your School by filling below details</h1>
      <form onSubmit={onSubmit}>
        <div className="input">
          <input type="text" placeholder="School Name" name="name" required />
        </div>
        <div className="input">
          <input type="email" placeholder="Email" name="email" required />
        </div>
        <div className="textarea">
          <textarea name="address" placeholder="School Address" required />
        </div>
        <div className="input">
          <input type="text" placeholder="City" name="city" required />
        </div>
        <div className="input">
          <input type="text" placeholder="State" name="state" required />
        </div>
        <div className="input">
          <input
            type="number"
            placeholder="Contact number"
            name="contact"
            required
          />
        </div>
        <div className="input">
          <input
            type="url"
            placeholder="Picture of your school"
            name="image"
            required
          />
        </div>
        <button type="submit">Sumbit</button>
      </form>
    </div>
  );
}

export default Form;

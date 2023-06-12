import { useState, useRef } from "react";

const ControlledForm = () => {
  const [state, setState] = useState({
    fname: "",
    lname: "",
    message: "",
    carBrand: "",
    isChecked: false,
    price: 0,
  });
  const carBrands = ["Mercedes", "BMW", " Maserati", "Infinity", "Audi"];
  const carBrandsOptions = carBrands.map((carBrand, key) => (
    <option value={carBrand} key={key}>
      {carBrand}
    </option>
  ));
  const handleChange = (e) => {
    const value =
      e.target.type == "checkbox" ? e.target.checked : e.target.value;
    setState((state) => ({
      ...state,
      [e.target.name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <>
      <h1>Controlled Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:{" "}
          <input
            name="fname"
            type="text"
            value={state.fname}
            onChange={handleChange}
          />
        </label>
        <label>
          Last Name:{" "}
          <input
            name="lname"
            type="text"
            value={state.lname}
            onChange={handleChange}
          />
        </label>
        <label>Your Message:</label>
        <textarea
          name="message"
          value={state.message}
          onChange={handleChange}
        ></textarea>
        <label>Car Brand:</label>
        <select name="carBrand" value={state.carBrand} onChange={handleChange}>
          <option value={""} disabled>
            -- Pick A Car Brand --
          </option>
          {carBrandsOptions}
        </select>
        <label>
          <input
            type="checkbox"
            name="isChecked"
            checked={state.isChecked}
            onChange={handleChange}
          />
          Is Checked?
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={state.gender === "male"}
            onChange={handleChange}
          />{" "}
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={state.gender === "female"}
            onChange={handleChange}
          />{" "}
          Female
        </label>
        <label>
          Price (between 0 and 50):
          <input
            type="range"
            name="price"
            min="0"
            max="50"
            value={state.price}
            onChange={handleChange}
          />
        </label>
        <button>Submit</button>
      </form>
      <h5>
        name: {state.fname}
        {state.lname}
      </h5>
      <p>Message:{state.message}</p>
      <h5>Favourite Car Brand: {state.carBrand}</h5>
      <h5>Is it checked? : {state.isChecked ? "Yes" : "No"}</h5>
      <h5>Gender : {state.gender}</h5>
      <h5>Price : ${state.price}</h5>
    </>
  );
};

export default ControlledForm;

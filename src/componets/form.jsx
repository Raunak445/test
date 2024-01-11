import React from "react";
import "./form.css";
import { useFormik } from "formik";

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: "",
    },
  });

  console.log('Form values', formik.values)
  return (
    <div className="form-container">
      <form>
        <label className="form-label" htmlFor="name">
          Name{" "}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-input"
          onChange={formik.handleChange}
          value={formik.values.name}
        ></input>

        <label className="form-lable" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-input"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <label
          htmlFor="channel"
          id="channel"
          name="channel"
          className="form-lable"
        >
          {" "}
          channel
        </label>
        <input
          type="text"
          id="channel"
          name="channel"
          className="form-input"
          onChange={formik.handleChange}
          value={formik.values.channel}
        />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;

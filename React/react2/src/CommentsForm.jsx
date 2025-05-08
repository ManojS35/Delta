import { useState } from "react";
import { useFormik } from "formik";

export default function CommentsForm({addNewComment}) {
//   let [formData, setFormData] = useState({
//     username: "",
//     remarks: "",
//     rating: 5,
//   });

    const validate = values => {
        const errors = {};
        if (!values.username) {
            errors.username = 'Username Required';
        }
    
        return errors;
    };

    const formik = useFormik({
        initialValues: {
            username : '',
            remarks : '',
            rating : 5,
        },
        validate,
        onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
        },
    });

//   let handleInputChange = (event) => {
//     setFormData((currData) => {
//       return { ...currData, [event.target.name]: event.target.value };
//     });
//   };

  let handleSubmit = (event) => {
    event.preventDefault();
    // console.log(formData)
    addNewComment(formik.values);
    setFormData({
      username: "",
      remarks: "",
      rating: 5,
    });
  };

  return (
    <div>
      <h3>Give a Comment</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username : </label>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={formik.values.username}
          onChange={formik.handleChange}
        />
        {formik.errors.username ? <p style={{color:'red'}}>{formik.errors.username}</p> : null}
        <br />
        <br />
        <label htmlFor="remarks">Remarks : </label>
        <textarea
          name="remarks"
          rows={5}
          placeholder="Write a Comment"
          value={formik.values.remarks}
          onChange={formik.handleChange}
        ></textarea>
        <br />
        <br />
        <label htmlFor="rating">Rating : </label>
        <input
          type="number"
          name="rating"
          placeholder="rating"
          min={1}
          max={5}
          value={formik.values.rating}
          onChange={formik.handleChange}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

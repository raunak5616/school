import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddSchool = () => {
  const { register, handleSubmit, reset } = useForm();

const onSubmit = async (data) => {
  const formData = new FormData();

  for (let key in data) {
    if (key === "image") {
      formData.append("image", data.image[0]); // FIX
    } else {
      formData.append(key, data[key]);
    }
  }

  try {
    const res = await axios.post("http://localhost:5000/api/schools", formData, {
      headers: { "Content-Type": "multipart/form-data" }
    });
    alert("School added!");
    reset();
  } catch (err) {
    console.error(err);
    alert("Error adding school");
  }
};

  return (
    <form
      className="form-container bg-white p-5 rounded shadow mb-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-xl font-bold mb-3">Add School</h2>
      <input {...register("name")} placeholder="Name" className="border p-2 w-full mb-2" />
      <input {...register("address")} placeholder="Address" className="border p-2 w-full mb-2" />
      <input {...register("city")} placeholder="City" className="border p-2 w-full mb-2" />
      <input {...register("state")} placeholder="State" className="border p-2 w-full mb-2" />
      <input {...register("contact")} placeholder="Contact" className="border p-2 w-full mb-2" />
      <input {...register("email_id")} placeholder="Email" className="border p-2 w-full mb-2" />
      <input type="file" {...register("image")} className="mb-2" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default AddSchool;

import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { TextField, Button, Card, CardContent, Typography } from "@mui/material";

export default function AddSchool() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    for (const key in data) formData.append(key, data[key]);

    await axios.post("http://localhost:5000/api/schools/add", formData);
    alert("School added successfully!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-lg shadow-xl">
        <CardContent>
          <Typography variant="h5" className="text-center mb-6 font-bold">
            Add School
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

            <TextField 
              label="School Name"
              fullWidth
              {...register("name", { required: true })}
              error={Boolean(errors.name)}
              helperText={errors.name && "School name is required"}
            />

            <TextField 
              label="Address"
              fullWidth
              {...register("address", { required: true })}
              error={Boolean(errors.address)}
              helperText={errors.address && "Address is required"}
            />

            <TextField 
              label="City"
              fullWidth
              {...register("city", { required: true })}
              error={Boolean(errors.city)}
              helperText={errors.city && "City is required"}
            />

            <TextField 
              label="State"
              fullWidth
              {...register("state", { required: true })}
              error={Boolean(errors.state)}
              helperText={errors.state && "State is required"}
            />

            <TextField 
              label="Contact Number"
              fullWidth
              type="number"
              {...register("contact", { required: true })}
              error={Boolean(errors.contact)}
              helperText={errors.contact && "Contact number is required"}
            />

            <TextField 
              label="Email"
              fullWidth
              type="email"
              {...register("email_id", { required: true })}
              error={Boolean(errors.email_id)}
              helperText={errors.email_id && "Valid email is required"}
            />

            <input
              type="file"
              className="block w-full border p-3 rounded bg-white"
              {...register("image", { required: true })}
            />
            {errors.image && <p className="text-red-500 text-sm">Image is required</p>}

            <Button 
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 2 }}
            >
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

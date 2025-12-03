import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

export default function ShowSchools() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/schools")
      .then(res => setSchools(res.data));
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Schools List</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {schools.map((school) => (
          <Card key={school.id} className="shadow-lg">
            <CardMedia
              component="img"
              height="180"
              image={`http://localhost:5000/uploads/schoolImages/${school.image}`}
            />

            <CardContent>
              <Typography variant="h6" className="font-bold">
                {school.name}
              </Typography>
              <Typography>{school.address}</Typography>
              <Typography className="text-gray-600">{school.city}</Typography>
            </CardContent>
          </Card>
        ))}

      </div>
    </div>
  );
}

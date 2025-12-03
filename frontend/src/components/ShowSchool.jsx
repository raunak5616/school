import React, { useEffect, useState } from "react";
import axios from "axios";

const ShowSchools = () => {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/schools")
      .then(res => setSchools(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="school-grid">
      {schools.map((school) => (
        <div key={school.id} className="card bg-white p-3 rounded shadow">
          <img src={`http://localhost:5000/uploads/${school.image}`} alt={school.name} />
          <h3 className="font-bold mt-2">{school.name}</h3>
          <p>{school.address}, {school.city}</p>
        </div>
      ))}
    </div>
  );
};

export default ShowSchools;

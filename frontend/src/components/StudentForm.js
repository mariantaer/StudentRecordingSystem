import React, { useState } from "react";

const StudentForm = ({ addStudent }) => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(name, course);
    setName("");
    setCourse("");
  };

  return (
    <div className="student-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default StudentForm;

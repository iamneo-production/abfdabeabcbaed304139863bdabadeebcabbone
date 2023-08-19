import React, { useState } from "react";
import CourseList from "./CourseList";
import CourseForm from "./CourseForm";

const CMS = () => {
  // Step 1: Define the state for managing courses using useState
  const [courses, setCourses] = useState([]);

  // Step 2: Define the function to add a new course to the state
  const handleAddCourse = (course) => {
    // Write logic to update the state with the new course
  };

  // Step 6: Define the function to delete a course from the state
  const handleDeleteCourse = (index) => {
    // Write logic to update the state by removing the course at the given index
  };

  return (
    <div className="container">
      {/* Step 3: Add a title as "Course Management System" to the page using h1 */}
     
      <div className="row mt-4">
        <div className="col-md-6">
          {/* Step 4: Render the CourseList component */}
          {/* Pass the 'courses' state and 'handleDeleteCourse' function */}
          
        </div>
        <div className="col-md-6">
          {/* Step 5: Render the CourseForm component and pass the handleAddCourse function */}
          {/* Pass the 'handleAddCourse' function */}
         
        </div>
      </div>
    </div>
  );
};

export default CMS;




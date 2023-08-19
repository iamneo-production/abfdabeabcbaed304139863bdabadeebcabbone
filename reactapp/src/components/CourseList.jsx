import React from 'react';

const CourseList = ({ courses, onDeleteCourse }) => {
  return (
    <div>
     {/* Step 1: Add the list title as "Course List" using h2*/}
      
      <ul className="list-group">
        {courses.map((course, i) => (
          <li key={i} className="list-group-item">
            {/* Step 2: Write the code to render course title and description */}
            {/* Include the title and description properties of the 'course' object */}
          
            {/* Step 3: Write the code to render a delete button */}
            {/*Use a className as "btn2 btn2-danger btn2-sm float-right" for styling */}
            {/* Add onClick handler that triggers the "onDeleteCourse" function with the correct index (i) as an argument.
             The button text should be "Delete". */}
           
          </li>
        ))}
      </ul>
    </div>
  );
};

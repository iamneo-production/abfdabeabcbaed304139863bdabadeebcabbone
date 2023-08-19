import React, { useState } from 'react';

const CourseForm = ({ onAddCourse }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    // Write the logic to submit the form
  };

  return (
    <div>
      {/* Step 1: Add the form title as "Create Course" using h2*/}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
             {/* Step 2: Write the code to render the title input field */}
             {/*Add the class name as "form-control" for styling */}
             {/*Set the placeholder text as "Course Title" */}
             {/*Use "title" for Value  and also include onChange to set the title */} 
          />
        </div>
        <div className="mb-3">
          <input
             {/* Step 3: Write the code to render the description input field */}
             {/* Add the class name as "form-control" for styling */}
             {/* Set the placeholder text as "Course Description" */}
             {/* Use "description" for Value and also include onChange to set the description */}
          />
        </div>
        {/* Step 4: Render the submit button name as "Add Course" */}
        {/* Use button className as "btn btn-primary" */}
      
      </form>
    </div>
  );
};

export default CourseForm;

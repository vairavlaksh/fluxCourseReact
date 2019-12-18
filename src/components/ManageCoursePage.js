import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi";

const ManageCoursePage = props => {
  const [errors, setErrors] = useState({});
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: ""
  });

  useEffect(() => {
    const slug = props.match.params.slug;

    if (slug) {
      courseApi.getCourseBySlug(slug).then(_course => setCourse(_course));
    }
  }, [props.match.params.slug]);

  const handleChange = ({ target }) => {
    setCourse({ ...course, [target.name]: target.value });
  };

  const isFormValid = () => {
    const _errors = {};
    if (!course.title) _errors.title = "Title is Required";
    if (!course.authorId) _errors.authorId = "Author ID is Required";
    if (!course.category) _errors.category = "Category is Required";

    setErrors(_errors);

    return Object.keys(_errors).length === 0;
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!isFormValid()) return;
    courseApi.saveCourse(course).then(() => {
      props.history.push("/courses");
    });
  };

  return (
    <>
      <h2>Manage Courses</h2>
      <CourseForm
        course={course}
        errors={errors}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default ManageCoursePage;

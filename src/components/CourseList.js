import React from "react";
import PropType from "prop-types";
import { Link } from "react-router-dom";

const CourseList = props => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author ID</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {props.courses.map(course => {
          return (
            <tr key={course.id}>
              <td>
                <Link to={"/course/" + course.slug}>{course.title}</Link>
              </td>
              <td>{course.authorId}</td>
              <td>{course.category}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  courses: PropType.arrayOf(
    PropType.shape({
      id: PropType.number.isRequired,
      title: PropType.string.isRequired,
      authorId: PropType.number.isRequired,
      category: PropType.string.isRequired
    })
  ).isRequired
};

CourseList.defaultProps = {
  courses: []
};

export default CourseList;

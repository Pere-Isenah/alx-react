import PropTypes from "prop-types";

const tableCheck = (isHeader, textFirstCell, textSecondCell) => {
  if (isHeader) {
    if (textSecondCell === "null") {
      return (
        <th colSpan="2">
          {textFirstCell}
        </th>
      );
    } else {
      return (
        <>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </>
      );
    }
  } else {
    return (
      <>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </>
    );
  }
};

const CourseListRow = (props) => {
  return (
    <tr>
      {tableCheck(props.isHeader, props.textFirstCell, props.textSecondCell)}
    </tr>
  );
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string,
};

CourseListRow.defaultProps = {
  isHeader: true,
  textSecondCell: "null",
};

export default CourseListRow;

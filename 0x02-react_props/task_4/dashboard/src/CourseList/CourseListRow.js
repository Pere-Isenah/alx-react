import PropTypes from "./Props-type"

const tablecheck=(isHeader,textFirstCell,textSecondCell) =>{
  if(isHeader) {
    if(textSecondCell ==="null"){
      return(
        <th colSpan=2>
        {textFirstCell}
        </th>
        )
    } else {
      return(
        <th>{textFirstCell}</th>
        <th>{textSecondCell}</th>
        )
  } else {
    return(
      <td>{textFirstCell}</td>
      <td>{textSecondCell}</td>)
  }
}

export const CourseListRow =(props) => {
  
  return(
    <tr>
    <th>
      {tablecheck(props.isHeader,props.textFirstCell,props.textSecondCell)}
      </th>
    </tr>
    )
}
CourseListRow.PropTypes = {
  isHeader: PropTypes.bool,
textFirstCell: PropTypes.string.isRequired,
textSecondCell: PropTypes.string,
}

CourseListRow.defaultProps ={
  isHeader: true,
  textFirstCell: 
  textSecondCell: "null"
}
import PropTypes from "prop-types";

export function CourseShape(){

}

CourseShape.propTpes ={
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    credit: PropTypes.number.isRequired,
}
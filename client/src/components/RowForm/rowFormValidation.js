// RowFormValidation contains the logic to validate the row form

const hasNumber = (myString) => {
    return /\d/.test(myString);
};	

const validate = (values) => {
  const errors = {};
  const specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;


  if(values.student === undefined || !values.student) {
    errors.student = 'Student is required';
  } else if(hasNumber(values.student)) {
    errors.student = "Student cannot contain numbers";
  } else if(isNaN(values.student) && values.student.length < 2) {
    errors.student = "Student must be more than 1 character";
  } else if(specialCharacters.test(values.student)) {
    errors.student = "Invalid character(s) used";
  }

  if(values.counselor === undefined || !values.counselor) {
    errors.counselor = 'Counselor is required';
  } else if(hasNumber(values.counselor)) {
    errors.counselor = 'Counselor cannot contain numbers';
  } else if(values.counselor !== undefined && isNaN(values.counselor) && values.counselor.length < 2) {
    errors.counselor = "Counselor must be more than 1 character";
  } else if(specialCharacters.test(values.counselor)) {
    errors.counselor = "Invalid character(s) used";
  }

  if(values.hours === undefined || !values.hours) {
    errors.hours = 'Hours are required';
  } else if(isNaN(values.hours)) {
    errors.hours = 'Hours are a number';
  } else if(!isNaN(values.hours) && values.hours > 500) {
    errors.hours = 'Hours must be 500 or less';
  } else if(!isNaN(values.hours) && values.hours < 0) {
    errors.hours = 'Hours must be 0 or more';
  }

  if(values.date === undefined || !values.date) {
    errors.date = 'You must provide a date';
  } else if(values.date > new Date()) {
    errors.date = 'Invalid date';
  }

  return errors;
}

module.exports = {
	hasNumber,
	validate
}
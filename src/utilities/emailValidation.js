import validator from "validator";

export default function emailValidation(email) {
  return validator.isEmail(email) ? true : false
}
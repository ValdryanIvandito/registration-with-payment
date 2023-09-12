import validator from "validator";

export default function emailValidation(phoneNumber) {
  return validator.isMobilePhone(phoneNumber, 'id-ID', { strictMode: false }) ? true : false
}
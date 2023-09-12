export default function InputPhoneNumber(props) {
  function phoneNumberHandler(event) {
    const enteredPhoneNumber = event.target.value;
    props.getPhoneNumber(enteredPhoneNumber);
  }

  return (
    <>
      <input
        type="tel"
        id="phonenumber"
        name="phonenumber"
        placeholder=" Phone / WA Number"
        className="border border-slate-500 pl-2 mb-4 w-72 h-10 outline-blue-500 sm:w-full"
        required
        onChange={phoneNumberHandler}
      />
      <br />
    </>
  );
}

export default function InputLastName(props) {
  function lastNameHandler(event) {
    const enteredLastName = event.target.value;
    props.getLastName(enteredLastName);
  }

  return (
    <>
      <input
        type="text"
        id="lastname"
        name="lastname"
        placeholder=" Last Name"
        className="border border-slate-500 pl-2 mb-4 w-72 h-10 outline-blue-500 sm:w-full sm:mb-5"
        onChange={lastNameHandler}
      />
      <br />
    </>
  );
}

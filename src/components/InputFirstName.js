export default function InputFirstName(props) {
  function firstNameHandler(event) {
    const enteredFirstName = event.target.value;
    props.getFirstName(enteredFirstName);
  }

  return (
    <>
      <input
        type="text"
        id="firstname"
        name="firstname"
        placeholder=" First Name"
        className="border border-slate-500 pl-2 mb-4 w-72 h-10 outline-blue-500 sm:w-full sm:mb-5"
        required
        onChange={firstNameHandler}
      />
      <br />
    </>
  );
}

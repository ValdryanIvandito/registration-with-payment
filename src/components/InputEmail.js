export default function InputEmail(props) {
  function emailHandler(event) {
    const enteredEmail = event.target.value;
    props.getEmail(enteredEmail)
  }

  return (
    <>
      <input
        type="email"
        id="email"
        name="email"
        placeholder=" Email"
        className="border border-slate-500 pl-2 mb-4 w-72 h-10 outline-blue-500 sm:w-full sm:mb-5"
        required
        onChange={emailHandler}
      />
      <br />
    </>
  );
}

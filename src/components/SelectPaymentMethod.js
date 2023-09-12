export default function SelectPaymentMethod(props) {
  function paymentMethodHandler(event) {
    const enteredPaymentMethod = event.target.value;
    props.getPaymentMethod(enteredPaymentMethod);
  }

  return (
    <>
      <p className="mb-2 sm:mb-3">Select Payment Method :</p>
      <select
        id="paymentmethod"
        name="paymentmethod"
        className="border border-slate-500 pl-2 mb-4 w-72 h-10 outline-blue-500 sm:w-full"
        required
        onChange={paymentMethodHandler}
      >
        <option value="GOPAY QRIS">GoPaY QRIS (Fee: Rp210)</option>
        <option value="BCA Virtual Account">BCA VA (Fee: Rp4440)</option>
        <option value="BRI Virtual Account">BRI VA (Fee: Rp4440)</option>
        <option value="BNI Virtual Account">BNI VA (Fee: Rp4440)</option>
        <option value="Mandiri Virtual Account">Mandiri VA (Fee: Rp4440)</option>
      </select>
      <br />
    </>
  );
}

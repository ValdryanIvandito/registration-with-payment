import { useRef } from "react";
import Form from "../components/Form";
import generateOrderDate from "../utilities/generateOrderDate";
import generateOrderId from "../utilities/generateOrderId";

export default function Home() {
  const inputFirstName = useRef();
  const inputLastName = useRef();
  const inputEmail = useRef();
  const inputPhoneNumber = useRef();
  const inputPaymentMethod = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredOrderDate = generateOrderDate();
    const enteredOrderId = generateOrderId(enteredOrderDate);
    const enteredFirstName = inputFirstName.current.value;
    const enteredLastName = inputLastName.current.value;
    const enteredEmail = inputEmail.current.value;
    const enteredPhoneNumber = inputPhoneNumber.current.value;
    const enteredPaymentMethod = inputPaymentMethod.current.value;

    const payload = {
      orderDate: enteredOrderDate,
      orderId: enteredOrderId,
      firstName: enteredFirstName,
      lastName: enteredLastName,
      email: enteredEmail,
      phoneNumber: enteredPhoneNumber,
      paymentMethod: enteredPaymentMethod,
    };

    console.log(payload);
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        className="p-8 sm:p-14 sm:border sm:border-slate-200 sm:shadow-2xl"
        onSubmit={submitHandler}
      >
        <h1 className="text-center text-4xl font-bold mb-8 sm:text-5xl sm:mb-10">
          Registration
        </h1>
        <input
          type="text"
          id="firstname"
          name="firstname"
          placeholder=" Nama Depan"
          className="border border-slate-500 pl-2 mb-4 w-80 h-10 outline-blue-500 sm:mb-6 sm:w-96 sm:h-12 sm:text-lg"
          required
          ref={inputFirstName}
        />
        <br />
        <input
          type="text"
          id="lastname"
          name="lastname"
          placeholder=" Nama Belakang"
          className="border border-slate-500 pl-2 mb-4 w-80 h-10 outline-blue-500 sm:mb-6 sm:w-96 sm:h-12 sm:text-lg"
          ref={inputLastName}
        />
        <br />
        <input
          type="email"
          id="email"
          name="email"
          placeholder=" Email"
          className="border border-slate-500 pl-2 mb-4 w-80 h-10 outline-blue-500 sm:mb-6 sm:w-96 sm:h-12 sm:text-lg"
          required
          ref={inputEmail}
        />
        <br />
        <input
          type="number"
          id="phonenumber"
          name="phonenumber"
          placeholder=" Nomor WA"
          className="border border-slate-500 pl-2 mb-4 w-80 h-10 outline-blue-500 sm:mb-6 sm:w-96 sm:h-12 sm:text-lg"
          required
          ref={inputPhoneNumber}
        />
        <br />
        <p className="mb-2 sm:mb-3 sm:text-lg">Metode Pembayaran :</p>
        <select
          id="paymentmethod"
          name="paymentmethod"
          className="border border-slate-500 pl-2 mb-4 w-80 h-10 outline-blue-500 sm:mb-6 sm:w-96 sm:h-12 sm:text-lg"
          required
          ref={inputPaymentMethod}
        >
          <option value="Bank Virtual Account">Bank Virtual Account</option>
          <option value="QRIS">QRIS</option>
          <option value="GoPay">GoPay</option>
          <option value="OVO">OVO</option>
        </select>
        <br />
        <button
          type="submit"
          className="bg-blue-500 p-2 text-white font-bold rounded-xl w-80 hover:bg-blue-600 sm:w-96 sm:h-12"
        >
          Daftar
        </button>
      </form>
    </div>
  );
}

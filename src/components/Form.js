import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";

import FormTitle from "./FormTitle";
import Alert from "./Alert";
import InputFirstName from "./InputFirstName";
import InputLastName from "./InputLastName";
import InputEmail from "./InputEmail";
import InputPhoneNumber from "./InputPhoneNumber";
import SelectPaymentMethod from "./SelectPaymentMethod";
import SubmitButton from "./SubmitButton";

import generateOrderDate from "../utilities/generateOrderDate";
import generateOrderId from "../utilities/generateOrderId";
import emailValidation from "../utilities/emailValidation";
import phoneNumberValidation from "../utilities/phoneNumberValidation";

export default function Form() {
  const [orderId, setOrderId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("GOPAY QRIS");
  const [paymentStatus, setPaymentStatus] = useState(false);
  const [errorValidation, setErrorValidation] = useState("");
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function submitHandler(event) {
    event.preventDefault();

    if (!emailValidation(email)) {
      setErrorValidation("Invalid Email Format!");
      return;
    }

    if (!phoneNumberValidation(phoneNumber)) {
      setErrorValidation("Invalid Phone Number Format!");
      return;
    }

    setErrorValidation("");
    setIsLoading(true);

    const orderDate = generateOrderDate();
    const orderId = generateOrderId(orderDate);
    setOrderId(orderId);

    const body = {
      orderDate,
      orderId,
      firstName,
      lastName,
      email,
      phoneNumber,
      paymentMethod,
    };

    try {
      const response = await axios.post("/api/payment", body);

      if (response.data.token) {
        // console.log("Payment Token:", response.data.token);
        setToken(response.data.token);
      } else {
        console.error(
          "Invalid response from server / can't get payment token:",
          response
        );
        router.push("/error");
      }
    } catch (error) {
      console.error("Error during payment:", error);
      router.push("/error");
    }
  }

  useEffect(() => {
    const sendEmailAsync = async () => {
      try {
        const response = await axios.post("/api/email", {
          orderId,
          email,
        });
        console.log(response);
        if (response.status === 200) {
          router.push("/thankyou");
          setPaymentStatus(false);
        } else {
          console.error("Email could not be sent.");
        }
      } catch (error) {
        console.error("Error sending email:", error);
      }
    };

    if (paymentStatus === true) {
      sendEmailAsync();
    }
  }, [paymentStatus]);

  useEffect(() => {
    if (token) {
      window.snap.pay(token, {
        onSuccess: (result) => {
          console.log(result);
          console.log("Payment successful");
          setPaymentStatus(true);
          setToken("");
          setIsLoading(false);
        },
        onPending: (result) => {
          console.log(result);
          console.log("Pembayaran pending");
          setToken("");
        },
        onError: (error) => {
          console.log(error);
          console.log("Payment failed");
          setToken("");
        },
        onClose: () => {
          console.log("Payment Completed");
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhoneNumber("");
          setPaymentMethod("");
          setToken("");
        },
      });
      console.log(paymentStatus);
    }
  }, [token]);

  useEffect(() => {
    const midtransUrl = process.env.NEXT_PUBLIC_SANDBOX_MIDTRANS_URL;

    let scriptTag = document.createElement("script");
    scriptTag.src = midtransUrl;

    const midtransClientKey = process.env.NEXT_PUBLIC_SANDBOX_CLIENT_KEY;

    scriptTag.setAttribute("data-client-key", midtransClientKey);

    document.body.appendChild(scriptTag);

    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <>
          <div className="flex items-center justify-center h-screen">
            <div>
              <div className="animate-spin mb-4">
                <img
                  src="/loadingCircle.jpg"
                  alt="loading circle"
                  width="75px"
                  heigh="50px"
                />
              </div>
              <text className="text-center font-bold">Loading...</text>
            </div>
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <form
            className="p-8 sm:p-10 sm:border sm:border-slate-200 sm:shadow-2xl sm:rounded-lg"
            onSubmit={submitHandler}
          >
            <FormTitle />
            <Alert error={errorValidation} />
            <InputFirstName
              getFirstName={(e) => {
                setFirstName(e);
              }}
            />
            <InputLastName
              getLastName={(e) => {
                setLastName(e);
              }}
            />
            <InputEmail
              getEmail={(e) => {
                setEmail(e);
              }}
            />
            <InputPhoneNumber
              getPhoneNumber={(e) => {
                setPhoneNumber(e);
              }}
            />
            <SelectPaymentMethod
              getPaymentMethod={(e) => {
                setPaymentMethod(e);
              }}
            />
            <SubmitButton />
          </form>
        </div>
      )}
    </>
  );
}

import midtransClient from "midtrans-client";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const snap = new midtransClient.Snap({
        isProduction: false, // Sandbox
        // isProduction: true, // Production
        serverKey: process.env.SANDBOX_SERVER_KEY,
        clientKey: process.env.SANDBOX_CLIENT_KEY,
      });

      let gross_amount = `${process.env.GOPAY_AMOUNT}`;
      let enabled_payments = ["gopay"];

      if (req.body.paymentMethod === "GoPay QRIS") {
        gross_amount = `${process.env.GOPAY_AMOUNT}`;
        enabled_payments = ["gopay"];
      } else if (req.body.paymentMethod === "BCA Virtual Account") {
        gross_amount = `${process.env.VA_AMOUNT}`;
        enabled_payments = ["bca_va"];
      } else if (req.body.paymentMethod === "BRI Virtual Account") {
        gross_amount = `${process.env.VA_AMOUNT}`;
        enabled_payments = ["bri_va"];
      } else if (req.body.paymentMethod === "BNI Virtual Account") {
        gross_amount = `${process.env.VA_AMOUNT}`;
        enabled_payments = ["bni_va"];
      } else if (req.body.paymentMethod === "Mandiri Virtual Account") {
        gross_amount = `${process.env.VA_AMOUNT}`;
        enabled_payments = ["echannel"];
      }

      const parameter = {
        transaction_details: {
          order_id: req.body.orderId,
          gross_amount: gross_amount,
        },
        customer_details: {
          first_name: req.body.firstName,
          last_name: req.body.lastName,
          email: req.body.email,
          phone: req.body.phoneNumber,
        },
        enabled_payments: enabled_payments,
      };

      snap.createTransaction(parameter).then((transaction) => {
        const dataPayment = {
          response: JSON.stringify(transaction),
        };

        const token = transaction.token;
        res.status(200).json({
          message: "succeed!",
          dataPayment: dataPayment,
          token: token,
        });
      });
    } catch (error) {
      console.error("Payment process failed!:", error);
      res.status(500).json({ message: "Payment process failed!" });
    }
  } else {
    res.status(405).end(); // Method not allowed
  }
}

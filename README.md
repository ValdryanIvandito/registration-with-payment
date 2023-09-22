# Registration With Payment Gateway

I created this simple web application to demonstrate my abilities and knowledge after learning to become a Fullstack Developer for 8 months. This application is a registration form which is equipped with a payment feature via the Midtrans payment gateway (https://midtrans.com/) and email notification as confirmation if the payment is successful.

# The main Techstack that I used to build this application is as follows:

- Next.js
- TailwindCSS
- The main modules that I use are as follows:
  - Midtrans clients
  - Nodemailer
  - Validator.js

# The features of this web application are as follows:

- Responsive Design, the UI will automatically adapt to mobile, tablet and desktop screens.
- Validate the input format of email and phone number.
- Payment feature via GoPay QRIS, BCA, BRI, BNI and Mandiri Bank Virtual Accounts.
- Email notification after successful payment.

# How to use this web application:

1. Go to https://registration-with-payment-gateway.vercel.app/
2. Enter First Name, Last Name, Email and Phone Number on the form.
3. Select the payment method (for simulation it is recommended to choose BCA VA).
4. If you are sure, click Submit then wait until the payment page appears. On the payment page there is a virtual account number, copy that number.
5. Go to https://simulator.sandbox.midtrans.com/bca/va/index then paste the virtual account number then click Inquire and click pay. This website is used to simulate BCA virtual bank account payments. Apart from using the VA BCA payment simulator, you can make payments in the following simulators:

- GoPay QRIS Simulator: https://simulator.sandbox.midtrans.com/gopay/ui/index
- BRI VA Simulator: https://simulator.sandbox.midtrans.com/openapi/va/index?bank=bri
- BNI VA Simulator: https://simulator.sandbox.midtrans.com/bni/va/index

6. Return to the payment page, wait a few moments until a successful payment notification appears, then the page will redirect to another page with the message "Thank you for submitting your registration confirmation has been sent to your email".
7. The final step, check your email as entered in the registration form. You will receive an email from a sender named noreplyr35@gmail.com with the message "Your payment with order-Id XYZ-XXXXXXXXXXXX has been successful!".

For more details, how this application works and is used will be shown in the video that I posted on my linkedin: https://www.linkedin.com/feed/update/urn:li:activity:7110686654562004992/

# Technical Documentation References :

- https://docs.midtrans.com/reference/quick-start-1
- https://www.npmjs.com/package/midtrans-client
- https://nodemailer.com/
- https://www.npmjs.com/package/midtrans-client
- https://www.npmjs.com/package/validatorjs
- https://tailwindcomponents.com/cheatsheet/

# Tutorial References :

- https://www.udemy.com/course/nextjs-react-the-complete-guide/
- https://www.youtube.com/watch?v=sXDwatqav6g&list=PLtHSjG_6PalpVZyjVuoA5fVzRXOr6tVcn
- https://youtu.be/z3slaXqmkT0?list=PLFIM0718LjIUHFRMzPJ0wGjx9_NlC5d1h
- https://youtu.be/VaNctBj6pLI?list=PLkd_KdFE7Ws6y-qAj_MlZh9jwVzG7P_0P
- https://youtu.be/0OYTeObVClU
- https://youtu.be/L46FwfVTRE0?list=PLkd_KdFE7Ws6y-qAj_MlZh9jwVzG7P_0P

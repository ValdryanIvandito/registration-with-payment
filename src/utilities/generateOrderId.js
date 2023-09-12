export default function generateOrderId(orderDate) {
  const [datePart, timePart] = orderDate.split(" ");
  const [year, month, day] = datePart.split("-").map(String);
  const [hour, minute, second] = timePart.split(":").map(String);
  const editYear = year.slice(2);
  const editMonth = month.length === 1 ? `0${month}` : month;
  const editDay = day.length === 1 ? `0${day}` : day;
  const orderDateCode = `${editYear}${editMonth}${editDay}${hour}${minute}${second}`;

  const productCode = "XYZ";
  const numberCode = "0123456789";
  let randomNumberCode = "";

  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * numberCode.length);
    randomNumberCode += numberCode.charAt(randomIndex);
  }

  const orderId = `${productCode}-${randomNumberCode}-${orderDateCode}`;
  return orderId;
}

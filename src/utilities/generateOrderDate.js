export default function generateOrderDate() {
  const date = new Date();
  const YYYY = date.getFullYear();
  const MM = String(date.getMonth() + 1).padStart(2, '0'); 
  const DD = String(date.getDate()).padStart(2, '0'); 
  const hh = String(date.getHours()).padStart(2, '0'); 
  const mm = String(date.getMinutes()).padStart(2, '0'); 
  const ss = String(date.getSeconds()).padStart(2, '0'); 

  return `${YYYY}-${MM}-${DD} ${hh}:${mm}:${ss}`;
}

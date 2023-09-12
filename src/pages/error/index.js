import Image from "next/image";

export default function Thankyou() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-xl font-bold font-mono mb-2 sm:text-2xl sm:mb-3 md:text-3xl md:mb-4">500 <span className="text-red-700">Server Error!</span></h1>
        <p className="text-sm font-semibold font-sans mb-2 sm:text-md sm:mb-3 md:text-lg md:mb-4">Oops, omething went wrong!</p>
      </div>
    </div>
  );
}

export default function Alert(props) {
  return (
    <div className="h-8 mb-2 sm:text-lg text-red-600 text-bold">
      {props.error}
    </div>
  )
}
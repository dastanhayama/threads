/* eslint-disable */
function Button({color, text}) {
  return (
    <button className={color === 'black' ? `py-1 px-4 bg-black text-white rounded-md` : `py-1 px-4 bg-white text-black rounded-md`}>{text}</button>
  )
}

export default Button
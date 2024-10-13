import { useState } from "react"

const Input = () => {
  const [state, setState] = useState('test')
  return <input type="text" placeholder={state} />
}

export default Input
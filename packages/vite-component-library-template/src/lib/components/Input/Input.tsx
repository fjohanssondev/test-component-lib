import React, { useEffect } from "react"

const Input = () => {
  console.log("Mounted")
  const [state, setState] = React.useState('test')

  useEffect(() => {
    console.log("State changed")
  }, [state])
  return (
    <>
    <button onClick={() => setState("Something else")}>Change</button>
    <input key={state} type="text" placeholder={state} />
    </>
  )
}

export default Input  
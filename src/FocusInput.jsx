import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef();

  function handleClick() {
    inputRef.current.focus(); // input element ko focus karega
  }

  return (
    <>
      <input ref={inputRef}/>
      <button onClick={handleClick} style={{ backgroundColor: "blue", color: "white", padding: "10px", margin:"10px" }}>Focus</button>
    </>
  );
}

export default FocusInput
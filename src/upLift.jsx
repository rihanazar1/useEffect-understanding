import React, { useState } from 'react'

const upLift = () => {
  return (
    <div>upLift</div>
  )
}

export default upLift

// Parent Component
export function Parent() {
  const [text, setText] = useState("");

  return (
    <>
      <InputComponent text={text} setText={setText} />
      <DisplayComponent text={text} />
    </>
  );
}

// Child 1 - input field
function InputComponent({ text, setText }) {
  return <input value={text} onChange={(e) => setText(e.target.value)} />;
}

// Child 2 - display
function DisplayComponent({ text }) {
  return <h2>{text}</h2>;
}


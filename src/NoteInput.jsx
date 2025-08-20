import React, { useState } from 'react'

const NoteInput = () => {

    const[note,setNote]=useState("")
  return (
    <div>
      <p>
        Note:  {note}
        <input type='text' placeholder='Type' value={note} onChange={(e)=>setNote(e.target.value)} ></input>
      </p>
    </div>
  )
}

export default NoteInput

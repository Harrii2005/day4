import { TextField } from '@mui/material'
import React from 'react'

const Submission = () => {
  return (
    <div>
        <h2>Add Studentt</h2>
      <TextField id="Name" label="Name" variant="outlined" /> <br></br>
      <TextField id="Place" label="Place" variant="outlined" /><br></br>
      <TextField id="Email" label="Email_id" variant="outlined" /><br></br>
      <TextField id="Phn_no" label="Phn_No" variant="outlined" />
      <br></br>
      <br></br>
      <button>Submit</button>
    </div>
  )
}

export default Submission

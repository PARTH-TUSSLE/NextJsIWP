import React from 'react'
import axios from 'axios';

async function page() {

  const response = await axios.get("http://localhost:3000/api/v1/profile");

  const data = response.data;

  return (
    <div >
      <h1>{JSON.stringify(data)}</h1>
    </div>
  )
}

export default page

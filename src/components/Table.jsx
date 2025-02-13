import React, { useEffect, useState } from 'react'
const URL="https://reqres.in/api/users"




const Table = () => {
const [tabledata,setTableData]=useState([])


useEffect(() => {
  fetch(URL)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      const sortedData = data.data.sort((a, b) => a.first_name.localeCompare(b.first_name));
      setTableData(sortedData);
    })
    .catch((err) => console.error("Fetch error:", err));
}, []);
 


  return (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
    {
      tabledata.map((data,i)=>(
        <tr key={i}>
          <td>{`${data.first_name}`}</td>
          <td>{data.email}</td>
        </tr>
      ))
    }
      <tr>
        <td>Sarthak</td>
        <td>any@any.com</td>
      </tr>
    </tbody>
  </table>
  )
}

export default Table
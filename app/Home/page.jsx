'use client'
import React,{useEffect, useState} from 'react'


export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      const response = await fetch('/api/controller/auth', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        setLoading(true)
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setData(result.students);
      setLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(true)
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {!loading ?<>
      {data.map((student, index) => (
        <div key={index}>
          <div>Name : {student.name}</div>
          <div>Age : {student.age}</div>
          <div>Email : {student.email}</div>
          <br />
        </div>
      ))}
      </>: "Loading ..."}
    </div>
  )
}

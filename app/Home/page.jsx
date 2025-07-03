'use client'
import React, { useEffect, useState } from 'react'
import styles from "./page.module.css";

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
  const deleteData = async (id) => {
    try {
      const response = await fetch(`/api/controller/auth?id=${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      fetchData();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.page}>
      <center><h2>All Data of Records</h2></center>
      <br />
      {!loading ? <>
        {data.map((student, index) => (
          <div key={index} className={styles.student}>
            <div className={styles.details}>
              <div>Name : {student.name}</div>
              <div>Age : {student.age}</div>
              <div>Email : {student.email}</div>
            </div>
            <div className={styles.buttons}>
              <button onClick={()=>deleteData(student._id)}>Delete</button>
            </div>
          </div>
        ))}
      </> :
      <div className={styles.loading}>
        <h2>Loading...</h2>
        <p>Please wait while we fetch the data.</p>
      </div>}
    </div>
  )
}

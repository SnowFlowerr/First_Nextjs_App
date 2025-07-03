'use client'
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import React, { useState } from "react";
import { set } from "mongoose";

export default function Home() {
  const router = useRouter();
  const [data, setData] = useState({name: "", age: "", email: ""});

  function handleChange(event) {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  async function handleSubmit(event) {
    event.preventDefault();
    // Here you can handle the form submission, e.g., send data to an API
    await fetch("/api/controller/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    setData({name: "", age: "", email: ""});
  }
  return (
    <div className={styles.page}>
      <div className={styles.form}>
        
      <h2 className={styles.heading}>First Next.js App</h2>
      <br/>
        <input type="text" placeholder="name" value={data.name} name="name" onChange={handleChange} className={styles.inp}/>
        <br/>
        <input type="text" placeholder="age" value={data.age} name="age" onChange={handleChange} className={styles.inp}/>
        <br/>
        <input type="text" placeholder="email" value={data.email} name="email" onChange={handleChange} className={styles.inp}/>
      <br/>
      <button
        onClick={handleSubmit}
        className={styles.button}
      >save the data</button>
      <br/>
      <button
      className={styles.button}
        onClick={() => {
          router.push("./Home");
        }}
      >go to all data</button>
      </div>
    </div>
  );
}

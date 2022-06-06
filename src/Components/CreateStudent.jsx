import React, { useState } from "react";
import Axios from "../libraries/Axios";
import { useNavigate } from "react-router-dom";

const CreateStudent = () => {
  let [name, setName] = useState("");
  let [std_id, setStd_id] = useState("");
  let [email, setEmail] = useState("");
  let [courses, setCourses] = useState([]);
  let [loading, setLoading] = useState(false);
  let navi = useNavigate();
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      let payload = { name, std_id, email, courses };
      await Axios.post("/api/students/", payload);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
    navi("/");
  };
  return (
    <section id="formSection">
      <article>
        <form onSubmit={handleSubmit} id="form1">
          <h2>CreateStudent</h2>
          <div className="formgrp">
            <input
              type="text"
              placeholder="enter student name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="formgrp">
            <input
              type="text"
              placeholder="enter student id"
              onChange={(e) => setStd_id(e.target.value)}
            />
          </div>
          <div className="formgrp">
            <input
              type="email"
              placeholder="enter student email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="formgrp">
            <select
              name="courses"
              id="courses"
              multiple
              onChange={(e) => setCourses(e.target.value)}
            >
              <option value="mern stack">mern stack</option>
              <option value="mean stack">mean stack</option>
              <option value="java stack">java stack</option>
              <option value="python stack">python stack</option>
              <option value="php stack">php stack</option>
            </select>
          </div>
          <div className="formgrp">
            <button>submit</button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default CreateStudent;

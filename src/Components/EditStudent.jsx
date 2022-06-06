import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Axios from "../libraries/Axios";

const EditStudent = () => {
  let [name, setName] = useState("");
  let [std_id, setStd_id] = useState("");
  let [email, setEmail] = useState("");
  let [courses, setCourses] = useState([]);
  let [loading, setLoading] = useState(false);
  let { id } = useParams();
  let navi = useNavigate();
  useEffect(() => {
    let newData = async () => {
      let str = await Axios.get(`/api/students/${id}`);
      let { name, std_id, courses, email } = str.data.payload;
      setName(name);
      console.log(str.data.name);
      setStd_id(std_id);
      setEmail(email);
      setCourses(courses);
      setLoading(true);
    };
    newData();
  }, [id]);
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let payload = { name, std_id, email, courses };
      await Axios.put(`/api/students/${id}`, payload);
      navi("/");
    } catch (error) {
      console.log(error);
    }
    setName("");
    setEmail("");
    setStd_id("");
    setCourses("");
    setLoading(false);
  };
  return (
    <section id="formSection">
      <article>
        <form onSubmit={handleSubmit}>
          <h2>edit student</h2>
          <div className="formgrp">
            <input
              type="text"
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="formgrp">
            <input
              type="text"
              placeholder="std_id"
              onChange={(e) => setStd_id(e.target.value)}
              value={std_id}
            />
          </div>
          <div className="formgrp">
            <input
              type="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
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

export default EditStudent;

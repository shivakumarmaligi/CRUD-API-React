import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "../libraries/Axios";
import Spinner from "./Spinner/Spinner";
import { FaUserEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
const Home = () => {
  let [student, setStudent] = useState([]);
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    let fetchdata = async () => {
      try {
        setLoading(true);
        let str = await Axios.get("/api/students");
        // console.log(str.data.payload);
        let { data } = str;
        let { payload } = data;
        console.log(payload);
        setStudent(payload);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchdata();
  }, []);

  return (
    <section id="homeSection">
      <article>
        <table id="form">
          <thead>
            <th>Name</th>
            <th>Email</th>
            <th>courses</th>
            <th>std_id</th>
            <th>edit</th>
            <th>delete</th>
          </thead>
          <tbody>
            {loading ? (
              <Spinner />
            ) : (
              student.map((value, i) => {
                return (
                  <tr key={i}>
                    <td>{value.name}</td>
                    <td>{value.email}</td>
                    <td>{value.courses}</td>
                    <td>{value.std_id}</td>
                    <td>
                      <Link
                        to={`/editstudent/${value._id}`}
                        style={{ color: "tomato" }}
                      >
                        <FaUserEdit />
                      </Link>
                    </td>
                    <td>
                      <Link
                        to={`/deletestudent/${value._id}`}
                        style={{ color: "tomato" }}
                      >
                        <AiFillDelete />
                      </Link>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </article>
    </section>
  );
};

export default Home;

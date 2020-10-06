import React, { useState, useEffect } from "react";
import { FaPen, FaTrash } from "react-icons/fa";
import api from "../../api/Api"
import { Link } from "react-router-dom"

const NaversList = () => {

  const [navers, setNavers] = useState([])
  const [id, setId] = useState("")
  const [load, setLoad] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    let isMounted = true;
    api.get("navers")
      .then(res => {
        if (isMounted) {
          setNavers(res.data);
          setId([...id, ...res.data]);
          setLoad(true);

        }
      })
      .catch(err => {
        setError(err.message);
        setLoad(true);
        console.log(err)
      })

    return () => {
      isMounted = false;
    }
  }, [id]);

  return (
    <>
      { load ? (<ul>
        {error ? <li>{error.message}</li> : navers.map(navers => {
          return (
            <div key={navers.id}>
              <img src={navers.url} alt="Naver Image Profile" width="281" height="281" />
              <p>{navers.name}</p> <p>{navers.job_role}</p>
              <Link to={`/${navers.id}`} type="submit"><FaTrash size={18} /></Link>
              <Link to={`/update/${navers.id}`}><FaPen size={18} /></Link>
            </div>
          )
        })}
      </ul>) : (
          <div>Loading...</div>
        )}
    </>
  )
};

export default NaversList;


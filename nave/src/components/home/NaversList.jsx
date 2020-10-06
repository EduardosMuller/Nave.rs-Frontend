import React, { useState, useEffect } from "react";
import { FaPen, FaTrash } from "react-icons/fa";
import api from "../../api/Api"
import { Link } from "react-router-dom"

export default () => {

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
      })

    return () => {
      isMounted = false;
    }
  }, [id]);

}
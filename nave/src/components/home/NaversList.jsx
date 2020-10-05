import React from "react"
import { Link } from "react-router-dom"

export default (props) => {
  props.naversList.map((naver, i) => {
    return (
      <div className="col-sm-3 m-4 c4" key={i}>
        <div className="d-flex justify-content-center ">
          <Link to={`/navers/${naver._id}`}>
            <img src={naver.imgPath} alt={`Naver${i}`} />
          </Link>
        </div>
        <h5>{naver.name}</h5>
        <h5>{naver.title}</h5>
      </div>

    )
  })
}
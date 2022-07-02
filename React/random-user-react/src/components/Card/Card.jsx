import React from "react";
import useHttp from "../use-http/useHttp";
import styles from "./Card.module.css";
import { FaCalendarDay, FaPhoneAlt, FaCity } from "react-icons/fa";
const Card = () => {
  const { data, setChange } = useHttp();
  const {
    name: { title, first, last },
    email,
    dob: { age },
    phone,
    picture: { medium },
    location: { city },
  } = data;
  return (
    <div className={`${styles.card} card w-25 mx-auto p-3`}>
      <div className={styles.title}>
        <img
          src={medium}
          className={`card-img-top rounded-circle ${styles.img}`}
          alt="avatar"
        />
        <div className="card-body">
          <h5 className="card-title">{`${title} ${first} ${last}`}</h5>
          <p className="card-text">{email}</p>
        </div>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <FaCalendarDay /> {age}
        </li>
        <li className="list-group-item">
          <FaPhoneAlt /> {phone}
        </li>
        <li className="list-group-item">
          <FaCity /> {city}
        </li>
      </ul>
      <button
        className="btn btn-primary"
        onClick={() => setChange((prevChange) => !prevChange)}
      >
        Change User
      </button>
    </div>
  );
};

export default Card;

import React from "react";
import './UserCard.scss';
import { Link } from "react-router-dom";
import { USERS_ROUTE } from "../../constants/routes";

interface Props {
  picture: string;
  firstName: string,
  lastName: string,
  id: string,
  title: string,
}

const UserCard = ({
  picture, id, lastName, firstName, title,
} : Props) => (
  <Link to={`${USERS_ROUTE}/${id}`}>
    <div className="card">
      <img className="card__img" alt="cats" src={picture} />
      <span className="card__name">{`${title} ${firstName} ${lastName}`}</span>
    </div>
  </Link>
);

export default UserCard;

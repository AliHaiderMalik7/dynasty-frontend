import React from "react";
import { Card, Typography, Row, Col } from "antd";

const { Meta } = Card;
const { Title } = Typography;
import UserDetails from "../modal/Modal";
import "./card.styles.less";
const UserCard = ({ data }) => {
  const { picture, name, login, email } = data;
  const { first, last } = name;
  const { username, password } = login;

  const { location, phone, cell } = data;
  const { city, street, state, postcode } = location;

  const new_data = {
    name,
    phone,
    cell,
    city,
    street,
    state,
    postcode,
  };
  return (
    <Row className="card">
      <Col>
        <Card
          className="card-picture"
          cover={<img alt="example" src={picture?.large} />}
        >
          <Title level={5}>{first}</Title>
          <Title level={5}>{last}</Title>
          <Title level={5}>{username}</Title>
          <Title level={5}>{email}</Title>
          <UserDetails data={new_data} />
        </Card>
      </Col>
    </Row>
  );
};

export default UserCard;

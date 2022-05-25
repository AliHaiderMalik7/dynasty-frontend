import React, { useState, useEffect, useRef } from "react";
import { Row, Col, Typography } from "antd";
const { Title } = Typography;
import UserCard from "../usercard/UserCard";
import "./users.styles.less";
import PageLoader from "../../common/loader/PageLoader";
const UsersComponent = (props) => {
  const { setNode, users, fetchMore, searchData } = props.data;

  if (users.length == 0 && searchData.length > 0) {
    return (
      <>
        <Title level={1} className="heading">
          No record found
        </Title>
      </>
    );
  }
  if (fetchMore) {
    return (
      <>
        <Title level={1} className="heading">
          List of users{" "}
        </Title>

        <Row className="rows">
          {users.map((item, index) => (
            <Col lg={{ span: 6 }} xs={{ span: 24 }} key={index}>
              <UserCard data={users[index]} />
            </Col>
          ))}
        </Row>

        <PageLoader data={setNode} />
      </>
    );
  } else {
    return (
      <>
        <Row className="rows">
          {users.map((item, index) => (
            <Col lg={{ span: 6 }} xs={{ span: 24 }} key={index}>
              <UserCard data={users[index]} key={index} />
            </Col>
          ))}
        </Row>

        <>
          <Title level={1} className="heading">
            End of list
          </Title>
        </>
      </>
    );
  }
};

export default UsersComponent;

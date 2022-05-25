import { Col } from "antd";
import React from "react";
import "./loader.styles.less";
const PageLoader = (props) => {
  const setNode = props.data;
  return (
    <Col className="page-loader">
      <Col className="center" ref={setNode}>
        <Col className="wave"></Col>
        <Col className="wave"></Col>
        <Col className="wave"></Col>
        <Col className="wave"></Col>
        <Col className="wave"></Col>
        <Col className="wave"></Col>
        <Col className="wave"></Col>
        <Col className="wave"></Col>
        <Col className="wave"></Col>
        <Col className="wave"></Col>
      </Col>
    </Col>
  );
};

export default PageLoader;

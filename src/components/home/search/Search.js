import React from "react";
import { Input, Row, Col } from "antd";
import { useDispatch } from "react-redux";

import { searchUser } from "../../../redux/reducers/userReducer";
import "./search.styles.less";
const { Search } = Input;

const Serch = () => {
  const dispatch = useDispatch();

  const onSearch = (value) => {
    if (value) {
      dispatch(searchUser(value));
    } else {
      dispatch(searchUser());
    }
  };
  return (
    <>
      <Row className="search">
        <Col
          xl={{ span: 24, offset: 9 }}
          lg={{ span: 24, offset: 8 }}
          md={{ span: 24, offset: 6 }}
          sm={{ span: 24, offset: 6 }}
          xs={{ span: 24, offset: 2 }}
        >
          <Search
            className="search-bar"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
          />
        </Col>
      </Row>
    </>
  );
};

export default Serch;

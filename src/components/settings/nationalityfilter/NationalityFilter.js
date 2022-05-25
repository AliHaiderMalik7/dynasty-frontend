import React from "react";
import { Radio, Row, Col } from "antd";
import { useDispatch } from "react-redux";
import { emptyUser } from "../../../redux/reducers/userReducer";
import { filterUser } from "../../../redux/actions/settingActions";
import "./filter.styles.less";

const NationalityFilter = (props) => {
  let [defaultNat] = props.data;

  const dispatch = useDispatch();
  const nationalities = props.data;
  const handleClick = (value) => {
    dispatch(filterUser(value));
    dispatch(emptyUser());
  };
  return (
    <Row className="radio-btn">
      <Col
        xl={{ span: 24, offset: 10 }}
        lg={{ span: 24, offset: 10 }}
        md={{ span: 24, offset: 10 }}
        sm={{ span: 24, offset: 10 }}
        xs={{ span: 24, offset: 6 }}
      >
        <Radio.Group defaultValue={defaultNat} buttonStyle="solid">
          {nationalities.map((item, index) => (
            <Radio.Button
              value={index}
              onClick={() => handleClick(nationalities[index])}
              key={index}
            >
              {nationalities[index]}
            </Radio.Button>
          ))}
        </Radio.Group>
      </Col>
    </Row>
  );
};

export default NationalityFilter;

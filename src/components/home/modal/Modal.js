import React, { useState } from "react";
import { Modal, Button, Typography } from "antd";

const { Title } = Typography;
const UserDetails = ({ data }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        View Details
      </Button>
      <Modal
        title={data.name.title + " " + data.name.first + " " + data.name.last}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Title level={5}>Street : {data.street.name}</Title>
        <Title level={5}>City : {data.city}</Title>
        <Title level={5}>State : {data.state}</Title>
        <Title level={5}>Postcode : {data.postcode}</Title>
        <Title level={5}>Phone : {data.phone}</Title>
        <Title level={5}>Cell : {data.cell}</Title>
      </Modal>
    </>
  );
};

export default UserDetails;

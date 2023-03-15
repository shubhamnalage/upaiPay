import React, { useContext } from "react";
import { UserContext } from "../App";
import { Button, Modal } from "antd";
import DepositePopup from "../components/DepositePopup";

const Home = () => {
  const user = useContext(UserContext);
  const showModal = () => {
    user.setIsModalOpen(true);
  };
  const handleCancel = () => {
    user.setIsModalOpen(false);
  };
  return (
    <div>
      <Modal
        title="Deposite"
        open={user.isModalOpen}
        footer={null}
        onCancel={handleCancel}
      >
        <DepositePopup />
      </Modal>
      <Button type="primary" onClick={showModal}>
        Deposite
      </Button>
    </div>
  );
};

export default Home;

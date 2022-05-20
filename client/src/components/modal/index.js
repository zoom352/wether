import { useState } from "react";
import { Modal, Button } from 'antd';

const ModalOpen = (props) => {
    const {temp, name, condition} = props
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

      console.log(name)

    return (
        <>
          <Button type="primary" onClick={showModal}>
            подробнее
          </Button>
          <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <p>температура + {temp}</p>
          <p>Место {name}</p>
          <p>Облачность {condition}</p>
        </Modal>
      </>
    )
}

export default ModalOpen;

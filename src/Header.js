import { useState } from "react";
import s from "./header.module.css";
import { ShoppingCart } from "lucide-react";
import Modal from "./Modal";
export default function Header() {
  const [visible, setVisible] = useState(false);

  function onCancel() {
    setVisible(false);
  }
  function onSuccess() {}
  function modalText() {
    return <div>list of pizza</div>;
  }
  return (
    <>
      <Modal
        visible={visible}
        setVisible={setVisible}
        modalTitle="Cart"
        modalText={modalText}
        onCancel={onCancel}
        onSuccess={onSuccess}
        isCloseIcon={true}
        isFooter={true}
        onSuccessButtonLabel="Order"
        isCancelButton={true}
        infinity={true}
      />
      <div className={s.root}>
        <p className={s.header}>pizza</p>
        <div onClick={() => setVisible(true)}>
          <ShoppingCart className={s.cart} />
        </div>
      </div>
    </>
  );
}

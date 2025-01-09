import { useState } from "react";
import s from "./header.module.css";
import { ShoppingCart } from "lucide-react";
import Modal from "./Modal";
export default function Header({ cart }) {
  const [visible, setVisible] = useState(false);

  const List = () =>
    cart.map((item) => (
      <div className={s.orderItem}>
        <div>
          <div>{item.title1} </div>
          <div>{item.title2} </div>
        </div>
        <div className={s.orderPrice}></div>
        <div> {item.summary}P</div>
      </div>
    ));
  function onCancel() {
    setVisible(false);
  }
  function onSuccess() {}
  function modalText() {
    return (
      <div>
        <List />
      </div>
    );
  }
  return (
    <>
      <Modal
        visible={visible}
        setVisible={setVisible}
        modalTitle="Your order"
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
        <p className={s.header}>Pizza Shop</p>
        <div onClick={() => setVisible(true)}>
          <ShoppingCart className={s.cart} />
        </div>
      </div>
    </>
  );
}

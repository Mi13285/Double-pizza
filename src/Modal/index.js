import { ShoppingCart } from "lucide-react";
import classes from "./Modal.module.css";
export default function Modal({
  visible,
  setVisible,
  modalTitle,
  modalText,
  onCancel,
  onSuccess,
  isCloseIcon,
  isFooter,
  isCancelButton,
  isImage,
  onSuccessButtonLabel,
  imageSource,
}) {
  if (!visible) return null;

  return (
    <>
      <div className={classes.overlay}>
        <div className={classes.modal}>
          {isImage && <img className={classes.img} src={imageSource} />}
          <div className={classes.modalContent}>
            <div className={classes.modalHeader}>
              <p className={classes.header}>{modalTitle}</p>
              {isCloseIcon && (
                <button onClick={() => setVisible(false)}>
                  <ShoppingCart className={classes.cart} />
                </button>
              )}
            </div>

            <div className={classes.modalBody}>{modalText()}</div>

            {isFooter && (
              <div className={classes.modalFooter}>
                {isCancelButton && (
                  <button
                    className={classes.cancelButton}
                    onClick={() => onCancel()}
                  >
                    Cancel
                  </button>
                )}

                <button
                  className={classes.okButton}
                  onClick={() => onSuccess()}
                >
                  {onSuccessButtonLabel || "Done"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

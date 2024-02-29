import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

const ModifTodo = (props) => {
    return createPortal( 
      <div className={classes.modal}>
        <div className={classes.modalContent}>
          {props.children}
          <button onClick={props.closeModal}>Fermer</button>
        </div>
      </div>,
      document.body
     );
  }
 
export default ModifTodo;
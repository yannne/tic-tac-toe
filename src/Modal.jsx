import React, {PropsWithChildren} from "react";
import "./styles/Modal.css"

const Modal = ({winner, active, onRestart}) => {


    if (!active) return null
    return(
        <div className="modal">
            <div className="modal_container">
            <img className="modal_img" src="winimg.svg"/>
            <p className="modal_text">{winner}</p>
            <button className="modal_butrestart" onClick={onRestart}>Новая игра</button>
            <button className="modal_butexit">Выйти</button>
            </div>
        </div>
    )
}
export default Modal;
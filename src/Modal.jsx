import React, {PropsWithChildren} from "react";
import "./styles/Modal.css"
import { useNavigate } from "react-router-dom";

const Modal = ({ show, onRestart}) => {

    const link = useNavigate();

const toBack = () => link('/');

    if (!show.show) return null
    return(
        <div className="modal">
            <div className="modal_container">
            <img className="modal_img" src="winimg.svg"/>
            <p className="modal_text">{show.modalText}</p>
            <button className="modal_butrestart" onClick={onRestart}>Новая игра</button>
            <button className="modal_butexit" onClick={toBack}>Выйти</button>
            </div>
        </div>
    )
}
export default Modal;
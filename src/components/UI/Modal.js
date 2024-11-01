import React from 'react'
import styles from './Modal.module.css'
import ReactDOM from 'react-dom'
const Modal = (props) => {

    const Backdrop = (props) => {
        return <div className={styles.backdrop} onClick={props.onCartDisable} />
    }

    const Overlay = (props) => {
        return <div className={styles.modal}>
            <div>{props.children}</div>

        </div>
    }

    const portalElement = document.getElementById("overlays")
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onCartDisable={props.onCartDisable} />, portalElement)}
            {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, portalElement)}

        </>
    )
}

export default Modal
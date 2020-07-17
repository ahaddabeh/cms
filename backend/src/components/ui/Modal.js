import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactModal from "react-modal";

const RJSModal = ({ htmlPreview }) => {
    const [showModal, setShowModal] = useState(false);
    const handleOpenModal = (e) => {
        e.preventDefault()
        setShowModal(true);
    }
    const handleCloseModal = (e) => {
        e.preventDefault();
        setShowModal(false);
    }




    return (
        <div>
            <button className="btn btn-primary" onClick={handleOpenModal}>Preview</button>
            <ReactModal isOpen={showModal} contentLabel="Minimal Modal Example">
                <button className="btn btn-primary" onClick={handleCloseModal}>Close Modal</button>
                <div dangerouslySetInnerHTML={{ __html: `${htmlPreview}` }} />
            </ReactModal>
        </div>

    )
}

export default RJSModal;
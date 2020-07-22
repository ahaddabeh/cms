import React, { useState, useEffect } from "react";
import { createPortal } from 'react-dom'
import ReactModal from "react-modal";
import { Link } from "react-router-dom";


const RJSModal = (previewCallback) => {
    const [showModal, setShowModal] = useState(false);
    // const [preview, setPreview] = useState({});
    const handleOpenModal = () => {
        setShowModal(true);
    }
    const handleCloseModal = () => {
        setShowModal(false);
    }

    const htmlPreview = async () => await props.previewCallback();
    return (
        <div>
            <Link className="btn btn-primary" onClick={handleOpenModal}>Preview</Link>
            <ReactModal isOpen={showModal} contentLabel="Minimal Modal Example">
                <Link className="btn btn-primary" onClick={handleCloseModal}>Close Modal</Link>
                <div dangerouslySetInnerHTML={{ __html: `${htmlPreview}` }} />
                {console.log("This is from the modal", htmlPreview)}
            </ReactModal>
        </div>

    )
}

export default RJSModal;
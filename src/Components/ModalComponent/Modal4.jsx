import React, { useState} from 'react';
import './Modal.css';
import { useTranslation } from "react-i18next";

const Modal4 = () => {
  const { t } = useTranslation(["kazuki"]);
    const [modal, setModal] = useState(false);
    const toggleModal = () =>{
        setModal(!modal)
    }
  return (
    <>
    <button 
    onClick={toggleModal}
    className="btn-modal">
        read more
    </button>
    {modal &&(
    <div className="modal">
        <div onClick={toggleModal}
        className="overlay"></div>
        <div className="modal-content">
        <div className="modal-section">
            <h1 className="modal-name">Iwamoto Kazuki</h1>

            <ul className="modal-timeline">
              <li className='modal-li'>
                <h3 className="timeline-date">1996.</h3>
                <h3 className="timeline-content">{t("1996")}</h3>
              </li>
              <li className='modal-li'>
                <h3 className="timeline-date">2018.</h3>
                <h3 className="timeline-content">{t("2018")}</h3>
              </li>
              <li className='modal-li'>
                <h3 className="timeline-date">2020.</h3>
                <h3 className="timeline-content">{t("2020")}</h3>
              </li>
              <li className='modal-li'>
                <h3 className="timeline-date">2021.</h3>
                <h3 className="timeline-content">{t("2021")}</h3>
              </li>
            </ul>
            <div className="member-work">{t("content")}</div>
            <p className="member-work1">{t("work")}</p>
          </div>
            <span 
            className="close-modal"
            onClick={toggleModal}
            >
            </span>
        </div>
    </div>
    )}
    </>
  )
}

export default Modal4;
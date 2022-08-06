import React, { useState} from 'react';
import './Modal.css';
import { useTranslation } from "react-i18next";


const Modal1 = () => {
  const { t } = useTranslation(["mari"]);
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
            <h1 className="modal-name">Nagatake Mari</h1>

            <ul className="modal-timeline">
              <li className='modal-li'>
                <div className="timeline-date1">0000.</div>
                <h3 className="timeline-content">{t("born")}</h3>
              </li>
              <li className='modal-li'>
                <h3 className="timeline-date">2005.</h3>
                <h3 className="timeline-content">{t("2005")}</h3>
              </li>
              <li className='modal-li'>
                <h3 className="timeline-date">2005.</h3>
                <h3 className="timeline-content">{t("2005.")}</h3>
              </li>
              <li className='modal-li'>
                <div className="timeline-date1">0000.</div>
                <h3 className="timeline-content">{t("subcontent")}</h3>
              </li>
              <li className='modal-li'>
                <h3 className="timeline-date">2016.</h3>
                <h3 className="timeline-content">{t("2016")}</h3>
              </li>
              <li className='modal-li'>
                <h3 className="timeline-date">2022.</h3>
                <h3 className="timeline-content">{t("2022")}</h3>
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

export default Modal1
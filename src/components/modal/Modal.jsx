
const Modal = ({id, header, body, footer, onClose}) => {
  return (
    <div id={id||'modal'} className="modal">
      <div className="contentModal">
        <div className="headerModal">
            <span onClick={onClose} className="close-modal-icon">&times;</span>
            <h2>{header? header: 'Header'}</h2>
        </div>
        <div className="bodyModal">
            {body? body: <div><p>This is Our Modal Body</p></div>}
        </div>
        <div className="footerModal">
            {footer? footer: <h2>This is Our Modal footer</h2>}

        </div>
      </div>
    </div>
  )
}

export default Modal

import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min';

const MessageBox = forwardRef((props, ref) => {
  const modalRef = useRef();

  useImperativeHandle(ref, () => ({
    show: () => {
      const modalElement = new bootstrap.Modal(modalRef.current);
      modalElement.show();
    },
    hide: () => {
      const modalElement = new bootstrap.Modal(modalRef.current);
      modalElement.hide();
    },
  }));

  const { msg } = props;

  return (
    <div
      ref={modalRef}
      id="messageModal"
      className="modal fade"
      tabIndex="-1"
      aria-labelledby="messageModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="messageModalLabel">Sunucu Mesajı</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {msg}
          </div>
          <div className="modal-footer">
            <a href="/users" className="btn btn-success">Kullanıcı Listesi</a>
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Kapat</button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default MessageBox;

import React, { useEffect, useRef, useState } from 'react';
import Layout from './Layout';
import Error from './Error';
import MessageBox from '../Components/MessageBox';
import UserRoutes from '../Routes/UserRoutes';

function Delete() {
  const URLParams = new URLSearchParams(window.location.search);
  const Id = URLParams.get('Id');

  const [msg, setMsg] = useState('');
  const [user, setUser] = useState({});
  const messageModalRef = useRef(null);

  useEffect(() => {
    if (Id) {
      UserRoutes.getAUser(Id)
        .then((response) => {
          setUser(response.data.data[0]);
        })
        .catch((err) => {
          setMsg(err.message);
          if (messageModalRef.current) {
            messageModalRef.current.show();
          }
        });
    }
  }, [Id]);

  const handleSubmit = (e) => {
    e.preventDefault()

    UserRoutes.deleteUser(Id)
      .then(response => {
        setMsg(response.data.message)
        if (messageModalRef.current) {
          messageModalRef.current.show();
        }
      })
      .catch(err => {
        setMsg(err.message);
        if (messageModalRef.current) {
          messageModalRef.current.show();
        }
      });
  };

  if (Id && URLParams) {
    return (
      <Layout>
        <div className="card">
          <div className="card-header">
            Şunu kullanıcıyı silmek istediğinize emin misiniz, {user.username}
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <a href="/users" className="btn btn-default border">
                Geri Git
              </a>
              &nbsp;&nbsp;
              <button type="submit" className="btn btn-danger">
                Sil
              </button>
            </form>
          </div>
        </div>
        <MessageBox ref={messageModalRef} msg={msg} />
      </Layout>
    );
  } else {
    return <Error message="Kullanıcı Bulunamadı" />;
  }
}

export default Delete;

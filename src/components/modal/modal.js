import './modal.css';

const Modal = ({ modal, setModal, data }) => {

  return (
    <>
      <div className={modal ? 'post-modal active' : 'post-modal'} onClick={() => setModal(false)}>
        <div className='post-modal-body' onClick={e => e.stopPropagation()}>
          <img src={data.imgUrl} />
          {data.description}
        </div>
      </div>
    </>
  )
}

export default Modal;
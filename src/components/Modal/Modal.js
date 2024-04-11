import ReactModal from 'react-modal';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: '0',
    padding: '0',
    width: '70%',
    height: '90%',
    overflow: 'hidden',
  },
};

export const Modal = ({ isOpen, isClose, gallery, price }) => {
    if (!isOpen) {
        return null;
    }
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={isClose}
      style={customStyles}
    >
      {gallery.map(item => (
        <li key={item}>
          <img src={item} alt={price} height="50%" width="30%" />
        </li>
      ))}
      <ul>
        <li>
          <h3>Features</h3>
        </li>
        <li>
          <h3>Reviews</h3>
        </li>
      </ul>
    </ReactModal>
  );
};

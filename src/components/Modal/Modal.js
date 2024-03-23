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

ReactModal.setAppElement('#root');
export const Modal = ({ isOpen, isClose, gallery, name = "Sasha" }) => {
    if (!isOpen) {
        return null;
    }
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={isClose}
      style={customStyles}
      contentLabel="Large image"
    >
      {gallery.map(item => (
        <li key={item}>
          <img src={item} alt={name} height="50%" width="30%"/>
        </li>
      ))}
    </ReactModal>
  );
};

/* eslint-disable react/prop-types */

export default function PopUp({ clotes, onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h3>{clotes.name}</h3>
        <p>Price: Rp{clotes.price.toLocaleString()}</p>
        <p>Color: {clotes.color}</p>
        <img src={clotes.image} alt={clotes.name} />
        <button onClick={onClose}>X</button>
      </div>
    </div>
  );
}

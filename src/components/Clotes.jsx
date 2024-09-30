/* eslint-disable react/prop-types */
import { MessageCircle, Heart, Info } from "lucide-react";
import { useState } from "react";

export default function Clotes({ propsClotes, onBuy, onInfoClick, onMessageClick }) {
  const [likedItems, setLikedItems] = useState([]);

  const handleHeartClick = (clotes) => {
    if (likedItems.includes(clotes.id)) {
      setLikedItems(likedItems.filter((id) => id !== clotes.id)); // Hapus jika sudah disukai
    } else {
      setLikedItems([...likedItems, clotes.id]); // Tambah ke likedItems jika belum
    }
  };

  return (
    <div className="clotes-container">
      {propsClotes.map((clotes) => (
        <div key={clotes.id} className="clotes-card">
          <div className="clotes-image-container">
            <img src={clotes.image} alt={clotes.name} className="clotes-image" />
            <h3 className="clotes-name">{clotes.name}</h3>
            <p className="clotes-price"> Rp{clotes.price.toLocaleString()}</p>
          </div>
          <div className="clotes-buttons">
            <button className="info-button" onClick={() => onInfoClick(clotes)}>
              <Info />
            </button>
            <button className="heart-button" onClick={() => handleHeartClick(clotes)}>
              <Heart fill={likedItems.includes(clotes.id) ? "red" : "white"} />
            </button>
            <button className="message-button" onClick={onMessageClick}>
              <MessageCircle />
            </button>

          </div>
          <div className="btn">
          <button className="buy-button" onClick={onBuy}>Buy Now</button>

          </div>
        </div>
      ))}
    </div>
  );
  }

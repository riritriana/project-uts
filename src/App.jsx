import { useState } from "react";
import Clotes from "./components/Clotes";
import { ShoppingCart } from "lucide-react"; // Pastikan untuk mengimpor ShoppingCart
import PopUp from "./components/PopUp";
import Footer from "./components/Footer";

export default function App() {
  const clotes = [
    {
      id: 1,
      name: "Switer",
      price: 140000,
      color: "Cream",
      image: "https://i.pinimg.com/564x/86/b0/36/86b0366e27424cec003200efac797b4d.jpg",
    },
    {
      id: 2,
      name: "Cardigan",
      price: 150000,
      color: "Black-White",
      image: "https://i.pinimg.com/564x/a9/0e/cd/a90ecde28ea0700b52263e71460965a1.jpg",
    },
    {
      id: 3,
      name: "Midi wrap skirt",
      price: 150000,
      color: "Pink",
      image: "https://i.pinimg.com/564x/10/31/88/103188dce048154ceb283b1b801ffb0c.jpg",
    },
    {
      id: 4,
      name: "Leather Jacket Men",
      price: 150000,
      color: "Black",
      image: "https://i.pinimg.com/564x/00/44/08/0044084dd5ac170f7aac519b1046a78e.jpg",
    },
    {
      id: 5,
      name: "Kurtz Jacket",
      price: 100000,
      color: "Brown",
      image: "https://i.pinimg.com/564x/0f/f4/47/0ff44714bf0cd72a67f98b97d4b7f6c9.jpg",
    },
    {
      id: 6,
      name: "Vintage Skirt",
      price: 100000,
      color: "Caramel",
      image: "https://i.pinimg.com/564x/da/c0/f9/dac0f934239096cfa93c9420576c5210.jpg",
    },
    {
      id: 7,
      name: "Chino Pants",
      price: 100000,
      color: "Cream",
      image: "https://i.pinimg.com/564x/20/20/9a/20209a96e832caa3d4866face3ae88a1.jpg",
    },
    {
      id: 8,
      name: "Ezza Dress Pants",
      price: 100000,
      color: "Black",
      image: "https://i.pinimg.com/564x/60/90/9f/60909f1b1ec1928718583462887101d3.jpg",
    },
    {
      id: 9,
      name: "Middi Dress ",
      price: 100000,
      color: "Green",
      image: "https://i.pinimg.com/564x/cb/0e/5d/cb0e5dd120b9b5d3e15bb0086234cfd3.jpg",
    },
    {
      id: 10,
      name: "Casual Drees",
      price: 100000,
      color: "Green",
      image: "https://i.pinimg.com/564x/e9/46/d7/e946d7297e61657167c7c9cacc38c167.jpg",
    },




  ];

  const [count, setCount] = useState(0);
  const [selectedClotes, setSelectedClotes] = useState(null); // State untuk menyimpan produk yang dipilih
  const [isPopUpOpen, setIsPopUpOpen] = useState(false); // State untuk mengontrol pop-up

  const handleInfoClick = (clotes) => {
    setSelectedClotes(clotes);
    setIsPopUpOpen(true); // Buka pop-up
  };

  const closePopUp = () => {
    setIsPopUpOpen(false); // Tutup pop-up
    setSelectedClotes(null); // Reset produk yang dipilih
  };

  const handleBuy = () => {
    setCount(count + 1);
  };

  const handleMessageClick = () => {
    const message = prompt("Give your comments:");
    if (message) {
      alert(`Your comments: ${message}`);
    }
  };

  return (
    <div>
      <div className="header">
        <h1> Clotes Shop</h1>
        <div className="cart">        
          <ShoppingCart />
        {count > 0 && <span className="count"> {count}</span>} 
      </div>
      </div>
      <Clotes 
        propsClotes={clotes} 
        onBuy={handleBuy} 
        onInfoClick={handleInfoClick} 
        onMessageClick={handleMessageClick} 
      />
      {isPopUpOpen && selectedClotes && (
        <PopUp clotes={selectedClotes} onClose={closePopUp} />
      )}
      <Footer/>
    </div>
  );
}

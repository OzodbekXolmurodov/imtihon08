import { AiFillDelete } from "react-icons/ai";
import { Product } from "../../api/Api";
import rasim1 from "./../../assets/minimal-49-512.webp";

const Cart = () => {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");

  const handleRemove = (productId: string) => {
    const updatedCart = cart.filter((item: Product) => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.location.reload();
  };

  return (
    <div className="contianer">
      <h2 className="text-[40px] font-bold mt-10 mb-10"> Your cart</h2>
      <div className="rounded-xl border-[1px] p-8 w-[600px]">
        {cart.length === 0 ? (
          <div className="flex justify-center">
            <img src={rasim1} alt="" />
          </div>
        ) : (
          cart.map((product: Product) => (
            <div
              key={product.id}
              className="cart-item flex items-center gap-4 mb-6"
            >
              <img
                className="w-[124px] rounded-2xl"
                src={product.urls[0]}
                alt={product.name}
              />
              <div>
                <div className="flex items-baseline justify-between gap-[100px] ">
                  <h3 className="text-[20px] font-bold mb-2">{product.name}</h3>
                  <button onClick={() => handleRemove(product.id)}>
                    <AiFillDelete className="text-xl text-red-700" />
                  </button>
                </div>
                <p className="font-bold">
                  size : <span className="font-light text-sm">Large</span>
                </p>
                <p className="font-bold mb-1">
                  color : <span className="font-light text-sm">White</span>
                </p>
                <p className="text-[24px]">${product.desprice}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;

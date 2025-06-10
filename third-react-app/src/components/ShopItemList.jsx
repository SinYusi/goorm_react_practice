import { useState } from "react";

export default function ShopItemList({ data }) {
  const { productName, productPrice, count } = { ...data };
  const [countState, setCountState] = useState(count);
  return (
    <div style={{border:"1px solid black", padding: "15px"}}>
      <p>{productName}</p>
      <p>{productPrice}</p>
      <p>장바구니 수량 : {countState}</p>
      <button onClick={() => setCountState(prev => prev + 1)}>장바구니+1</button>
    </div>
  )
}
import React,{useState } from "react"

function MyComponents(){
const [name,setName] = useState("");
const [quantity,setQuantity] = useState(0);
const [comment,setComment] = useState("");
const [payment,setPayment] = useState("");
const [shipping,setShipping] = useState("");

function handleNameChange(e){
    setName(e.target.value);
}
function changeQuantity(e){
    setQuantity(e.target.value);
}
function handleCommentChange(e){
    setComment(e.target.value);
}
function handlePaymentChange(e){
    setPayment(e.target.value);
}
function handleShippingChange(e){
    setShipping(e.target.value);
}

return(
    <div>
        <input value={name} onChange={handleNameChange}></input>
        <p>name: {name}</p>
        <input value={quantity} onChange={changeQuantity} type="number"></input>
        <p>quantity: {quantity}</p>
        <textarea value={comment} onChange={handleCommentChange} placeholder="Enter delivery instructions"></textarea>
        <p>Comment: {comment}</p>
        <select value={payment} onChange={handlePaymentChange}>
            <option value="">Select an option</option>
            <option value="Visa">Visa</option>
            <option value="MasterCard">Master Card</option>
            <option value="PayPal">Pay pal</option>
        </select>
        <p>payment: {payment}</p>

        <label>
            <input type="radio" value="Pick Up" checked={shipping=== "Pick Up"} onChange={handleShippingChange}></input>
            Pick Up
        </label>
        <label>
             <input type="radio" value="Delivery" checked={shipping=== "Delivery"} onChange={handleShippingChange}></input>
            Delivery
        </label>
    <p>Shipping: {shipping}</p>
    </div>
);
}

export default MyComponents
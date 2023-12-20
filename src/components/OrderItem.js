import { useState, useEffect } from "react";
import React from "react";

export default function OrderItem(props) {
  const [orderItems, setOrderItems] = useState([]);

  const fetchOrderItems = async (tableId) => {
    try {
      const response = await fetch(
        `https://localhost:5001/OrderItem?tableId=${tableId}}`
      );
      if (response.ok) {
        const data = response.json();
        setOrderItems(data);
      }
    } catch (error) {
      console.error("an error occured", error);
    }
  };

  useEffect(() => {
    fetchOrderItems(props.tableId);
  }, []);

  return (
    <div>
      {orderItems.map((item) => (
        <div>{item.name}</div>
      ))}
    </div>
  );
}

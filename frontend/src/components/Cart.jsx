import React from 'react';
import useCartStore from '../store/cart';
import { Trash2, ShoppingCart } from 'lucide-react';

function Cart() {
  const { items, removeItem, updateQuantity, getTotal } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <ShoppingCart className="w-16 h-16 text-gray-300 mb-4" />
        <p className="text-gray-500">Tu carrito está vacío</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item._id}
          className="flex items-center justify-between p-4 border rounded-lg bg-white"
        >
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900">{item.name}</h3>
            <p className="text-gray-500">${item.price.toFixed(2)}</p>
          </div>

          <div className="flex items-center space-x-4">
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => updateQuantity(item._id, parseInt(e.target.value))}
              className="w-16 px-2 py-1 border rounded"
            />

            <p className="font-semibold w-24 text-right">
              ${(item.price * item.quantity).toFixed(2)}
            </p>

            <button
              onClick={() => removeItem(item._id)}
              className="text-red-500 hover:text-red-700"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      ))}

      <div className="mt-6 pt-4 border-t">
        <div className="flex justify-between items-center text-xl font-bold">
          <span>Total:</span>
          <span>${getTotal().toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

export default Cart;

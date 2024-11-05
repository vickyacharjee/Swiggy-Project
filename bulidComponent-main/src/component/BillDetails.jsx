import React from 'react';

function BillDetails({items,details,cost,totalGrocery,sumGrocery}) {
  totalGrocery=parseInt(totalGrocery)
  items=parseInt(items)
  console.log(cost);
  
  return (
    <div className="max-w-sm p-6 bg-white rounded-lg shadow-lg mr-8">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Bill Details</h2>

      <div className="flex justify-between text-gray-600 mb-2">
        <span>Item Total</span>
        <div>
          <span className="line-through text-gray-400">{(items+totalGrocery).toFixed(2)}</span>
          <span className="text-green-500 ml-2">{(totalGrocery+items-cost).toFixed(2)}</span>
        </div>
      </div>

      <div className="flex justify-between text-gray-600 mb-2">
        <span>Delivery Fee | {Math.ceil(Math.random()*10+1)} kms</span>
        <span>₹ {Math.ceil(Math.random()*40+1)}</span>
      </div>

      <div className="flex justify-between text-gray-600 mb-2">
        <span>Extra discount for you</span>
        <span>-₹35</span>
      </div>

      <hr className="my-4 border-gray-200" />

      {/* <div className="flex justify-between text-gray-600 mb-2">
        <span>Delivery Tip</span>
        <span className="text-orange-500">Add tip</span>
      </div> */}

      <div className="flex justify-between text-gray-600 mb-2">
        <span>Festive season platform fee</span>
        <div>
          <span className="line-through text-gray-400">₹10.00</span>
          <span className="ml-2">8</span>
        </div>
      </div>

      <div className="flex justify-between text-gray-600 mb-2">
        <span> GST and Restaurant Charges  </span>
        <span> ₹ {(sumGrocery+cost).toFixed(2)}</span>
      </div>

      <hr className="my-4 border-gray-800" />

      <div className="flex justify-between text-gray-800 font-bold text-lg">
        <span>TO PAY</span>
        <span>₹ {Math.floor(totalGrocery+items+sumGrocery).toFixed(2)}</span>
      </div>
    </div>
  );
}

export default BillDetails;

import Button from "./Button"


function Card ({book}){
    return(
        <>
<div className="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-green-300 transition-shadow duration-500">
  
  <div className="p-5">
    <h3 className="text-lg font-semibold text-green-700">Classic Sneakers</h3>
    <p className="text-gray-600 text-sm mt-2">Comfortable and stylish sneakers perfect for everyday wear. Available in multiple colors.</p>
    <div className="flex items-center justify-between mt-4">
      <span className="text-xl font-bold text-green-600">$79.99</span>
      {/* <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition duration-200">
        Add to Cart
      </button> */}
      <Button label="Add to cart" />
      
    </div>
  </div>
</div>
        
        </>
    )
}

export default Card
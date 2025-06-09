import { Link } from "react-router-dom"
import Button from "./Button"


function Card ({book}){
    return(
        <>
        <Link to={`/single-page/${book.id}`}>
<div className="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-green-300 transition-shadow duration-500">
  
  <div className="p-5">
    <h3 className="text-lg font-semibold text-green-700">{book.bookName}</h3>
    <p className="text-gray-600 text-sm mt-2">{book.bookDescription}</p>
    <div className="flex items-center justify-between mt-4">
      <span className="text-xl font-bold text-green-600">${book.bookPrice}</span>
      {/* <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition duration-200">
        Add to Cart
      </button> */}
      <Button label={"Add to cart"} />
      
    </div>
  </div>
</div>
        </Link>
        </>
    )
}

export default Card
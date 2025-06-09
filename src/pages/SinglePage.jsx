import { Link, useNavigate, useParams } from "react-router-dom"
import NavBar from "../components/NavBar"
import { useEffect, useState } from "react"
import axios from "axios"
import Button from "../components/Button"


function SinglePage(){
    const navigate = useNavigate()
    const {id} = useParams()

    const[book,setBook] = useState({})
    const singleBook = async ()=>{
        const response = await axios.get("http://localhost:7000/api/"+id)
        // console.log(response.data.data)
        setBook(response.data.data)
    }
    useEffect(()=>{
        singleBook()
    },[])
    
const deleteBook = async () => {
        const response = await axios.delete("http://localhost:7000/api/"+id)
        if (response.status === 200) {
            alert("Book deleted successfully");
            navigate("/");
        } else {
            alert("Something went wrong");
        }
}   
    return(
        <>
        <NavBar />
       
       <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="w-120 h-60 p-5 max-w-xl bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-green-300 transition-shadow duration-500">
  
  <div className="p-5">
    <h3 className="text-lg font-semibold text-green-700">{book.bookName}</h3>
    <p className="text-gray-600 text-sm mt-2">{book.bookDescription}</p>
    <div className="flex items-center justify-between mt-4">
      <span className="text-xl font-bold text-green-600">${book.bookPrice}</span>
      {/* <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition duration-200">
        Add to Cart
      </button> */}
      <Link to={`/edit-page/${book.id}`}> <Button label={"Edit book"} /> </Link>
       <Button onClick={deleteBook} label={"Delete book"} />
       {/* <button onClick={deleteBook}>delete</button> */}
    </div>
  </div>
</div>
</div>
        </>
    )
}

export default SinglePage
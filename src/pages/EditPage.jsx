import { useNavigate, useParams } from "react-router-dom"
import NavBar from "../components/NavBar"
import { useEffect, useState } from "react"
import axios from "axios"
import Button from "../components/Button"


function EditPage(){
    const navigate = useNavigate()
    const{id} = useParams()
    const[book,setBook] = useState({})

    const fetchBook = async ()=>{
       const response = await axios.get(`http://localhost:7000/api/${id}`)
       // console.log(response.data)
       setBook(response.data.data)
    }
useEffect(()=>{
    fetchBook()
},[])

    const handleChange= (event)=>{
        let{name,value} = event.target
        setBook({
            ...book,
            [name]: value
        })
    }

    const editBook= async (event)=>{
        event.preventDefault()
        const response = await axios.patch(`http://localhost:7000/api/${id}`,book)
        if(response.status == 200){
            alert("Book edited successfully")
            navigate("/")
        }else{
            alert("something went wrong")
        }
}

    return(
        <>
        <NavBar />
        <form onSubmit={editBook} className="max-w-lg mx-auto mt-20 p-6 bg-white border rounded-lg shadow-lg">
  <h2 className="text-3xl text-green-700 font-bold mb-6">Edit Book</h2>
  <div className="mb-4">
    <label className="block text-green-700 font-bold mb-2" htmlFor="bookName">
      Book Name:
    </label>
    <input name="bookName" value={book.bookName} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="bookName" type="text" placeholder="Rich dad poor dad" required />
  </div>
   <div className="mb-4">
    <label className="block text-green-700 font-bold mb-2" htmlFor="bookPrice">
      Book Price:
    </label>
    <input name="bookPrice" value={book.bookPrice} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="bookPrice" type="number" placeholder="999" required />
  </div>
  <div className="mb-4">
    <label className="block text-green-700 font-bold mb-2" htmlFor="bookAuthor">
      Book Author:
    </label>
    <input name="bookAuthor" value={book.bookAuthor} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="John J bidan" required />
  </div>
  <div className="mb-4">
    <label className="block text-green-700 font-bold mb-2" htmlFor="feedback">
      Book Description:
    </label>
    <textarea name="bookDescription" value={book.bookDescription} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="feedback" rows={5} placeholder="book description goes here" defaultValue={""} required />
  </div>
  {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
    Submit
  </button> */}
  <Button label={"Edit book"} type={"submit"} />
 
</form>
        
        </>
    )
}

export default EditPage
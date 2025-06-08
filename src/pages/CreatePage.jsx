import { useNavigate } from "react-router-dom"
import NavBar from "../components/NavBar"
import Button from "../components/Button"
import { useState } from "react"
import axios from "axios"


function CreatePage(){
   const navigate = useNavigate()

    const [bookData, setBookData] = useState({
        bookName: "",
        bookPrice: "",
        bookAuthor: "",
        bookDescription: ""
    })

    const handleChange = (event)=>{
        // console.log(event.target.name)
        let{name,value} = event.target

        setBookData({
            ...bookData,
            [name]: value
        })
    }
const submitData = async (event)=>{
    event.preventDefault()

    const response = await axios.post("http://localhost:7000/api/",bookData)
    if(response.status === 200){
        alert("Book added successfully")
        navigate("/")
    }else{
        alert("Something went wrong")
    }
}


    return(
        <>
        <NavBar />
         <form onSubmit={submitData} className="max-w-lg mx-auto mt-20 p-6 bg-white border rounded-lg shadow-lg">
  <h2 className="text-3xl text-green-700 font-bold mb-6">Add Book</h2>
  <div className="mb-4">
    <label className="block text-green-700 font-bold mb-2" htmlFor="bookName">
      Book Name:
    </label>
    <input name="bookName" onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none focus:shadow-outline" id="bookName" type="text" placeholder="Rich dad poor dad" required />
  </div>
   <div className="mb-4">
    <label className="block text-green-700 font-bold mb-2" htmlFor="bookPrice">
      Book Price:
    </label>
    <input name="bookPrice" onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none focus:shadow-outline" id="bookPrice" type="number" placeholder="999" required />
  </div>
  <div className="mb-4">
    <label className="block text-green-700 font-bold mb-2" htmlFor="bookAuthor">
      Book Author:
    </label>
    <input name="bookAuthor" onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="John J bidan" required />
  </div>
  <div className="mb-4">
    <label className="block text-green-700 font-bold mb-2" htmlFor="feedback">
      Book Description:
    </label>
    <textarea name="bookDescription" onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="feedback" rows={5} placeholder="book description goes here" defaultValue={""} required />
  </div>
  {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
    Submit
  </button> */}
  <Button label={"Add book"} type="submit" />
</form>
        </>
    )
}

export default CreatePage
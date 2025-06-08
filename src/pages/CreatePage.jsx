import { Form } from "react-router-dom"
import NavBar from "../components/NavBar"
import Button from "../components/Button"


function CreatePage(){
    return(
        <>
        <NavBar />
        {/* <Form /> */}

        <form action="submit" method="post" className="max-w-lg mx-auto mt-20 p-6 bg-white border rounded-lg shadow-lg">
  <h2 className="text-3xl text-green-700 font-bold mb-6">Add Book</h2>
  <div className="mb-4">
    <label className="block text-green-700 font-bold mb-2" htmlFor="bookName">
      Book Name:
    </label>
    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none focus:shadow-outline" id="bookName" type="text" placeholder="Rich dad poor dad" />
  </div>
   <div className="mb-4">
    <label className="block text-green-700 font-bold mb-2" htmlFor="bookPrice">
      Book Price:
    </label>
    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none focus:shadow-outline" id="bookPrice" type="text" placeholder="999" />
  </div>
  <div className="mb-4">
    <label className="block text-green-700 font-bold mb-2" htmlFor="bookAuthor">
      Book Author:
    </label>
    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="John J bidan" />
  </div>
  <div className="mb-4">
    <label className="block text-green-700 font-bold mb-2" htmlFor="feedback">
      Book Description:
    </label>
    <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="feedback" rows={5} placeholder="book description goes here" defaultValue={""} />
  </div>
  {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
    Submit
  </button> */}
  <Button label={"Add book"} />
</form>
        </>
    )
}

export default CreatePage
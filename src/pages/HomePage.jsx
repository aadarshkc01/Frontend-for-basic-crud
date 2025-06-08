import { useEffect, useState } from "react"
import Card from "../components/Card"
import NavBar from "../components/NavBar"
import axios from "axios"

function HomePage(){
    const [books, setBooks] = useState([])
    const fetchBooks = async ()=>{
       const response = await axios.get('http://localhost:7000/api/')
    //    console.log(response.data.datas)
       setBooks(response.data.datas)
    }

useEffect(()=>{
    fetchBooks()
},[])

    return (
        <>
        <NavBar />

        <div className="flex flex-wrap m-3 gap-2">
        {
            books.map(function(book){
                return(
                    <Card book={book} key={book.id}/>
                )
            })
        } 

        </div>
        </>
    )
}

export default HomePage
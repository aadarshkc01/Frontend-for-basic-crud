

function Button({label, onClick, type}){
    return(
        <>
         <button onClick={onClick} type={type} className="ml-4 bg-green-400 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-500">{label}</button>
          </>
    )
}

export default Button
import { useState, useContext} from "react";
import BooksContext from "../context/books";

function BookEdit ({book,onSubmit}){

    const {editBookById}= useContext(BooksContext);
    const [title, setTitle]= useState(book.title);

    const handleChange = (e)=>{
        setTitle(e.target.value);
    };

    const handleSubmit =(e)=>{
        e.preventDefault(); 
        // console.log(title);
        // onEdit(book.id, title);
        onSubmit();
        editBookById(book.id,title);
    };

    return <form className="book-edit" onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange}/> 
        <button className="button is-primary">Save</button>
    </form>;
}

export default BookEdit;
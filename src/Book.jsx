import './book.css'

export default function Book({book}){
    const {name,price} = book
    return (
        <div className='book'>
            <h3>Book: {name}</h3>
            <h3>Price: {price}</h3>
        </div>
    )
}
// import { useLoaderData } from "react-router-dom";

// const BookDetails = () => {

//     const bookDetails = useLoaderData();

//     const currentUrl = window.location.href;
//     const url = currentUrl.split('/');
//     const getId = parseInt(url[url.length - 1]);
//     const findBook = bookDetails.find(book => book.id === getId)
    
//     const {bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing} = findBook;
    
//     return (
//         <div>
//             <div>
//                 <img src={image} alt="" />
//             </div>
//             <div>

//             </div>
//         </div>
//     );
// };

// export default BookDetails;



import { useLoaderData } from "react-router-dom";

const BookDetails = () => {
    const bookDetails = useLoaderData();
    
    // Get the book ID from the URL
    const currentUrl = window.location.href;
    const url = currentUrl.split('/');
    const getId = parseInt(url[url.length - 1]);

    // Find the book with the matching ID
    const findBook = bookDetails.find(book => book.id === getId);

    // If no book is found, handle it gracefully
    if (!findBook) {
        return <div className="text-center p-10 text-red-500">Book not found.</div>;
    }

    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = findBook;

    return (
        <div className="max-w-4xl mx-auto mt-10 p-5 bg-white rounded-lg shadow-md">
            <div className="flex justify-center mb-6">
                <img src={image} alt={bookName} className="w-64 h-96 object-cover rounded-lg" />
            </div>
            <div className="text-center mb-4">
                <h2 className="text-3xl font-semibold text-gray-800">{bookName}</h2>
                <h3 className="text-xl text-gray-600">By {author}</h3>
                <p className="text-md text-yellow-500 mt-2">{rating} ★</p>
            </div>
            <div className="mb-4">
                <h4 className="text-lg font-medium text-gray-700">Details</h4>
                <ul className="space-y-2 text-gray-600">
                    <li><strong>Category:</strong> {category}</li>
                    <li><strong>Publisher:</strong> {publisher}</li>
                    <li><strong>Year of Publishing:</strong> {yearOfPublishing}</li>
                    <li><strong>Total Pages:</strong> {totalPages}</li>
                    <li><strong>Tags:</strong> {Array.isArray(tags) ? tags.join(', ') : tags}</li>
                </ul>
            </div>
            <div className="mt-6">
                <h4 className="text-lg font-medium text-gray-700">Review</h4>
                <p className="text-gray-600 mt-2">{review}</p>
            </div>
        </div>
    );
};

export default BookDetails;

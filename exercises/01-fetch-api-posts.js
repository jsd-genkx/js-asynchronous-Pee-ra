
// TODO-01: Create a function named fetchPostsThen
//          Use fetch('https://dummyjson.com/posts')
//          Use .then() to convert response to JSON
//          Use another .then() to log the posts data
//          Use .catch() to handle errors

export const fetchPostsThen = () => {
   const endpoint = 'https://dummyjson.com/posts'
   fetch(endpoint)
    .then((response) => {
        if (!response.ok) {
            throw new Error("failed to get posts")  
        }
        return response.json();
    })
    .then((data) => {
        console.log(data.posts[0])
    }
    )
    .catch((error) => {
			console.log("Error occurred: ", error);
		})
};
fetchPostsThen()

// TODO-02: Export fetchPostsThen and test it in main.js 
// */

//import comment from './comment.js';

function getAllComments() { }

function filterCommentsByName() { }

function addCommentToLocalStorage(hikeComment) { 
    console.log(hikeComment);
    console.log(`Adding comment to local storage. The name is: ${hikeComment.name} The value is ${hikeComment.content}`)
}

/**
 * This function will be called when the user clicks on a submit comment button
 */
function submitComment() { 
    console.log("Submitting comment!");
}

/**
 * This will render the comment list at the bottom of the page.
 */
function showCommentsList() {

}




export {
    getAllComments, filterCommentsByName, addCommentToLocalStorage, showCommentsList
}
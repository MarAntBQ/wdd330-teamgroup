import * as ls from './ls.js';

// Create a list to house our comments
let commentList = new Array();

function getAllComments() { }

function filterCommentsByName() { }

/**
 *  Adds the comment to a list. Adds the list to local storage. 
 * Renders the comments to the screen.
 * @param {*} hikeComment 
 */
function addCommentToLocalStorage(hikeComment) { 
    // Add the comment to the hike list
    commentList.push(hikeComment);

    // Add the updated comment list to local storage
    ls.writeToLS("listOfComments", JSON.stringify(commentList));

    // Call the showCommentsList method to render it to the screen
    showCommentsList();
}


/**
 * This will render the comment list at the bottom of the page.
 */
function showCommentsList() {
    // Pull the most up to date list from localStorage
    commentList = ls.readFromLS("listOfComments");

    // Clear the lists
    document.querySelectorAll(".display-comment-list").forEach(listToDisplay => {
        listToDisplay.innerHTML = "";
    });

    // Loop through the comment list
    commentList.forEach(commentObject => {
        // Grab the list to display the comment
        let listToDisplayComment = document.getElementById(`${commentObject.indexOfHike}-display-comment-list`);
        
        // Create a list element
        let listElement = document.createElement("LI");
        // Add a class to the list element
        listElement.classList.add("comment-list-element");
        // Render the comment inside the list
        listElement.innerHTML = `
        ${commentObject.content}
        `;
        // Add the list element to the rest of the list
        listToDisplayComment.appendChild(listElement);

    });



}


export {
    getAllComments, filterCommentsByName, addCommentToLocalStorage, showCommentsList
}
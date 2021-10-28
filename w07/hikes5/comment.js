/*
A comment should consist of at least the name of the hike it is for, 
a date, and the actual text of the comment. You will also need a comment type to use
 as a key for when we store these to local storage.

 Teach wants us to use a Type flag. Is this a class? 

 Ideas: Use json. Make the name of the hike the id


 TODO: 

1. When the app loads we see a list of all hikes...below we should also see a list of all comments with type:hike.
2. When a hike is touched it will show us the details 
for that hike. We should also see any comments for that hike, 
and an input and button to add a new comment.

3. When the submit comment button is touched...comment is saved to json and is displayed on the hike.
*/



export default class HikeComment {

    // Constructor
    constructor(hikeName, comment) {
        this.name = hikeName;
        this.date = Date.now();
        this.content = comment;
        // Set the local type property
        this.type = "comment";
    }
    
    

    

}
// How do I run this script? 
// node Task1b.js    

todoList = []; 
/**
 * YOUR OBJECTIVE: 
 * We do a lot in the addAndPrintTodos() funciton. It's also limited in
 * in what it can do because it takes no input.
 * Is there a way to seperate the concerns so that they could be tied to particular events
 * while also allowing us to add any todos that we want?
 *
 * Replace the "__" in each of the "__todo" function definitions to create more logical 
 * function names and define some logic to accomplish these tasks inspired by 
 * what you did in Part A. Call both function in mainTask1b().
 * 
 * In addition to updating function names, only modify the file under 
 * the "// YOUR CODE HERE" comments.
 */

function construct_todo(todoString) {
    // YOUR CODE HERE
    todoList.push("Apply to y/cs!");
    todoList.push("Pick out my classes");
    todoList.push("Have dinner with my suite");
}

function print_todo() {
    // YOUR CODE HERE
    console.log("TO-DO LIST:");
    for (let i = 0; i < todoList.length; i++) {
        console.log((i+1).toString() + ". " + todoList[i]);
    }
}

/**
 * Main is considered the entry point to a procedural program. Within y/cs,
 * it's rare for us to write procedures in JS, but for learning purposes
 * we do it here
 */
function mainTask1b() {
    // YOUR CODE HERE (simply call the functions you implemented above)
    construct_todo();
    print_todo();
}

// This bit of code ensures that a main method exists! If it doesn't, then it throws an error
if (require.main === module) {
    // unlike other languages like Java, there is no built in main method. We use a funciton called
    // main by convention.
    mainTask1b();
}
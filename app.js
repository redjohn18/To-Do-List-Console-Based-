let todo = [];

while (true) {
  let answer = prompt("Enter the command.");
  answer = answer.toUpperCase();
  if (answer === "QUIT") {
    break;
  } else if (answer === "NEW") {
    let action = prompt("What would you like to do ?");
    todo.push(action);
    console.log("");
    console.log(action + " successfully added to the Todo List.");
    console.log("");
  } else if (answer === "LIST") {
    console.log("");
    console.log("Todo List : ");
    console.log("");
    console.log("**********");
    for (let i = 0; i < todo.length; i++) {
      console.log(i + ". " + todo[i]);
    }
    console.log("**********");
    console.log("");
  } else if (answer === "DELETE") {
    let del = prompt(
      "Enter the Index of the Item to delete from the Todo List."
    );
    todo.splice(del, 1);
  } else {
    console.log("Not a Valid Command");
  }
}

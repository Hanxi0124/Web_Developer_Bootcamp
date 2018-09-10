var todoList = ["Buy"];

var input = prompt("what would you like to do?"); 

while(input !== "quit"){
	if(input === "new"){
		newTodo();
	}
	else if(input === "list"){
		showTodo();
	}
	else if(input ==="delete"){
		deleteTodo();
	}
	else {
		alert("Please Please input new, list, delete or quit.");
	}
	var input = prompt("what would you like to do?"); 
}

function newTodo() {
	var newList = prompt("Enter new todo");
		todoList.push(newList);
		console.log("Add a new todo: " + newList +".");
		console.log("************");
}

function showTodo(){
	console.log("Show todo list:");
	todoList.forEach(function(todo, i){
			i = i + 1;
			console.log(i + ":" + todo);
		});
	console.log("************");

}

function deleteTodo(){
	var index = prompt("Which Todo do you want to delete?");
	console.log("Delete No." + index + " todo " + todoList[index - 1]+".");
	todoList.splice(index - 1, 1);
}

// My previous version
// var list = [];
// var addList;
// var result;

// function todoList(){
// 	result = prompt("what do you want to do?");
	
// 	if(result === "new"){
// 	addList = prompt("Add A Todo");
// 	list.push(addList);
// 	}
// else if(result === "list"){
// 	alert(list);
// }
// else if(result === "quit"){
// 	window.opener=null;     
// 	//window.opener=top;     
// 	window.open("","_self");     
// 	window.close();     
// }
// else {
// 	alert("Please input new, list, or quit.")
// }
// }

// var func = setInterval(todoList,1000);



// use while loop
// var input = prompt("?")
// while (input != "quit") {
// 	alert("good");
// 	input = prompt("?");
// }

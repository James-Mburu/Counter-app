// final code
let countEl = document.getElementById("count-el");
// console.log(countEl);
let saveEl = document.getElementById("save-el");
let decreEl = document.getElementById("decrement-btn"); // gets the html element via id

let count = 0;

function increment() {
	count += 1;
	//count = count + 1;
	//countEl.innerText = count;
	countEl.textContent = count;
}
// increment();

function decrement() {
	count -= 1;
	countEl.textContent = count; //renders or displays the count value in the html
}

function save() {
	let savedCount = count + " - ";
	//saveEl.innerText += savedCount;
	saveEl.textContent += savedCount; // += helps to display the current count without erasing the previous count
	countEl.textContent = 0; // reseting the count
	count = 0;
	// console.log(count);
}
// save();
function reset() {
	count = "Previous Enteries: "; // updates or reassigns the value of the count.
	saveEl.textContent = count;
	count = 0;
	countEl.textContent = 0;
}

const add = document.getElementById("upper");
const lower = document.getElementById("lower");
const count = document.getElementById("count");

var initial = 0;

add.addEventListener("click", function increment(){
	initial = initial + 1;
	count.value = initial;
	count.innerHTML = initial;
});

lower.addEventListener("click", function decrement(){
	initial = initial - 1;
	count.value = initial;
	count.innerHTML = initial;
});
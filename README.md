Q1. How to select element in DOM?

In DOM we can select element many way. Like:

getElementById("idname") → this one for id.

getElementsByClassName("classname") → for class, return like array.

querySelector("selector") → only first one element.

querySelectorAll("selector") → all element it find, like list.

Example:

document.getElementById("head");
document.querySelector(".para");

Q2. How to create element and add inside page?

We can make element by document.createElement(). Then we can put text or html and after that use appendChild() or append() to add in page.

Example:

let div = document.createElement("div");
div.innerText = "hello world";
document.body.appendChild(div);

Q3. What is Event Bubbling?

Event bubbling means event go up like bubble in water. If I click on one small button inside div, first button event happen, then div event also fire, then body event also.

Q4. What is Event Delegation?

Event delegation is like we no need put listener in every child. We just put one listener in parent and check target. This is good when many child dynamic created.

Example:

document.getElementById("list").addEventListener("click", function(e){
console.log(e.target.innerText);
});

Q5. Diff between preventDefault and stopPropagation

preventDefault() → stop default work. Example, stop link go to another page.

stopPropagation() → stop the event go to parent (stop bubbling).

link.addEventListener("click", function(e){
e.preventDefault(); // stop link jump
});

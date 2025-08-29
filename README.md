**1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?**

These are all ways to select HTML elements, but they work a little differently.

getElementById: You use this to find one single element that has a specific id. Since IDs are unique, it only ever gives you back one thing, or null if it cant find it.

getElementsByClassName: This one finds all the elements that have a certain class name. It returns them in a list called an HTMLCollection. This list is live, so it updates if you add more elements with that class.

querySelector: This is a very powerful selecter. You can use any CSS selector (like #my-id, .my-class, div p) to find an element. It only returns the very first element it finds that matches.

querySelectorAll: This is like querySelector, but instead of just the first match, it gives you a list (a NodeList) of all the elements that match the selector.

---

**2. How do you create and insert a new element into the DOM?**

Creating and adding a new element is a two-step process.

First, you have to create the element in JavaScript's memory. You do this with document.createElement(). For example, const myDiv = document.createElement('div');. At this point, the div is created but its not on the page yet.

Second, you have to choose an existing element on the page to be the parent. Then you can add your new element inside it using appendChild(). Like this: parentContainer.appendChild(myDiv);. Now the new div will show up on the page.

---

**3. What is Event Bubbling and how does it work?**

Event Bubbling is how events travel through the DOM. When you do something like click on a button, the click event starts on that button. Then, the same event "bubbles up" to the button's parent element, and then to that parent's parent, and so on, all the way up to the document.

It's like a bubble rising up through water. The event happens on the deepest element first and then triggers on all the parent elements in order.

---

**4. What is Event Delegation in JavaScript? Why is it useful?**

Event Delegation is a technique that uses event bubbling. Instead of adding a seperate event listener to every single button on a page, you can just add one event listener to their parent container.

When you click a button, the event bubbles up to the parent. In the parent's event listener, you can use event.target to figure out exactly which button was clicked.

This is very usefull for two main reasons:

Performance: One event listener is much more efficient than having hundreds of them, especially in a big list.

Dynamic Elements: If you add new buttons to the page with JavaScript, you don't have to add new listeners to them. The single listener on the parent will automatically work for the new buttons too.

---

**5. What is the difference between preventDefault() and stopPropagation() methods?**

Both are used on events, but they do very different things.

preventDefault(): This stops the browser's default behavior for an element. For example, the default behavior of clicking a link (<a> tag) is to go to a new URL. If you call event.preventDefault() in its click listener, the link won't go anywhere. Another example is stopping a form from submitting when you click the submit button.

stopPropagation(): This method stops event bubbling. When you call this on an event, the event will happen on that element, but it will not bubble up to any of it's parent elements. It stops the event's journey up the DOM tree.

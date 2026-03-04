1. Where does React put all of the elements I create in JSX when I 
   call `root.render()`?
all the elements I render get put inside the div with the id of "root"
(or whatever other element I might select  when calling createRoot)


2. What would show up in my console if I were to run this line of code:
```
console.log(<h1>Hello world!</h1>)
```
Ab Object! Unlike creating an HTML element in vanilla DOM JS, what
gests created from jsx we have in our React code is plain JS object
the react will use to fill in the view

3. What's wrong with this code:
```
root.render(
    <h1>Hi there</h1>
    <p>This is my website!</p>
)
```
You can only render 1 parent element at a time that parent element can have
as many children elements as you want

4. What does it mean for something to be "declarative" instead of "imperative"?
*Imperative* means we need to give specific step-by-step instructions on
acomplish a task.

*Declarative* means we can write our code to simple "describe" *what* should show up
on the page and allow the rool (React, e.g.) to handle the details on *how* to
put those things on the page.

5. What does it mean for something to be "composable"?
we have small pieces that we can put together to make someting
larger or greater than the individual pieces themselves.
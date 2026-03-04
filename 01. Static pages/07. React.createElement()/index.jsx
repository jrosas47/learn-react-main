import { createRoot } from "react-dom/client"
import { createElement } from "react"

const root = createRoot(document.getElementById("root"))
/*root.render(
    <h1>Hello from React!</h1>
)*/
const element = createElement("h1", null, "Hello from React!")

console.log(element)

root.render(
    element
)
import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

/**
 * Challenge (part 1):
 * Create a custom "Page" component
 * 
 * It should return an ordered list with the reasons why you're
 * excited to be learning React :)
 * 
 * Render the Page component.
 */

function Page() {
  return (
    <ol>
      <li>React is a powerful library for building user interfaces.</li>
      <li>It allows for the creation of reusable components.</li>
      <li>React has a large community and ecosystem.</li>
    </ol>
  )
}

function Main() {
    return (
       <div>
            <h1>My Excitement for React</h1>
          <Page />
       </div>
    )
}

root.render(
    <div>
        <Main />
    </div>
)

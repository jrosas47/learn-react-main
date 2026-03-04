import { createRoot } from "react-dom/client"
import { Fragment } from "react"
const root = createRoot(document.getElementById("root"))

/** Mini Challenge:
 * 
 * Move the `header` element from the Page component into 
 * its own component called "Header"
 * 
 * Then render an instance of the Header component inside
 * the Page component where the `header` used to be.
 */

function Header() {
    return (
        <header>
            <img src="react-logo.png" width="40px" alt="React logo" />
        </header>
    )
}

function Footer() {
    return (
        <footer>
            <small>© 2024 Ziroll development. All rights reserved.</small>
        </footer>
    )
}

function Main() {
    return (
        <main>
            <h1>Reason I am excited to learn React</h1>
            <ol>
                <li>React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎</li>
                <li>I am more likely to get a job as a front end developer if I know React</li>
            </ol>
        </main>
    )
}

function Header2() {
    return (
        <header2>
            <img src="react-logo.png" width="40px" alt="React logo" />
        </header2>
    )
}

function Page() {
    return (
        <>
            <Fragment>
                <Header />
                <Main />
                <Footer />
            </Fragment>
            <>
                <Header2 />
                <main2>
                    <h1>Reason I am excited to learn React</h1>
                    <ol>
                        <li>React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎</li>
                        <li>I am more likely to get a job as a front end developer if I know React</li>
                    </ol>
                </main2>
                <footer2>
                    <small>© 2024 Ziroll development. All rights reserved.</small>
                </footer2>
            </>
        </>
    )
}

root.render(
    <Page />
)

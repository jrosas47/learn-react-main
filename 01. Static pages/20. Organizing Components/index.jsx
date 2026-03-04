import { createRoot } from "react-dom/client"
import HeaderRef from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"
const root = createRoot(document.getElementById("root"))

/**
 * Challenge: move the MainContent and Footer components to their own
 * separate files.
 */

function Page() {
    return (
        <>
            <HeaderRef />
            <MainContent />
            <Footer />
        </>
    )
}

root.render(
    <Page />
)

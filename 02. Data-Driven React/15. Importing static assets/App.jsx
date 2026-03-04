import Contact from "./Contact"
import whiskersonImg from "./images/mr-whiskerson.png"
import fluffykinsImg from "./images/fluffykins.png"
import felixImg from "./images/felix.png"
import pumpkinImg from "./images/pumpkin.png"

function App() {
    return (
        <div className="contacts">
            <Contact
                img={whiskersonImg}
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact
                img={fluffykinsImg}
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <Contact
                img={felixImg}
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Contact
                img={pumpkinImg}
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />
        </div>
    )
}

export default App
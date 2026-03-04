/**
 * Challenge: fix the bug, now that we've 
 * destructured the props object
 */
export default function Contact({img, name, phone, email}) {
    return (
        <article className="contact-card">
            <img
                src={img}
                alt={`Photo of ${name}`}
            />
            <h3>{name}</h3>
            <div className="info-group">
                <img
                    src="./images/phone-icon.png"
                    alt="phone icon"
                />
                <p>{phone}</p>
            </div>
            <div className="info-group">
                <img
                    src="./images/mail-icon.png"
                    alt="mail icon"
                />
                <p>{email}</p>
            </div>
        </article>
    )
}

const person = {
    img: "./images/mr-whiskerson.png",
    name: "Mr. Whiskerson",
    phone: "(800) 555-1234",
    email: "mr.whiskaz@catnap.meow"
}

// Destructuring example
// const img = person.img
// const name = person.name
// console.log(img)
// console.log(name)
// Destructuring in one line
// const {img, name} = person
// console.log(img)
// console.log(name)
const {img, name} = person
console.log(img)
// Destructuring with alias
// const {img: image, name} = person
// console.log(image)
const {img : image, name: nameAlias} = person
console.log(image)
console.log(nameAlias)
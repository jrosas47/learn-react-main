import React from "react"
import avatar from "./images/user.png"
import starFilled from "./images/star-filled.png"
import starEmpty from "./images/star-empty.png"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
    /**
     * Challenge: Fill in the values in the markup
     * using the properties of our state object above
     * (Ignore `isFavorite` for now)
     */
    // Function to toggle the favorite state

    function toggleFavorite() {
        setContact(prevContact => ({
            ...prevContact,
            isFavorite: !prevContact.isFavorite
        }))
        console.log(contact.isFavorite)
        // Update the button's aria-pressed attribute based on isFavorite
        const button = document.querySelector('.favorite-button');
        button.setAttribute('aria-pressed', !contact.isFavorite);
        // Update the star icon based on isFavorite
        const starIcon = document.querySelector('.favorite');
        starIcon.src = contact.isFavorite ? starEmpty : starFilled;
        starIcon.alt = contact.isFavorite ? "empty star icon" : "filled star icon";
        // Note: This is not the recommended way to handle state updates in React,
        // but it demonstrates how to manipulate the DOM directly.
        // In a real application, you would typically use state to control the UI.
        // The above code is for demonstration purposes only.
        // Instead, you would use the state to conditionally render the star icon.
        // For example:
        // <img src={contact.isFavorite ? starFilled : starEmpty} alt={contact.isFavorite ? "filled star icon" : "empty star icon"} className="favorite" />
    }

    return (
        <main>
            <article className="card">
                <img
                    src={avatar}
                    className="avatar"
                    alt="User profile picture of John Doe"
                />
                <div className="info">
                    <button
                        onClick={toggleFavorite}
                        aria-pressed={contact.isFavorite}
                        aria-label={contact.isFavorite ? "Remove from favorites" : "Add to favorites"}
                        className="favorite-button"
                    >
                        <img
                            src={contact.isFavorite ? starFilled : starEmpty}
                            alt={contact.isFavorite ? "filled star icon" : "empty star icon"}
                            className="favorite"
                        />
                    </button>
                    <h2 className="name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="contact">{contact.email}</p>
                </div>

            </article>
        </main>
    )
}

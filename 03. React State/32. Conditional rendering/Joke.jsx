import React from "react"

export default function Joke(props) {
    /**
     * Challenge:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     */
    const [isShown, setIsShown] = React.useState(false)
    console.log(isShown)

    function toggleShown() {
        setIsShown(prev => !prev)
    }

    
    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            <p>{isShown ? props.punchline : "Click to show punchline"}</p>
            <button onClick={toggleShown}>
                {isShown ? "Hide Punchline" : "Show Punchline"}
            </button>
            <hr />
        </div>
    )
}
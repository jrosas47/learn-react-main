export default function Joke({ setup, punchline }) {
    return (
        <div className="joke">
            {setup && <h3>Setup: {setup}</h3>}
            <p>Punchline: {punchline}</p>
        </div>
    )
}
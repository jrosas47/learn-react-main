export default function Joke(props) {
    return (
        <>
            {props.setup && <p className="setup">Setup: {props.setup}</p>}
            <p className="punchline">Punchline: {props.punchline} {props.upvotes} {props.downvotes} {props.comments} {props.isPun ? "Yes" : "No"}</p>
            <hr />
        </>
    )
}
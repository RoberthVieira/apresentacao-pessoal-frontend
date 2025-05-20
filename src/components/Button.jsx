export default function Button ({className, onClick, textBtn}) {
    return(
        <button className={className} onClick={onClick}>
            {textBtn}
        </button>
    )
}
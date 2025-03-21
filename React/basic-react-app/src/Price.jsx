export default function Price({oldPrice, newPrice}) {
    let oldStyles = {
        textDecoration: "line-through"
    }
    let newStyles = {
        fontWeight: "bold"
    }
    let styles = {
        backgroundColor: "#e0c637",
        height: "40px",
        borderBottomRightRadius: "14px",
        borderBottomLeftRadius: "14px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
    return (
        <div style={styles}>
            <span style={oldStyles}>{oldPrice}</span>
            &nbsp;&nbsp;
            <span style={newStyles}>{newPrice}</span>
        </div>
    )
}
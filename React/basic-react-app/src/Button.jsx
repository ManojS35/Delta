function doSomething() {
    console.log('Button was clicked');
}
function handleDoubleClick() {
    console.log('double click')
}
export default function Button() {
    return (
        <div>
            <button onClick={doSomething}>Click me!</button>
            <button onDoubleClick={handleDoubleClick}>Double</button>
        </div>
    )
}
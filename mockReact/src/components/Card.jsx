export const handleClick = () => alert("Clicked!");

const Card = ({name, role, onClick}) =>{
    return(
        <div>
            <h2>Hello {name}</h2>
            <p>{role}</p>
            <button onClick={onClick}>click me</button>
        </div>    
    )
}

export default Card;

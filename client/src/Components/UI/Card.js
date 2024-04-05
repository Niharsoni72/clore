import '../../CSS/UI/Card.css';
const Card =(props)=>{
    let mixClasses='Card '+props.className;
    return(
        <div className={mixClasses}>
            {props.children}
        </div>
    );
}

export default Card;
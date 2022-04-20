const Card = ({children}) => {
return (
    <div style={{border:'solid 2px blue'}}>
            <div>Empieza una card</div>
            {children}
            <div>Termina una card</div>
    </div>  
)

}

export default Card
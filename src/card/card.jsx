
const Card = ({Titulo, paragrafo, classname}) => {
    return(
        <>
        <h1 className={classname}>{Titulo}</h1>
        <p className={classname}>{paragrafo}</p>

        </>
    )

}
export default Card;

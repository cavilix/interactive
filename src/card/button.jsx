import "./button.css"
const Button = ({botao, classname}) => {
   return(
    <>
    <button className={classname} >{botao}</button>
    </>
   )
}
export default Button;
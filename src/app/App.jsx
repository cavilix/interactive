import React from "react";
import Card from "../card/card";
import Button from "../card/button";
import "./App.css"

const App = () => {
    return(
        <>
        <div className="Card">
        <div className="text"> 
        <Card
        Titulo={'How did me do?'}
        paragrafo={'Please let us know how we did with your support request. All feedback is appreciated to help us imporve our offering!'}
    
        />
        </div>   
        <div className="BtnNumeros">
        <Button
        botao={1}
        classname={"numeros"}
        />
        <Button 
        botao={2}
        classname={"numeros"}
        />
        <Button 
        botao={3}
        classname={"numeros"}
        />
        <Button 
        botao={4}
        classname={"numeros"}
        />
        <Button 
        botao={5}
        classname={"numeros"}
        />
        </div>

        <div className="submit">
        <Button 
        botao={"Submit"}
        classname="submitC"
        />
        </div>

        </div>
        </>
    )
}
export default App;
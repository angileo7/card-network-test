import React, {useState} from "react";
import Feedback from "../Feedback/feedback";
import creditCard from "../../Services/detector";

const Detector = () => {
    const [firm, setFirm] = useState("");

    const retrieveFirm = (event) => {
        let card = creditCard(event.target.value);
console.log(card)
        if (card !== undefined) {
            setFirm(card)
        } else {
            setFirm("")
        }
    }

    return (
        <>
            <input id={"card"} onChange={retrieveFirm} placeholder={"Credit card number"}/>
            <div>{firm && <Feedback input={firm}/>}</div>
        </>

    )
}

export default Detector;

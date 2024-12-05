import React from "react";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";

const Stars = ({rating}) => {

    function calculateStar(n){
        if( n === 0 || n.toString().length === 1) return 0
        let [whole, r] = n.toString().split(".")
        return r[0] < 3 ? +whole : (r[0] < 8 ? +whole + .5 : +whole + 1)
    }

    function setStar(n){
        let number = calculateStar(n)
        let fill = Math.floor(number)
        let half = number - fill ? 1 : 0
        let outline = 5 - Math.ceil(number)
        return [
            ...Array(fill).fill().map((_, inx) => <FaStar key={`fill-${inx}`}/>), 
            ...Array(half).fill().map((_, inx) => <FaStarHalf key={`half-${inx}`}/>),
            ...Array(outline).fill().map((_, inx) => <FaRegStar key={`outline-${inx}`}/>)
        ]
    }

    return setStar(rating)
}

export default Stars
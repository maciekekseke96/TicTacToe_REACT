import React from "react"
import "./Animated.scss"


const Animated = (props) => {

    let styles = {};
    if(props.keys[0]==="left"){
        styles = {
            width: '150px',
            height: '150px',
            position: 'absolute',
            left: props.horizontal,
            top: props.vertical,
            backgroundColor : 'yellow',
            animation:'animated 1.5s infinite',
            fontFamily: "'Pangolin', cursive",
            fontSize: '110px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: '0'
        }
    } else if (props.keys[0]==="right"){
        styles = {
            width: '150px',
            height: '150px',
            position: 'absolute',
            right: props.horizontal,
            top: props.vertical,
            backgroundColor : 'yellow',
            animation:'animated 1.5s infinite',
            fontFamily: "'Pangolin', cursive",
            fontSize: '110px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: '0'
        }
    }
    return (
    <div style = {styles} className={"animated"}>{props.sign}</div>
    )
}

export default Animated;
import React from 'react';
import styles from "../../styles/nav.module.css";

var today = new Date();
var monthNames = ["January" ,"February" , "March" , "April", "May", "June","July","August","September","October","November","December"]
var dd = today.getDate();
var mm = today.getMonth(); //January is 0!
var yyyy = today.getFullYear();

var hours = today.getHours();
var minutes = today.getMinutes();

var end = "am";

if(hours >= 11){
    end = "pm";
}
if(hours<10){
    var hours = '0' + hours;
}
if(minutes<10){
    minutes = '0' + minutes;
}

today = dd + ' ' + monthNames[mm] + ' ' + yyyy;
var time = hours + ':' + minutes + ' ' + end;


function DateTime(){
    
    return (
        <div>
        <p className={styles.navDate}>{today}</p>
        <p className={styles.navTime}>{time} </p>
    </div>
)
    
}

export default DateTime;




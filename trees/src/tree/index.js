import React, {useState, useEffect} from 'react';
import './index.css'
import axios from 'axios'
import data from './data.json'

export default function Tree() {
    function filteredArrByValue(val) {
        const filteredArr = data.mammals.filter(obj => {
            return obj.value == val
        })

        return filteredArr.length > 0 ? filteredArr[0] : ""
    }
    
    return (
            <div className="tree">
                <span>mammals<br/></span>
                <span style={{ marginLeft: `${filteredArrByValue("cheetah").spacing}rem`}}>{filteredArrByValue("cheetah").value}<br/></span>
                <span style={{ marginLeft: `${filteredArrByValue("bear").spacing}rem`}}>bear <br/></span>
                <span style={{ marginLeft: `${filteredArrByValue("lion").spacing}rem`}}>lion <br/></span>
                <span style={{ marginLeft: `${filteredArrByValue("dog").spacing}rem`}}>dog<br/></span>
                <span style={{ marginLeft: `${filteredArrByValue("elephant").spacing}rem`}}>elephant<br/></span>
                <span style={{ marginLeft: `${filteredArrByValue("ape").spacing}rem`}}>ape<br/></span>
            </div>
    )
}

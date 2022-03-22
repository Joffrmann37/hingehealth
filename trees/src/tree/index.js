import React, {useState, useEffect} from 'react';
import './index.css'
import axios from 'axios'

export default function Tree() {
    return (
            <div className="tree">
                <span>mammals<br/></span>
                <span className='fiveSpacer'>cheetah <br/></span>
                <span className='fiveSpacer'>bear <br/></span>
                <span className='tenSpacer'>lion <br/></span>
                <span className='tenSpacer'>dog<br/></span>
                <span className='fifteenSpacer'>elephant<br/></span>
                <span className='fiveSpacer'>ape<br/></span>
            </div>
    )
}

import React,{useState} from 'react';
import {Navigate} from "react-router-dom";

export default function Home() {
    const [sum,setSum] = useState(1)
    return (
        <div>
            <h2>我是Home的内容</h2>
        </div>
    );
}

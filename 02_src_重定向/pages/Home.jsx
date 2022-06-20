import React,{useState} from 'react';
import {Navigate} from "react-router-dom";

export default function Home() {
    const [sum,setSum] = useState(1)
    return (
        <div>
            <h2>我是Home的内容</h2>
            {sum === 2 ? <Navigate to="/about"/> :  <h4>当前sum的值是: {sum}</h4>}
            <button onClick={ () => setSum(sum+1) }>点我sum+1</button>
        </div>
    );
}

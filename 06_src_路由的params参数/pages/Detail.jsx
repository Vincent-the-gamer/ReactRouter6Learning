import React from 'react';
import {useParams} from "react-router-dom";

function Detail() {
    const {id,title,content} = useParams()
    return (
        <ul>
            <li>消息编号：{id}</li>
            <li>消息标题：{title}</li>
            <li>消息内容：{content}</li>
        </ul>
    );
}

export default Detail;
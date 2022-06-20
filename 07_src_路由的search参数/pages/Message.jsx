import React,{useState} from 'react';
import {Link,Outlet} from "react-router-dom";

function Message() {
    const [messages] = useState([
        {id: '001',title: '消息1',content: '雏鹤爱'},
        {id: '002',title: '消息2',content: '空银子'},
        {id: '003',title: '消息3',content: '九头龙八一'},
        {id: '004',title: '消息4',content: '啊这'},
    ])
    return (
        <div>
            <ul>
                {
                    messages.map((msg) => {
                        return (
                            // 路由链接
                            <li key={msg.id}>
                                <Link to={`detail?id=${msg.id}&title=${msg.title}&content=${msg.content}`}>{msg.title}</Link>&nbsp;&nbsp;
                            </li>
                        )
                    })
                }
            </ul>
            <hr/>
        {/*  指定路由组件的展示位置 */}
            <Outlet/>
        </div>
    );
}

export default Message;
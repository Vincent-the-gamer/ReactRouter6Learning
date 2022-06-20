import React,{useState} from 'react';
import {Link,Outlet,useNavigate} from "react-router-dom";

function Message() {
    const navigate = useNavigate()
    function showDetail(msg){
        navigate('detail',{
            replace: false,
            state: {
                id: msg.id,
                title: msg.title,
                content: msg.content
            }
        })
    }

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
                                <Link
                                    to="detail"
                                    state={
                                    {
                                        id: msg.id,
                                        title: msg.title,
                                        content: msg.content
                                    }
                                }>{msg.title}</Link>&nbsp;&nbsp;
                                <button onClick={() => showDetail(msg)}>查看详情</button>
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
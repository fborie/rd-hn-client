import React from 'react';
import Body from '../../Components/Body';
import NewsBodyList from './NewsBodyList';

const news = [
    {title:"holi",author:"fjborie",created_at:1535969954},
    {title:"chai",author:"fjborie",created_at:1535969954}
]

const NewsBody = (props) => {
    return (
        <div className="NewsBody">
            <Body>
                <NewsBodyList items={news}/>
            </Body>    
        </div>
    );
}

export default NewsBody;
import React from 'react';
import NewsListItem from './NewsListItem';
import Body from '../../Components/Body';
import ListView from '../../Components/ListView';

const NewsBody = (props) => {
    return (
        <div className="NewsBody">
            <Body>
                <ListView items={props.news} ItemType={NewsListItem}/>
            </Body>    
        </div>
    );
}

export default NewsBody;
import React from 'react';
import NewsListItem from './NewsListItem';
import Body from '../../Components/Body';
import ListView from '../../Components/ListView';

const NewsBody = (props) => {
    console.log(props);
    return (
        <div className="NewsBody">
            <Body>
                <ListView items={props.news} ItemType={NewsListItem} onDeleteItem={props.onDeleteStory}/>
            </Body>    
        </div>
    );
}

export default NewsBody;
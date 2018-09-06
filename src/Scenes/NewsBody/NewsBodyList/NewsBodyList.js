import React from 'react';
import List from '../../../Components/List';
import NewsListItem from './NewsListItem';

const NewsBodyList = (props) => {
    return(
        <div className="NewsBodyList">
            <List items={props.items} ItemType={NewsListItem}/>
        </div>
    )
}

export default NewsBodyList;
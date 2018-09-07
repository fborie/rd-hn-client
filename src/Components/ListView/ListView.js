import React from 'react';
import List from '@material-ui/core/List';

function renderListItems(items, ItemType){
    return items.map( (item,index) => {
        return (
            <li key={index}>
                <ItemType {...item} />
            </li>
        )
    })
}

const ListView = (props) =>{
    console.log(props);
    return(
        <div className="List">
            <List>
                {renderListItems(props.items,props.ItemType)}
            </List>
        </div>
    );
}

export default ListView;
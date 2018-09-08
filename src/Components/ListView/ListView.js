import React from 'react';
import List from '@material-ui/core/List';

function renderListItems(items, ItemType, onDeleteItem){
    if( items.length == 0 ){
        return(
            <div>
                <p>Loading ... </p>
            </div>
        )
    }
    return items.map( (item,index) => {
        return (
            <li key={item._id}>
                <ItemType {...item} onDeleteItem={onDeleteItem} />
            </li>
        )
    })
}

const ListView = (props) =>{
    return(
        <div className="List">
            <List>
                {renderListItems(props.items,props.ItemType, props.onDeleteItem)}
            </List>
        </div>
    );
}

export default ListView;
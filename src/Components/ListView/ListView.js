import React from 'react';
import List from '@material-ui/core/List';

function renderListItems(items, ItemType){
    console.log(items);
    if( items.length == 0 ){
        return(
            <div>
                <p>Cargando ... </p>
            </div>
        )
    }
    return items.map( (item,index) => {
        return (
            <li key={index}>
                <ItemType {...item} />
            </li>
        )
    })
}

const ListView = (props) =>{
    return(
        <div className="List">
            <List>
                {renderListItems(props.items,props.ItemType)}
            </List>
        </div>
    );
}

export default ListView;
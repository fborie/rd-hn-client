import React from 'react';

function renderListItems(items, ItemType){
    return items.map( item => {
        return (
            <li>
                <ItemType {...item.props} />
            </li>
        )
    })
}

const List = (props) =>{
    return(
        <div className="List">
            <ul>
                {renderListItems(props.items,props.ItemType)}
            </ul>
        </div>
    );
}

export default List;
import React from 'react';
import moment from 'moment';
import Grid from '@material-ui/core/Grid';
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

import './NewsListItem.css';

const openUrl = (url) => {
    window.open(url, "_blank");
}

const NewsListItem = (props) => {
    
    let { title, author, created_at } = props;
    if( !title ){
        title = 'title';
    }

    let dateToPublish = moment(created_at).calendar(null,{
        sameDay: 'HH:mm A',
        lastDay: '[Yesterday]',
        lastWeek: 'MMM DD',
        sameElse: 'MMM DD'
    });
    return(
        <div className="NewsListItem" onClick={() => openUrl(props.url)}>
             <Grid container spacing={8}>
                <Grid item xs={9}>
                    <div className="description">
                        <span className="title">{title}</span><span className="author">{`- ${author} -`}</span>
                    </div>
                </Grid>
                <Grid item xs={3}>

                    <Grid container spacing={8}>
                            <Grid item xs={6}>
                                <span className="time">{dateToPublish}</span>
                            </Grid> 
                            <Grid item xs={6}>
                            <Tooltip title="Delete" placement="right">
                                <IconButton onClick={(e) => props.onDeleteItem(e,props.story_id)} aria-label="Delete">
                                    <span className="trash"><DeleteOutlined /></span> 
                                </IconButton>
                            </Tooltip>
                            </Grid>
                    </Grid>
                </Grid>
             </Grid>
        </div>
    );  
}

export default NewsListItem;
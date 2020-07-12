import React, { Fragment } from 'react';
import Popup from 'reactjs-popup';
import Typography from '@material-ui/core/Typography';


export default function withDataPopup(
    trigger, title = null, content = null,
    onOpen = () => null, onClose = () => null) {


    return (
        <Popup
            trigger={trigger} // react component
            modal
            position='top left'
            onOpen={onOpen}
            onClose={onClose}
            closeOnDocumentClick
        >
            <Fragment>
                <Typography gutterBottom variant="h5" component="h2">
                    {title}
                </Typography>
                <div>
                    {content}
                </div>
            </Fragment>
        </Popup>
    )
}

import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DataList from "../DataList/DataList";
import {useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
    typography: {
        width : "550px",
        padding : '25px'
    },
}));

export default function Regbtn(props) {

    let canReg = false;

    let allDataInserted = useSelector(state => state.canRegister)

    let pageCount = useSelector(state => state.pagecount)

    if(allDataInserted){
        if (pageCount==5){
            canReg = true
        }
        else canReg = false
    }
    else canReg = false

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <Button className={'w-25'} style={{fontSize:18}} aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
                Proceed
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Typography className={classes.typography}>
                    <h2 className={'text-left text-dark'}>Information</h2>
                    <DataList></DataList>
                    {canReg? <Button className={'btn bg-success text-light btn-lg w-100 font-weight-bold'} onClick={props.clicked}>Register</Button> :null}
                </Typography>
            </Popover>
        </div>
    );
}
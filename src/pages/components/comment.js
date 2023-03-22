import * as React from 'react';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { useState } from 'react';
import "./css/comment.css"

export default function Comment() {
    const [owner, setOwner] = useState(false)
    return (
        <div>
            <div style={{textAlign: "left"}}>
                <div style={{height: "50px"}}>
                    <AccountCircleRoundedIcon style={{float: "left", margin: "0px 2px 0px 10px", width: "30px", height: "30px"}} />
                    <p style={{fontSize: "50%", color: "grey", margin: "0"}}>Display Name &nbsp;&nbsp;&nbsp;&nbsp; 08/12/2001</p>
                    <p style={{fontSize: "60%", width: "40%", lineHeight: "100%", float: "left"}}>Qui inserisci il contenuto del commento gia scritto dallutente</p>
                    <ThumbUpOffAltIcon style={{margin: "0 10px 20px 20%", width: "20px", height: "20px"}}/>
                    <ThumbDownOffAltIcon style={{margin: "0 0 20px 0", width: "20px", height: "20px"}}/>
                </div>
            </div>
        </div>
    );
}
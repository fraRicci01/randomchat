import './css/about.css';
import React from "react";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import CommentsDisabledRoundedIcon from '@mui/icons-material/CommentsDisabledRounded';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import CommentBox from './commentBox';
import { useState } from 'react';
import Comment from './comment';

const Post2= () => {
    const [comment, setComment] = useState(false)
    const onClickOn = () => {
        setComment(true)
    }
    const onClickOf = () => {
        setComment(false)
    }
    return (
        <div>
            <hr style={{height: "1.7px", color: "black", backgroundColor: "black"}}/>
            <div class="post" style={{height: "500px"}}>
                <div class="container text-center" style={{padding: "0"}}>
                <div class="row">
                    <div class="col">
                    <p class="h6">sdasdas kdnmask dmnaslkjd nalsdn lasndlajsn dlajdsnlaj sdnlajsnd adlja sndlja nsldjas la tua domanda con quelche vuoi scrivere</p>
                    </div>
                </div>
                <hr style={{marginBottom: "0px"}}/>
                <div class="row">
                    <div class="col scrollable" style={{paddingTop: "10px"}}>
                        <Comment /><Comment /><Comment />
                    </div>
                </div>
                {comment && <CommentBox />}
                <hr style={{marginTop: "0"}}/>
                <div class="row" style={{marginTop: "0"}}>
                    <div class="col">
                    <p style={{color: "grey", float: "left"}}>32112 voti</p>
                    <div class="row" style={{marginTop: "0", width: "100%"}}>
                        <div class="col">
                        <ThumbUpOffAltIcon style={{float: "left"}}/><p style={{marginRight: "20px",width: "20px", float: "left"}}>23</p>
                        <ThumbDownOffAltIcon style={{float: "left"}}/>
                        {!comment && <button onClick={onClickOn} class="comment-button" style={{float: "right", borderWidth: "0px", backgroundColor: "transparent"}}>
                            <CommentRoundedIcon/>
                        </button>}
                        {comment && <button onClick={onClickOf} class="comment-button" style={{float: "right", borderWidth: "0px", backgroundColor: "transparent"}}>
                            <CommentsDisabledRoundedIcon/>
                        </button>}  

                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
  }

  export default Post2;
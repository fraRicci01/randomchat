import './css/about.css';
import React from "react";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import CommentsDisabledRoundedIcon from '@mui/icons-material/CommentsDisabledRounded';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import CommentBox from './commentBox';
import Comment from './comment';
import { useState } from 'react';

export default function Post() {
    const [comment, setComment] = useState(false)
    const [rowStyle, setRowStyle] = useState({})
    const onClickOn = () => {
        setComment(true)
        setRowStyle({
            height: "700px"
        })
    }
    const onClickOf = () => {
        setComment(false)
        setRowStyle({
            height: "500px"
        })
    }
    return (
    <div>
        <hr style={{height: "1.7px", color: "black", backgroundColor: "black"}}/>
        <div class="post" style={{rowStyle}}>
            <div class="container text-center" style={{padding: "0"}}>
            <div class="row">
                <div class="col">
                <p class="h6">sdasdas kdnmask dmnaslkjd nalsdn lasndlajsn dlajdsnlaj sdnlajsnd adlja sndlja nsldjas la tua domanda con quelche vuoi scrivere</p>
                <hr style={{marginBottom: "2px"}}/>
                </div>
            </div>
            <div class="row" style={{marginTop: "0"}}>
                <div class="col">
                <button class="postButton"> Qui ci va il tuo contenuto</button>
                </div>
            </div>
            <div class="row" style={{marginTop: "0"}}>
                <div class="col">
                <button class="postButton"> Qui ci va il tuo contenuto</button>
                </div>
            </div>
            <div class="row" style={{marginTop: "0"}}>
                <div class="col">
                <button class="postButton"> Qui ci va il tuo contenuto</button>
                </div>
            </div>
            <div class="row" style={{marginTop: "0"}}>
                <div class="col">
                <button class="postButton"> Qui ci va il tuo contenuto</button>
                </div>
            </div>
            <div class="row" style={{marginTop: "0"}}>
                {comment && 
                <div style={{padding: "0"}}>
                    <hr style={{marginBottom: "0"}}/>
                    <div class="col scrollable" style={{paddingTop: "10px"}}>
                        <Comment /><Comment /><Comment /><Comment /><Comment /><Comment /><Comment /><Comment /><Comment /><Comment /><Comment /><Comment /><Comment /><Comment /><Comment /><Comment /><Comment /><Comment /><Comment /><Comment /><Comment /><Comment /><Comment /><Comment /><Comment /><Comment /><Comment />
                    </div>
                    <CommentBox />
                </div>
                }
                <hr style={{marginTop: "2px"}}/>
                <div class="col">
                    <p style={{color: "grey", float: "left", fontSize: "70%", marginBottom: "5px"}}>32112 voti</p>
                    <div class="row" style={{marginTop: "0", width: "100%"}}>
                        <div class="col">
                        <ThumbUpOffAltIcon style={{float: "left"}}/><p style={{marginRight: "15px", marginTop: "3px", width: "20px", float: "left", fontSize: "80%"}}>23</p>
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
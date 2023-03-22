import * as React from 'react';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

export default function CommentBox() {
  return (
    <div class="comment-container">
      <div class="comment-box">
          <hr style={{margin: "0px"}} />
          <div style={{marginTop: "10px", marginBottom: "10px"}}>
              <AccountCircleRoundedIcon style={{float: 'left', margin: "-5px 10px 0px 10px", width: "40px", height: "40px"}}/>
              <form style={{height: "30px"}}>
                  <textarea placeholder="Leave a comment here" style={{width: "80%", height: "30px", borderWidth: "0px", backgroundColor: "transparent"}}/>
              </form>
          </div>
      </div>
  </div>
  );
}
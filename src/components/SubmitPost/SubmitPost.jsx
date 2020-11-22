import React from 'react';
import classes from './SubmitPost.module.css';
import emoji from '../../assets/emoji-icon.png';
import photoAndVideo from '../../assets/photo-video-post.png';
import people from '../../assets/friends-post-icon.png';
import checkIn from '../../assets/checkin-icon.png';

const SubmitPost = (props) => {
  return (
    <div className={classes.block}>
      <div className={classes.actionsBox}>
        <div className={classes.actions}>
          <div className={classes.item}>Publick post</div>
          <div className={classes.item}>Now</div>
          <div className={classes.item}>Topic</div>
        </div>
        <img src={emoji} className={classes.emoji} alt='icon'></img>
      </div>
      <div className={classes.postBox}>
        <img src={props.profile.photo} className={classes.userPhoto} alt='icon'></img>
        <textarea placeholder='Write something...'></textarea>
      </div>
      <div className={classes.mediaBox}>
        <div className={classes.media}>
          <div className={classes.item}>
            <img src={photoAndVideo} className={classes.icon} alt='icon'></img>
            <div>Photo/Video</div>
          </div>
          <div className={classes.item}>
            <img src={people} className={classes.icon} alt='icon'></img>
            <div>People</div>
          </div>
          <div className={classes.item}>
            <img src={checkIn} className={classes.icon} alt='icon'></img>
            <div>Check in</div>
          </div>
        </div>
        <div className={classes.submit}>Share</div>
      </div>
    </div>
  )
}

export default SubmitPost;
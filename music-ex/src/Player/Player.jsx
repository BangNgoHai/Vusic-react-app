import React from 'react';
import './player.scss';
import {BsFillPlayCircleFill, BsFillPauseCircleFill, BsFillSkipStartCircleFill, BsSkipEndCircleFill, BsFillSkipEndCircleFill} from 'react-icons/bs';

const Player = ({audioEl, isplaying, setisplaying}) => {
    const PlayPause = () => {
        console.log("clicked");
        setisplaying(!isplaying);
    };
  return (
    <div className='player_container'>
        <div className="title">
            <p>first song</p>
        </div>
        <div className="navigation">
            <div className="navigation_wrapper">
                <div className="seek_bar"></div>
            </div>
        </div>
        <div className="controls">
            <BsFillSkipStartCircleFill className='btn_action'/>
            <BsFillPlayCircleFill className='btn_action pp' onClick={PlayPause}/>
            <BsFillSkipEndCircleFill className='btn_action'/>
        </div>
    </div>
  )
}

export default Player

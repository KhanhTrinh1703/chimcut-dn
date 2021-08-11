import React, { useEffect, useState } from "react";
import "../styles/PersonComponent.css";
import PropTypes from "prop-types";
import moment from "moment";

PersonComponent.propTypes = {
  name: PropTypes.string,
  time: PropTypes.string,
  avatar: PropTypes.string,
}

PersonComponent.defaultProps = {
  name: "Minh Nhật",
  time: "2022/08/10 00:00:00",
  avatar: null,
}

function PersonComponent(props) {
  
  const {name, time, avatar } = props;

  const [dayLeft, setDayLeft] = useState(null);
  const [hourLeft, setHourLeft] = useState(null);
  const [minuteLeft, setMinuteLeft] = useState(null);
  const [secondLeft, setSecondLeft] = useState(null);

  useEffect(() => {
    var timer = setInterval(() => countDown(), 1000);
    return function clearTimer() {
      clearInterval(timer);
    }
  })

  function countDown(){

    const MILI_PER_DAY = 86400000;
    const MILI_PER_HOUR = 3600000;
    const MILI_PER_MINUTE = 60000;
    const MILI_PER_SECOND = 1000;
    //
    let target = moment(time);
    let currentTime = moment();
    let remaining = target.diff(currentTime);
    //
    let dayRemaining = Math.floor(remaining / MILI_PER_DAY);
    let hourRemaining = Math.floor( (remaining - (dayRemaining * MILI_PER_DAY)) / MILI_PER_HOUR);
    let minuteRemaining = Math.floor( ((remaining - (dayRemaining * MILI_PER_DAY) - (hourRemaining * MILI_PER_HOUR)) / MILI_PER_MINUTE));
    let secondRemaining = Math.floor( ((remaining - (dayRemaining * MILI_PER_DAY) - (hourRemaining * MILI_PER_HOUR) - (minuteRemaining * MILI_PER_MINUTE)) / MILI_PER_SECOND));
    //
    setDayLeft(dayRemaining);
    setHourLeft(formatDisplayNumber(hourRemaining));
    setMinuteLeft(formatDisplayNumber(minuteRemaining));
    setSecondLeft(formatDisplayNumber(secondRemaining));
  }

  function formatDisplayNumber(str){
    if(!str) return "";
    let newStr = `0${str}`.slice(-2);
    return newStr;
  }
  
  return (
    <>
      <div className="person">
        <div>
          <div className="avatar">
            <img  src={avatar} alt={"avatar"}/>
          </div>
          <div className="name">
            <p>{name}</p>
          </div>
          <div className="time-group">
            <p>Còn</p>
            <p>{`${dayLeft} ngày ${hourLeft} giờ ${minuteLeft} phút ${secondLeft} giây`}</p>
            <p>chim cút</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PersonComponent;
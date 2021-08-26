import React, { Fragment } from 'react'
import Countdown from 'react-countdown'
import {
  AiFillGithub,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillPhone,
  AiFillMail,
} from 'react-icons/ai'
import { FaAddressCard } from 'react-icons/fa'
import "./CardInfoComponent.scss"

const CardInfoComponent = (props: any) => {
  const { name, time, avatar } = props


  const _renderTimeCard = (time: string, type: string) => {
    return(
      <div className="time-card-wrapper flex flex-col block items-center">
        <div className="time-card flex justify-center items-center">
          {time.toString().length > 2 ? time : `0${time}`.slice(-2)}
        </div>
        <p className="time-card-type mt-1">{type}</p>
      </div>
    )
  }

  const _rendererCountdown = (props: any): React.ReactNode => {
    const { days, hours, minutes, seconds } = props;
    return (
      <div className="flex flex-row mt-2">
        <div className="mr-2">
          {_renderTimeCard(days, 'Days')}
        </div>
        <div className="mr-2">
          {_renderTimeCard(hours, 'Hours')}
        </div>
        <div className="mr-2">
          {_renderTimeCard(minutes, 'Minutes')}
        </div>
        <div className="mr-2">
          {_renderTimeCard(seconds, 'Seconds')}
        </div>
      </div>
    )
  }

  return (
  <Fragment>
    <div
      className="
        flex 
        md:w-2/5 
        w-full 
        m-2 
        rounded-2xl 
        shadow-xl
        card-info"
    >
      <div className="flex flex-col p-4 rounded-l-2xl flex-1 items-center card-left-side">
        <div className="flex bg-teal p-1 rounded-full">
          <img src={avatar} alt={avatar} className="w-32 h-32 rounded-full" />
        </div>
        <p className="uppercase font-semibold text-3xl mt-3">{name}</p>
        <div className="flex mt-auto text-3xl">
          <ul className="mr-1.5">
            <li>
              <a href="/">
                <AiFillGithub className="hover:opacity-50" />
              </a>
            </li>
          </ul>
          <ul className="mr-1.5">
            <li>
              <a href="/">
                <AiFillFacebook className="hover:opacity-50" />
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="/">
                <AiFillLinkedin className="hover:opacity-50" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col flex-2 p-4">
        <div className="flex flex-col count-down mb-2">
          <p className="font-bold"> Comeback in: </p>
          <Countdown date={time} renderer={_rendererCountdown} />
        </div>

        <div className="mt-4">
          <div className="flex items-center mb-2">
            <AiFillPhone className="flex mr-2" />
            <p className="flex">0813987652</p>
          </div>
          <div className="flex items-center mb-2">
            <AiFillMail className="flex mr-2" />
            <p className="flex">minhtoandut96@gmail.com</p>
          </div>
          <div className="flex items-center mb-2">
            <FaAddressCard className="flex mr-2" />
            <p className="flex">88/51 Nguyen Duc Trung St.</p>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
  )
}

export default CardInfoComponent

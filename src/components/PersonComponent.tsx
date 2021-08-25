import React, { Fragment } from 'react'
import Countdown from 'react-countdown'
import { Person } from '../types/person'
import {
  AiFillGithub,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillPhone,
  AiFillMail,
} from 'react-icons/ai'
import { FaAddressCard } from 'react-icons/fa'

function PersonComponent(props: any) {
  const { name, time, avatar } = props

  return (
    <Fragment>
      <div
        className="
          flex 
          md:w-2/5 
          w-full 
          m-2 
          bg-gray-light 
          rounded-2xl 
          shadow-xl"
      >
        <div className="flex flex-col bg-teal p-4 rounded-l-2xl flex-1 items-center">
          <div className="flex bg-teal p-1 rounded-full">
            <img src={avatar} alt={avatar} className="w-32 h-32 rounded-full" />
          </div>
          <p className="flex text-white">Online</p>
          <div className="flex flex-col mt-auto">
            <p>Comeback in: </p>
            <Countdown date={time} />
          </div>
        </div>
        <div className="flex flex-col flex-2 p-4">
          <p className="uppercase font-semibold text-3xl">{name}</p>
          <p className="flex">Junior</p>
          <div className="flex items-center">
            <AiFillPhone className="flex mr-2" />
            <p className="flex">0813987652</p>
          </div>
          <div className="flex items-center">
            <AiFillMail className="flex mr-2" />
            <p className="flex">minhtoandut96@gmail.com</p>
          </div>
          <div className="flex items-center">
            <FaAddressCard className="flex mr-2" />
            <p className="flex">88/51 Nguyen Duc Trung St.</p>
          </div>
          <div className="flex justify-end mt-auto text-5xl">
            <ul>
              <li>
                <a href="#">
                  <AiFillGithub className="hover:opacity-50" />
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">
                  <AiFillFacebook className="hover:opacity-50" />
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">
                  <AiFillLinkedin className="hover:opacity-50" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default PersonComponent

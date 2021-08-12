import React, { Fragment } from 'react'
import '../styles/PersonComponent.css'
import PropTypes from 'prop-types'
import Countdown from 'react-countdown'

PersonComponent.propTypes = {
  name: PropTypes.string,
  time: PropTypes.string,
  avatar: PropTypes.string,
}

PersonComponent.defaultProps = {
  name: 'Minh Nhật',
  time: '2022/08/10 00:00:00',
  avatar: null,
}

function PersonComponent(props) {
  const { name, time, avatar } = props

  return (
    <Fragment>
      <div className="flex w-2/5 m-2 bg-gray-light rounded-2xl shadow-xl">
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
          <p className="flex">Xao lonist</p>
          <p className="flex">Phone number: </p>
          <p className="flex">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac
            habitasse platea dictumst quisque sagittis.
          </p>
          <div className="flex mt-auto">
            <ul>
              <li>
                <a href="#">FB</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">FB</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">FB</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default PersonComponent

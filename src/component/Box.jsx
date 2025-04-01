import React from 'react'

function Box({text, channel, desc}) {
  return (
    <div>
    <h1>{text}</h1>
    <h2>{ channel}</h2>
    <h3>{desc}</h3>
    </div>
  )
}

export default Box
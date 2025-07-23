import React from 'react'

 const HighlightText = ({text}) => {
  return (
    <span className=" bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text   text-transparent ">
      {text}
    </span>
  )
}
export default HighlightText
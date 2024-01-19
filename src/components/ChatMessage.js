import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className="flex items-center shadow-sm p-2">
        <img className="h-8 " 
        alt="user"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGuafeZPHbbEvob9OolK9lNmUtF7B80asQjt2oMTB6lA&s">

        </img>

        <span className="font-bold px-">{name} </span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage
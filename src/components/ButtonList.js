import React from 'react'
import Button from './Button'


const list=["All","Live","Gaming","Songs","Live","Education","cricket","news","Cooking"," valentines","Bhajan","Podcast"];
const ButtonList = () => {
  return (
    <div className="flex">
      {/* <Button name="All"/>
      <Button name="Gaming "/>
      <Button name="Songs"/>
      <Button name="Live"/>
      <Button name="Soccer"/>
      <Button name="Cricket "/>
      <Button name="News "/>
      <Button name="Cooking"/>
      <Button name="Valentine"/> */}

      {
        list.map((s,index)=>(<Button  key={index} name={s}/>))

      }

      

    </div>
  )
}

export default ButtonList
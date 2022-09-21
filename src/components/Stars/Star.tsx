import React from 'react'
import {FaStar} from 'react-icons/fa'

type StarProps = {
    selected: boolean
    onSelect?: () => void
}

export const Star: React.FC<StarProps> = ({selected = false, onSelect}) => {
  return (
    <FaStar color={selected ? "#FCE632": "grey"} onClick={onSelect} /> 
  )
}

export default Star

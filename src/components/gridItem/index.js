import React from 'react'
import * as C from './styles'

import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash
} from 'react-icons/fa'

const GridItem = ({ item, onDelete }) => {
  return (
    <C.Tr>
      <C.Td>{item.desc}</C.Td>
      <C.Td>{item.amount}</C.Td>
      <C.Td alignCenter>
        {item.expense ? (
          <FaRegArrowAltCircleDown color="red"></FaRegArrowAltCircleDown>
        ) : (
          <FaRegArrowAltCircleUp color="green"></FaRegArrowAltCircleUp>
        )}
      </C.Td>
      <C.Td alignCenter>
        <FaTrash onClick={() => onDelete(item.id)}></FaTrash>
      </C.Td>
    </C.Tr>
  )
}

export default GridItem

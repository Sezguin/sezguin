'use client'

import { useState } from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
`

export default function LikeButton () {
  const [likes, setLikes] = useState(0)

  function handleClick () {
    setLikes(likes + 1)
  }

  return <StyledButton onClick={handleClick}>Like ({likes})</StyledButton>
}

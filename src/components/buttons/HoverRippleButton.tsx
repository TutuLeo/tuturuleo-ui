import React, { FC, useCallback, useState } from 'react'
import styled from '@emotion/styled'

type Position = { x: number; y: number }

const StyledButton = styled.button(({ pos }: { pos: Position }) => ({
  position: 'relative',
  display: 'inline-flex',
  overflow: 'hidden',
  padding: '10px 30px',
  background: '#363636',
  color: '#fff',
  textDecoration: 'none',
  letterSpacing: '1px',
  span: {
    zIndex: 1,
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: pos.y,
    left: pos.x,
    width: 0,
    height: 0,
    transform: 'translate(-50%, -50%)',
    background: '#2196f3',
    borderRadius: '50%',
    transition: 'all .5s',
  },
  '&:hover::before': {
    width: '400px',
    height: '400px',
  },
}))

export const HoverRippleButton: FC = () => {
  const [ripplePos, setRipplePos] = useState<Position>({ x: 0, y: 0 })

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      const x = e.pageX - e.currentTarget.offsetLeft
      const y = e.pageY - e.currentTarget.offsetTop

      setRipplePos({ x, y })
    },
    []
  )

  return (
    <StyledButton
      onMouseEnter={handleMouseMove}
      onMouseLeave={handleMouseMove}
      pos={ripplePos}
    >
      <span>Нажми на меня</span>
    </StyledButton>
  )
}

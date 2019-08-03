import React from 'react'
import styled from '@emotion/styled'

const Blockmatic = styled.div`
  color: #353535;
  display: flex;
  self-align: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  align-items: center;
  font-size: 10em;
  letter-spacing: .06em;
`

export default function App () : JSX.Element {
  return (
    <Blockmatic>blockmatic</Blockmatic>
  );
}

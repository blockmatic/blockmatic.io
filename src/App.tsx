import React from 'react'
import styled from '@emotion/styled'
import { FaGithubAlt, FaMediumM, FaTwitter, FaEnvelope } from 'react-icons/fa'

const LandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
`

const Blockmatic = styled.div`
  color: #353535;
  font-family: 'Dhurjati', Sans-Serif;
  font-size: 10em;
  letter-spacing: .06em;
`

const Slogan = styled.div`
  color: #rgb(106, 106, 106);;
  font-size: 2em;
  padding-bottom: 4em;
`

const Social = styled.div`
  font-size: calc(1vw + 2vh);
  position: fixed;
  display: flex;
  direction: row;
  justify-content: center;
  bottom: 0;
`
const SocialLink = styled.a`
  color: #353535;
  padding: 1em;
`


export default function App () : JSX.Element {
  return (
    <LandingWrapper>
      <Blockmatic>blockmatic</Blockmatic>
      <Slogan>build on EOSIO</Slogan>
      <Social>
        <SocialLink href='https://github.com/blockmatic' target='_blank'><FaGithubAlt /></SocialLink>
        <SocialLink href='https://medium.com/blockmatic' target='_blank'><FaMediumM /></SocialLink>
        <SocialLink href='https://twitter.com/blockmatic_io' target='_blank'><FaTwitter /></SocialLink>
        <SocialLink href='mailto://hello@blockmatic.io' target='_blank'><FaEnvelope /></SocialLink>
      </Social>
    </LandingWrapper> 
  );
}

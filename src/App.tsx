import React, { useState, useEffect} from 'react'
import styled from '@emotion/styled'
import { FaGithubAlt, FaMediumM, FaTwitter, FaEnvelope } from 'react-icons/fa'
import posed  from 'react-pose'
import SplitText from 'react-pose-text'

const LandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
`
const Main = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
`

const Blockmatic = styled(posed.div({
  hidden: { opacity: 0},
  visible: { opacity: 1},
}))`
  color: #353535;
  font-family: 'Dhurjati', Sans-Serif;
  font-size: 10em;
  letter-spacing: .06em;
  transition: opacity 2s ease-in;
`

const Slogan = styled.div`
  color: #rgb(106, 106, 106);;
  font-size: calc(1vw + 2.5vh);;
`

const Social = styled(posed.div({
  hidden: { opacity: 0, y: -500},
  visible: { opacity: 1, y:0, delay: 5000 }
}))`
  opacity: 0;
  font-size: calc(1vw + 2.5vh);
  display: flex;
  direction: row;
  justify-content: center;
  transition: opacity .3s ease-in;
`
const SocialLink = styled.a`
  color: #353535;
  padding: 1em;
`

const charPoses = {
  enter: { 
    opacity: 1,
    delay: ({ charIndex }:{charIndex:number}) => charIndex * 45
  },
  exit: { 
    opacity: 0
  }
};

export default function App () : JSX.Element {
  const [visible, setVisible] = useState<boolean>(false)
  const [sloganVisible, setSloganVisible] = useState<boolean>(false)
  
  useEffect(() => setVisible(true),[setVisible])
  useEffect(() => {
    const sloganTimeout = setTimeout(() => setSloganVisible(true), 3000)
    return () => clearTimeout(sloganTimeout)
  },[setSloganVisible])

  return (
    <LandingWrapper>
      <Main>
        <Blockmatic pose={visible? 'visible': 'hidden'}>blockmatic</Blockmatic>
        <Slogan>
          <SplitText charPoses={charPoses} pose={sloganVisible ? 'enter' : 'exit'}>
            build on EOSIO
          </SplitText>
        </Slogan>
      </Main>
      <Social pose={visible? 'visible': 'hidden'}>
        <SocialLink href='https://github.com/blockmatic' target='_blank'><FaGithubAlt /></SocialLink>
        <SocialLink href='https://medium.com/blockmatic' target='_blank'><FaMediumM /></SocialLink>
        <SocialLink href='https://twitter.com/blockmatic_io' target='_blank'><FaTwitter /></SocialLink>
        <SocialLink href='mailto:hello@blockmatic.io' target='_blank'><FaEnvelope /></SocialLink>
      </Social>
    </LandingWrapper> 
  );
}

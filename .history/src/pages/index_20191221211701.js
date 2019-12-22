import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { FaGithubAlt, FaBook, FaTwitter, FaEnvelope } from 'react-icons/fa'
import posed from 'react-pose'
import SplitText from 'react-pose-text'
import { Link  } from "gatsby"

const LandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-size: calc(.4vh + 1.1vw);
`
const Main = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
`

const Blockmatic = styled(
  posed.div({
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 3000 }, delay: 1000 },
  }),
)`
  color: #353535;
  font-family: 'Dhurjati', Sans-Serif;
  font-size: 10em;
  letter-spacing: 0.06em;
  opacity: 0;
  min-height: 0.6em;
`

const Slogan = styled.div`
  color: rgb(106, 106, 106);
  font-size: calc(1vw + 2.5vh);
`

const Social = styled(
  posed.div({
    hidden: { y: 100 },
    visible: { y: 0, delay: 4000 },
  }),
)`
  font-size: calc(1vw + 2.5vh);
  display: flex;
  direction: row;
  justify-content: center;
  transition: all 1s ease-in;
`
const SocialLink = styled.a`
  color: #353535;
  padding: 1em;
`

const charPoses = {
  visible: {
    opacity: 1,
    delay: ({ charIndex }) => charIndex * 57,
  },
  hidden: {
    opacity: 0,
  },
}

export default function App() {
  const [sloganVisible, setSloganVisible] = useState(false)

  useEffect(() => {
    const sloganTimeout = setTimeout(() => setSloganVisible(true), 3000)
    return () => clearTimeout(sloganTimeout)
  }, [])

  return (
    <LandingWrapper>
      <Main>
        <Blockmatic initialPose="hidden" pose="visible">
          blockmatic
        </Blockmatic>
        <Slogan>
          <SplitText
            charPoses={charPoses}
            pose={sloganVisible ? 'visible' : 'hidden'}
          >
            blockchain & crypto assets
          </SplitText>
        </Slogan>
      </Main>
      <Social initialPose="hidden" pose="visible">
       
        <Link style={{color: '#353535', padding: '1em'}} to='/blog'>
          <FaBook />
        </Link>
        <SocialLink href="mailto:hello@blockmatic.io" target="_blank">
          <FaEnvelope />
        </SocialLink>
        <SocialLink href="https://twitter.com/blockmatic_io" target="_blank">
          <FaTwitter />
        </SocialLink>
        <SocialLink href="https://github.com/blockmatic" target="_blank">
          <FaGithubAlt />
        </SocialLink>
      </Social>
    </LandingWrapper>
  )
}

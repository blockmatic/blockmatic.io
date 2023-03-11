import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { FaGithubAlt, FaTwitter, FaEnvelope } from 'react-icons/fa'
import posed from 'react-pose'
import SplitText from 'react-pose-text'

const LandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
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
    visible: { opacity: 1, transition: { duration: 3000 }, delay: 500 },
  }),
)`
  color: white;
  font-family: 'Dhurjati', Sans-Serif;
  font-size: 10em;
  letter-spacing: 0.06em;
  opacity: 0;
`

const Slogan = styled.div`
  color: white;
  font-size: calc(1vw + 2.5vh);
`

const Social = styled(
  posed.div({
    hidden: { y: 200 },
    visible: { y: -20, delay: 5000 },
  }),
)`
  font-size: calc(1vw + 2.5vh);
  display: flex;
  direction: row;
  justify-content: center;
  transition: all 1s ease-in;
`
const SocialLink = styled.a`
  color: white;
  padding: 1em;
`

const charPoses = {
  visible: {
    opacity: 1,
    delay: ({ charIndex }: { charIndex: number }) => charIndex * 57,
  },
  hidden: {
    opacity: 0,
  },
}

export default function App(): JSX.Element {
  const [sloganVisible, setSloganVisible] = useState<boolean>(false)

  useEffect(() => {
    const sloganTimeout = setTimeout(() => setSloganVisible(true), 3500)
    return () => clearTimeout(sloganTimeout)
  }, [])

  return (
    <>
      <video src='/video/bg.mp4' autoPlay loop playsInline muted />

      <LandingWrapper>
        <Main>
          <Blockmatic initialPose='hidden' pose='visible'>
            blockmatic
          </Blockmatic>
          <Slogan>
            <SplitText
              charPoses={charPoses}
              pose={sloganVisible ? 'visible' : 'hidden'}
            >
              blockchain and digital assets
            </SplitText>
          </Slogan>
        </Main>
        <Social initialPose='hidden' pose='visible'>
          <SocialLink href='mailto:hello@blockmatic.io' target='_blank'>
            <FaEnvelope />
          </SocialLink>
          <SocialLink href='https://twitter.com/blockmatic_io' target='_blank'>
            <FaTwitter />
          </SocialLink>
          <SocialLink href='https://github.com/blockmatic' target='_blank'>
            <FaGithubAlt />
          </SocialLink>
        </Social>
      </LandingWrapper>
    </>
  )
}

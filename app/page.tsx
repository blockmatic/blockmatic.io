import {AnimatedText} from '@/components/routes/home/animated-text';
import { Suspense } from 'react';


export default function App() {
  return (
    <>
      <video src='/video/bg.mp4' autoPlay loop playsInline muted className="object-cover w-screen h-screen fixed top-0 left-0 z-0" />

      <Suspense>
        <AnimatedText />
      </Suspense>
    </>
  )
}

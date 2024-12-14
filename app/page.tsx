import {AnimatedText} from '@/components/routes/home/animated-text';
import { Suspense } from 'react';


export default function App() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center relative overflow-hidden">
    <div className="absolute -top-[118px] inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:4.5rem_2rem] -z-10 [transform:perspective(1000px)_rotateX(-63deg)] h-[80%] pointer-events-none" />
    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent pointer-events-none -z-10" />
      <Suspense>
        <AnimatedText />
      </Suspense>
      <div className="absolute -bottom-[280px] inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:4.5rem_2rem] -z-10 [transform:perspective(560px)_rotateX(63deg)] pointer-events-none" />
      <div className="absolute w-full bottom-[100px] h-1/2  bg-gradient-to-b from-background to-transparent pointer-events-none -z-10" />
    </div>
    
  )
}

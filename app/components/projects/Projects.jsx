import { works } from '../../const/works';
import Double from './Double';

export default function Home() {
  return (
    <main className="mt-[5vh] text-white pb-[10vh] m-0">
      <h1 className="text-3xl text-center font-bold">Projects</h1>
      <h1 className="p-5 text-[5vw] max-w-[80%] font-normal">A showcase for our projects, demonstrating our commitment
to innovate and client success</h1>
      <div>
        <Double works={[works[0], works[1]]}/>
        <Double works={[works[2], works[3]]} reversed={true}/>
      </div>
    </main>
  )
}
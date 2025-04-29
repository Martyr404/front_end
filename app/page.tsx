
import DevelopmentTimeline from "@components/basic-ui/development"
import DevelopmentJourney from "@components/basic-ui/development"
import {SceneryHeader} from "@components/basic-ui/scenery-header"
import { Title } from "@components/basic-ui/smart-font"

export default function Home(){
  return(
    <div>
<div className="relative bg-[url('/background.jpg')] z-0 bg-no-repeat bg-cover min-h-screen">
      <div className="absolute z-0 inset-0 bg-black/50"></div> 
      <SceneryHeader/>
  <div className="pointer-events-none relative w-2/3 z-10 flex items-center min-h-screen">
    <Title/>
  </div>
</div>
<div className="flex flex-col items-center justify-center">
  <DevelopmentTimeline/>

</div>


    </div>

  )
}
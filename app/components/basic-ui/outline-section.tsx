import { Section } from "@components/basic-ui/section";
import Image from 'next/image'
export const OutlineSection = () => {
    return (
        <div className="w-full h-full pt-18 lg:p-24">
            <Section className="text-center max-w-2xl mx-auto">
            <div className="flex flex-col mt-12 md:mt-24 items-center max-w-2xl mx-auto p-6 md:p-8 bg-white rounded-xl md:rounded-2xl shadow-sm">

  <Image 
    className="rounded-full border-4 border-sky-100 w-24 h-24 md:w-32 md:h-32 object-cover mb-4 md:mb-6"
    width={200}
    height={200} 
    alt="Lab Avatar"
    src="/avatar.jpg"
  />
  

  <div className="text-center w-full">
    <h1 className="text-2xl md:text-3xl font-bold text-gray-900">IIC</h1>
    <p className="text-lg md:text-xl font-medium text-sky-600 mt-1 md:mt-2">
      Intelligent Imaging Computing Lab
    </p>
  </div>


  <div className="w-full text-left space-y-4 md:space-y-5 mt-4 md:mt-6">
    <p className="leading-relaxed text-gray-600 text-sm md:text-base">
      A laboratory focused on the development of low-level vision and medical image processing technologies. 
      Our interdisciplinary team bridges <span className="font-medium text-gray-700">computer vision</span>, 
      <span className="font-medium text-gray-700"> deep learning</span>, and 
      <span className="font-medium text-gray-700"> clinical diagnostics</span> to revolutionize imaging technologies.
    </p>
    
    <div className="leading-relaxed text-gray-600 text-sm md:text-base">
      <span className="block font-semibold text-gray-700 mb-1 md:mb-2">Research Achievements:</span>
      Published <span className="font-medium text-sky-600">50+ papers</span> in top-tier venues including:
      <ul className="list-disc list-inside mt-1 md:mt-2 space-y-1 pl-4 md:pl-5 text-xs md:text-sm">
        <li>Journals: ACM Computing Survey, IEEE TIP/TNNLS/TMM/TCSVT/TMI</li>
        <li>Conferences: CVPR, ECCV, ICCV, AAAI, IJCAI, MICCAI</li>
      </ul>
    </div>
  </div>
</div>
            </Section>
        </div>
    )
}
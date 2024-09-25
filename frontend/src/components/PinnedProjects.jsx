import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Center } from "@chakra-ui/react"
import * as Unicons from "@iconscout/react-unicons"
import Image from "next/image"
const PinnedProjects = () => {
    return (
        <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem border={"none"}>
                <AccordionButton className="border w-full" border={"none"}>
                    <AccordionIcon color={"black"} border={"none"} />
                    <div className="flex space-x-6 items-center ">
                        <h1 className="text-black text-sm font-bold uppercase">Pinned Projects (3/3)</h1>
                        {/* <p className="text-[7px] text-white p-2 bg-gray-400 rounded-full">COMING SOON</p> */}
                    </div>
                </AccordionButton>
                <AccordionPanel pb={4} color={""}>
                    <div className="flex justify-between items-center mb-3 hover:text-black cursor-pointer">
                        <div className="flex space-x-2 items-center">
                            <Image src={require("../../public/assets/star.svg")} width={20} height={20} />
                            <h1 className="text-gray-600 text-sm hover:text-black">Project Name 1</h1>
                        </div>
                        <Unicons.UilAngleDown size={20} color={"gray"} className="hover:text-white" />
                    </div>
                    <div className="flex justify-between items-center mb-3 hover:text-black cursor-pointer">
                        <div className="flex space-x-2 items-center">
                            <Image src={require("../../public/assets/star.svg")} width={20} height={20} />
                            <h1 className="text-gray-600 text-sm hover:text-black">Project Name 2</h1>
                        </div>
                        <Unicons.UilAngleDown size={20} color={"gray"} className="hover:text-white" />
                    </div>
                    <div className="flex justify-between items-center mb-3 hover:text-black cursor-pointer">
                        <div className="flex space-x-2 items-center">
                            <Image src={require("../../public/assets/star.svg")} width={20} height={20} />
                            <h1 className="text-gray-600 text-sm hover:text-black">Project Name 3</h1>
                        </div>
                        <Unicons.UilAngleDown size={20} color={"gray"} className="hover:text-white" />
                    </div>
                    {/* <Center color={"blue"} className="cursor-pointer">See All</Center> */}
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}
export default PinnedProjects;
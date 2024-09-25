import { Box, Flex } from "@chakra-ui/react";
import * as Unicons from "@iconscout/react-unicons"
import StepperComp from "./StepperComp";
import Image from "next/image";
export default function ProjectCard(params) {
    return (
        <Flex className="border relative w-[33%] lg:w-[32.5%] xxs:w-[100%] md:w-[48%] p-2 mb-2">
            <div className="absolute right-0 p-1 cursor-pointer">
                <Unicons.UilEllipsisV size={20} color={"black"} />
            </div>
            <Flex flexDir={"column"} w={"100%"}>
                <h1 className="text-lg font-bold w-[280px] ">Make an E-commerce Website for a brand Store</h1>
                <p className="pt-1 pb-2 text-gray-500">Web</p>
                <div className="mt-2 relative">
                    <div className="w-[80%]">
                        <StepperComp />
                    </div>
                    <div className="absolute -right-1 top-[-3px] ">
                        <h1 className="text-gray-500">3/4 Done</h1>
                    </div>
                </div>
                <div className="mt-6  w-[100%] flex flex-wrap justify-start">
                    <TagBadge title={"Next milestone: Dec 5th"} />
                    <TagBadge title={"Ongoing"} />
                    <TagBadge title={"Tough"} />
                    <TagBadge title={"Profitable"} />
                </div>
                <div className="flex justify-between items-center cursor-pointer mt-4 ml-2 font-bold">
                    <h1>Follow Up with manager</h1>
                    <div className="bg-[#5876B7] p-[12px] rounded-lg">
                        <Image src={require("../../public/assets/Vector.svg")} width={20} height={20} />
                    </div>
                </div>
            </Flex>
        </Flex>
    )
}
function TagBadge({ title }) {
    return (
        <div className="bg-[#DBE2F0] p-2 ml-2 flex-grow-0 rounded-md mb-2">{title}</div>
    )
}
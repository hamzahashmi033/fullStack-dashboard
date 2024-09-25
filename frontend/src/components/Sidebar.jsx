import { Flex, Button, MenuButton, Menu } from '@chakra-ui/react'
import * as Unicons from "@iconscout/react-unicons"
import Image from 'next/image'
import TabsComp from './Tabs'
import { ChevronDownIcon } from '@chakra-ui/icons'
import BasicMenu from './Menu'
import PinnedProjects from './PinnedProjects'
const Sidebar = () => {
    return (
        <Flex direction={"column"} className='p-2' bg={"#F4F6FA"}  >
            <div className='mt-2 mb-2'>
                <Image src={require("/public/assets/logo.svg")} width={100} height={100} />
            </div>
            <div className='p-2 mt-2 w-full flex space-x-2 justify-center items-center'>
                <Image src={require("/public/assets/avatar.svg")} width={100} height={100} className='cover' />
                <div>
                    <h1 className="text-black font-bold text-base xs:text-[14px] lg:text-md">
                        Hamza Hashmi
                    </h1>
                    <p className='text-black text-sm xs:text-[14px]  lg:text-md"'>hashmihamza846@gmail.com</p>
                </div>
                <div className=''>
                    {/* <Unicons.UilAngleDown size={20} color={"black"} /> */}
                    <Menu>
                        <MenuButton as={Button} size={10} className='border'>
                            <ChevronDownIcon />
                        </MenuButton>
                        <BasicMenu />
                    </Menu>
                </div>
            </div>
            <div className='mt-8 pb-80'>
                <TabsComp />
                <div className="border border-gray-300 mt-4 w-full"></div>
                <div className='mt-4 '>
                    <PinnedProjects />
                </div>
            </div>
            <div className='fixed bottom-0 w-[20%] xxxs:w-[100%] xxs:w-[85%] xs:w-[75%] md:w-[41.6%] lg:w-[20%] xxxs:-ml-8 lg:-ml-2 h-[130px] pt-1 pl-3 bg-[#F4F6FA] border border-t-1 border-t-gray-300'>
                <div className='flex cursor-pointer items-center space-x-4 mb-4 p-3 w-[280px] rounded-md hover:bg-white'>
                    <Unicons.UilUser size={20} color={"gray"} />
                    <h1 className='text-gray-600 text-lg text-center'>Account Setting</h1>
                </div>
                <div className='flex cursor-pointer items-center space-x-4 mb-4 p-3 w-[280px] rounded-md hover:bg-white'>
                    <Unicons.UilSignout size={20} color={"gray"} />
                    <h1 className='text-gray-600 text-lg text-center'>Logout</h1>
                </div>
            </div>
        </Flex>
    )
}
export default Sidebar
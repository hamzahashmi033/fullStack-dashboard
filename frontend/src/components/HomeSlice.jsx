'use client'
import { useDisclosure, Box, Center, Flex, Text, Button, MenuButton, Menu, MenuItem, MenuList } from '@chakra-ui/react'
import { useBreakpointValue } from '@chakra-ui/media-query'
import DrawerComp from './Drawer'
import * as Unicons from "@iconscout/react-unicons"
import Image from 'next/image'
import TabsComp from './Tabs'
import { ChevronDownIcon, PlusSquareIcon } from '@chakra-ui/icons'
import BasicMenu from './Menu'
import PinnedProjects from './PinnedProjects'
import Sidebar from './Sidebar'
import ContentComp from './ContentComp'
export default function HomeSlice() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const isMobile = useBreakpointValue({ base: true, lg: false })
    return (
        <>
            <Flex
                color='white'
                direction={{ base: 'column', lg: 'row' }}
            >
                {!isMobile ? (
                    <Flex w={{ base: '100%', lg: '25%' }}>
                        <Sidebar />
                    </Flex>
                ) : (
                    <>
                        <DrawerComp isOpen={isOpen} onClose={onClose} />

                    </>
                )}
                <Flex h='100vh' w="100%" bg='white'>
                    <div className='p-2 absolute' onClick={onOpen}>
                        {isMobile && <Unicons.UilAngleRight size={25} color="black" />}
                    </div>
                    <div className='p-2 absolute right-0 md:hidden'>
                        {isMobile && <Button className="p-2" size={'sm'} leftIcon={<PlusSquareIcon />} bg={'#5876B7'} color={"white"} variant='solid'>
                            Create a Project
                        </Button>}
                    </div>
                    <Flex w={"100%"}>
                        <ContentComp />
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}
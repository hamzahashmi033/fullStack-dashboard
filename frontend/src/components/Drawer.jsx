'use client'
import { useDisclosure, Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerHeader, DrawerCloseButton, Button, Flex, MenuButton, Menu } from '@chakra-ui/react'
import Image from 'next/image'
import * as Unicons from "@iconscout/react-unicons"
import TabsComp from './Tabs'
import BasicMenu from './Menu'
import { ChevronDownIcon } from '@chakra-ui/icons'
import Sidebar from './Sidebar'
const DrawerComp = ({ isOpen, onClose }) => {

    return (
        <>
            {/* Button to open the drawer */}


            {/* Drawer component */}
            <Drawer
                isOpen={isOpen}
                placement="left" // Drawer slides in from the left
                onClose={onClose}

            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton zIndex={100}/>
                    <DrawerBody bg={"#F4F6FA"}>
                        <Flex direction={"column"} className='w-[100%] ' >
                            <Sidebar />
                        </Flex>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}
export default DrawerComp
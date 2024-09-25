import { EmailIcon, PlusSquareIcon } from "@chakra-ui/icons";
import { Button, Flex, Stack, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

export default function MainTabs(params) {
    return (
        <Tabs className="ml-4  h-[100vh] mr-4 w-full p-2">
            <Flex className="justify-between  w-[100%]">
                <TabList color={"black"}>
                    <Tab>Completed</Tab>
                    <Tab>Ongoing</Tab>
                    <Tab>Draft</Tab>
                    <Tab>Cancelled</Tab>
                </TabList>
                <div className="xxxs:hidden md:block">
                    <Button className="" leftIcon={<PlusSquareIcon />} bg={'#5876B7'} color={"white"} variant='solid'>
                        Create a Project
                    </Button>
                </div>
            </Flex>

            <TabPanels>
                <TabPanel color={"black"}>
                    <Flex className="justify-around flex-wrap">
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                    </Flex>
                </TabPanel>
                <TabPanel color={"black"}>
                    <p>two!</p>
                </TabPanel>
                <TabPanel color={"black"}>
                    <p>three!</p>
                </TabPanel>
                <TabPanel color={"black"}>
                    <p>four!</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}
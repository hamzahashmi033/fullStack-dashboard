import { inter, roboto_mono } from '@/app/fonts/fonts';
import { Flex, Heading, Spacer } from '@chakra-ui/react'
import ProjectBadges from './ProjectBadges';
import { projects } from '@/utils/data';
import MainTabs from './MainTabs';
const countProjectStatus = (projects) => {
    return projects.reduce((acc, project) => {
        // Initialize the status count if it doesn't exist
        if (!acc[project.status]) {
            acc[project.status] = 0; // Start counting for new status
        }
        // Increment the count for the current status
        acc[project.status]++;
        return acc; // Return the accumulator for the next iteration
    }, {}); // Start with an empty object
};
const ContentComp = () => {
    const projectStatusCount = countProjectStatus(projects)
    console.log(projectStatusCount);
    return (
        <Flex flexDir={"column"} className=' ' bg={"white"} w={"100%"} >
            <Flex flexDir={"column"}>
                <h1 className={`font-fira mt-12 ml-3 text-black text-4xl font-medium `} >Welcome Back, Hamza!</h1>
                <p className='text-gray-500 ml-4 text-md'>You have accomplished a lot today. Let us handle the rest.</p>
            </Flex>
            <Flex className='mt-4  xxs:justify-around lg:justify-start ml-4 lg:space-x-2 flex-wrap'>
                <ProjectBadges source={require("/public/assets/folder1.svg")} title={"Completed"} count={projectStatusCount.Completed} />
                <ProjectBadges source={require("/public/assets/folder2.svg")} title={"Ongoing"} count={projectStatusCount.Ongoing} />
                <ProjectBadges source={require("/public/assets/folder3.svg")} title={"Draft"} count={projectStatusCount.Draft} />
                <ProjectBadges source={require("/public/assets/folder4.svg")} title={"Cancelled"} count={projectStatusCount.Cancelled} />
            </Flex>
            <Flex className='mt-8'>
                <MainTabs />
            </Flex>
        </Flex>
    )
}
export default ContentComp;
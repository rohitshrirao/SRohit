import Layout from "../shared/layout"

const Resume = () =>{
    return (
        <Layout>
            <div className="flex items-center gap-5">
               <h1 className="text-[40px] text-[#000000] font-bold">Resume</h1>
               <hr className="w-[25%] border border-[#1b74e4] h-[4px] bg-[#1b74e4] rounded" />
            </div>
            <div className="py-10">
                <div className="flex items-center gap-3">
                    <div className="text-[40px]">
                      <i className="fa fa-graduation-cap text-[#1b74e4]"></i>
                    </div>
                    <h2 className="text-[25px] font-semibold">Technical Skills</h2>
                </div>
                <div className="flex flex-row gap-10 py-5">
                    <div className="basis-6/12 bg-[rgb(243,246,246)] p-3 rounded-md">
                        <h2 className="text-orange-500 font-semibold text-[20px]">Frontend And Ui</h2>
                        <ul className="list-disc px-5 py-2 ">
                            <li className="mb-2">HTML & CSS</li>
                            <li className="mb-2">Tailwind, Bootstrap & Ant Design</li>
                            <li className="mb-2">Javascript</li>
                        </ul>
                    </div> 
                    <div className="basis-6/12 bg-[rgb(243,246,246)] p-3 rounded-md">
                        <h2 className="text-orange-500 font-semibold text-[20px]">Javascript Framework And Library</h2>
                        <ul className="list-disc px-5 py-2 ">
                            <li className="mb-2">React JS & Next JS</li>
                            <li className="mb-2">Ant Design</li>
                            <li className="mb-2">JQuery</li>
                        </ul>
                    </div> 
                </div>
                <div className="flex flex-row gap-10">
                    <div className="basis-6/12 bg-[rgb(243,246,246)] p-3 rounded-md">
                        <h2 className="text-orange-500 font-semibold text-[20px]">Backend and Database</h2>
                        <ul className="list-disc px-5 py-2 ">
                            <li className="mb-2">Node JS</li>
                            <li className="mb-2">Express JS</li>
                            <li className="mb-2">MongoDB</li>
                        </ul>
                    </div> 
                    <div className="basis-6/12 bg-[rgb(243,246,246)] p-3 rounded-md">
                        <h2 className="text-orange-500 font-semibold text-[20px]">Devops And Project Management Tools</h2>
                        <ul className="list-disc px-5 py-2 ">
                            <li className="mb-2">Github & Git</li>
                            <li className="mb-2">Jira</li>
                            <li className="mb-2">AWSCloud</li>
                        </ul>
                    </div> 
                </div>
            </div>
            <div className="">
                <div className="flex items-center gap-3">
                    <div className="text-[40px]">
                      <i className="fa 	fas fa-address-card text-[#1b74e4]"></i>
                    </div>
                    <h2 className="text-[25px] font-semibold">Experience</h2>
                </div>
                <div className="flex flex-row gap-10 py-5">
                    <div className="basis-6/12 bg-[rgb(243,246,246)] p-3 rounded-md">
                        <ul className="py-2 ">
                            <li className="mb-1 font-semibold ">April 2021 to Oct 2021</li>
                            <li className="mb-1">OrangeInterior - Techsunset</li>
                            <li className="mb-1">OrangeInterior website provides online interior design services.</li>
                        </ul>  
                    </div> 
                    <div className="basis-6/12 bg-[rgb(243,246,246)] p-3 rounded-md">
                        <ul className="py-2 ">
                            <li className="mb-1 font-semibold">Nov 2021 to May 2022</li>
                            <li className="mb-1">LarioInteriors - Techsunset</li>
                            <li className="mb-1">LarioInteriors website provides online interior design services.</li>
                        </ul>    
                    </div> 
                </div>
                <div className="flex flex-row gap-10">
                    <div className="basis-6/12 bg-[rgb(243,246,246)] p-3 rounded-md">
                        <ul className="py-2 ">
                            <li className="mb-1 font-semibold">June 2022 to Oct 2022</li>
                            <li className="mb-1">Savaari - Techsunset</li>
                            <li className="mb-1"> Savaari is an Indian-based company that provides online cab booking services.</li>
                        </ul>    
                    </div> 
                    <div className="basis-6/12 bg-[rgb(243,246,246)] p-3 rounded-md">
                        <ul className="py-2 ">
                        <li className="mb-1 font-semibold">Nov 2022 to April 2023</li>
                            <li className="mb-1">NickysCafe - Techsunset</li>
                            <li className="mb-1">NickysCafe website provides online cake booking services.</li>
                        </ul> 
                    </div> 
                </div>
                <div className="flex flex-row gap-10 py-5">
                    <div className="basis-6/12 bg-[rgb(243,246,246)] p-3 rounded-md">
                        <ul className="py-2 ">
                        <li className="mb-1 font-semibold">May 2023 to Sep 2023</li>
                            <li className="mb-1">LocalRamu - Techsunset</li>
                            <li className="mb-1">LocalRamu website provides online all home services like Electronics & Appliances Repair, Cleaning Services, Car / Bike Repair & Services etc.</li>
                        </ul>  
                    </div> 
                    <div className="basis-6/12 bg-[rgb(243,246,246)] p-3 rounded-md">
                        <ul className="py-2 ">
                            <li className="mb-1 font-semibold">Oct 2023 to March 2024</li>
                            <li className="mb-1">CakePlaza - Techsunset</li>
                            <li className="mb-1">CakePlaza website provides online cake booking services.</li>
                        </ul>    
                    </div> 
                </div>
            </div>
            <div className="py-10">
                <div className="flex items-center gap-3">
                    <div className="text-[40px]">
                      <i className="fa fa-graduation-cap text-[#1b74e4]"></i>
                    </div>
                    <h2 className="text-[25px] font-semibold">Education</h2>
                </div>
                <div className="flex flex-row gap-10 py-5">
                    <div className="basis-6/12 bg-[rgb(243,246,246)] p-3 rounded-md">
                        <h2 className="text-orange-500 font-semibold text-[20px]">Course Certification</h2>
                        <ul className="py-2 ">
                            <li className="mb-1">Year - 2021</li>
                            <li className="mb-1">Institute - WAP Institute</li>
                            <li className="mb-1">MERN Stack Developer Certification</li>
                        </ul>  
                    </div> 
                    <div className="basis-6/12 bg-[rgb(243,246,246)] p-3 rounded-md">
                        <h2 className="text-orange-500 font-semibold text-[20px]">Bachelor Degree</h2>
                        <ul className="py-2 ">
                            <li className="mb-1">Year - 2013 to 2017</li>
                            <li className="mb-1">College - Ram Meghe College</li>
                            <li className="mb-1">Percentage - 72%</li>
                        </ul>    
                    </div> 
                </div>
                <div className="flex flex-row gap-10">
                    <div className="basis-6/12 bg-[rgb(243,246,246)] p-3 rounded-md">
                        <h2 className="text-orange-500 font-semibold text-[20px]">Intermediate </h2>
                        <ul className="py-2 ">
                            <li className="mb-1">Year - 2011 to 2013</li>
                            <li className="mb-1">College - Mulji Jetha College </li>
                            <li className="mb-1">Percentage - 50.33%</li>
                        </ul>    
                    </div> 
                    <div className="basis-6/12 bg-[rgb(243,246,246)] p-3 rounded-md">
                        <h2 className="text-orange-500 font-semibold text-[20px]">Matriculation</h2>
                        <ul className="py-2 ">
                            <li className="mb-1">Year - 2010 to 2011</li>
                            <li className="mb-1">School - Zilha Parishad High School</li>
                            <li className="mb-1">Percentage - 58.36%</li>
                        </ul>   
                    </div> 
                </div>
            </div>
        </Layout>
    )
}

export default Resume
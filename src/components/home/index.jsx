import Layout from "../shared/layout"

const Home = () =>{
    return (
        <Layout>
            <div className="flex items-center gap-5">
               <h1 className="text-[40px] text-[#000000] font-bold">About Me</h1>
               <hr className="w-[25%] border border-[#1b74e4] h-[4px] bg-[#1b74e4] rounded" />
            </div>
            <div className="flex flex-col mt-6 gap-4 text-[#44566C] text-[17px]">
            <p>
            Specializing in MERN stack development, I excel in architecting dynamic web solutions leveraging MongoDB, Express.js, React, and Node.js. Equally adept in front-end and back-end technologies, my expertise lies in architecting scalable applications tailored to user needs. Prioritizing performance optimization and code reliability, I adhere to rigorous testing and refinement practices, ensuring the delivery of robust and efficient software solutions.

            </p>
            </div>
        </Layout>
    )
}

export default Home
import { Link } from "react-router-dom";
import Layout from "../shared/layout"

const Portfolio = () =>{

    const data = [
        {
            src: 'https://swastikinteriors.in',
            path: '/images/portfolio-img-1.png'
        },
        {
            src: 'https://lariointeriors.com',
            path: '/images/portfolio-img-2.png'
        },
        {
            src: 'https://www.savaari.com',
            path: '/images/portfolio-img-3.png'
        },
        {
            src: 'https://www.nickyscafe.in',
            path: '/images/portfolio-img-4.png'
        },
        {
            src: 'https://www.localramu.com',
            path: '/images/portfolio-img-5.png'
        },
        {
            src: 'https://www.cakeplaza.in',
            path: '/images/portfolio-img-6.png'
        }
    ];

    return (
        <Layout>
            <div className="flex items-center gap-5 pb-7">
               <h1 className="text-[40px] text-[#000000] font-bold">Portfolio</h1>
               <hr className="w-[25%] border border-[#1b74e4] h-[4px] bg-[#1b74e4] rounded" />
            </div>
            <div className="grid md:grid-cols-2 md:gap-11 gap-8">
                        {data.map((item, index) => (
                            <div key={index} className="">
                                <Link to={item.src}  target="_blank" rel="noopener noreferrer" key={index}>
                                    <div
                                        className="h-[250px] cursor-pointer project_1  rounded-lg"
                                        style={{
                                            backgroundImage: `url(${item.path})`,
                                            backgroundSize: "cover"
                                        }}
                                    ></div>
                                </Link>
                            </div>
                        ))}
                    </div>
        </Layout>
    )
}

export default Portfolio
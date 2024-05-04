import { Button, Card, Divider } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { LinkedinOutlined } from '@ant-design/icons'

const Layout = ({children}) => {

  const socialIcons = [
    {
      path: "https://www.linkedin.com/in/rohit-shrirao-6ba08b307/",
      icon: "fa fa-linkedin"
    },
    {
      path: "https://www.instagram.com/shriraorohit/",
      icon: "fa fa-instagram"
    },
    {
      path: "https://www.facebook.com/rohit.shrirao.564",
      icon: "fa fa-facebook"
    },
    {
      path: "https://github.com/rohitshrirao",
      icon: "fa fa-github"
    }
  ]

  const personalDetails = [
    {
      icon: "fa fa-mobile-phone",
      label: "Phone",
      content: "+91 9923230809"
    },
    {
      icon: "fa fa-envelope",
      label: "Email",
      content: "rohitshrirao9923@gmail.com"
    },
    {
      icon: "fa fa-map-marker",
      label: "Location",
      content: "Badnera"
    },
    {
      icon: "fa fa-calendar",
      label: "Birthday",
      content: "Apr 06, 1996"
    }
  ]

  const menus = [
    {
      path: "/",
      label: "Home",
      icon: "fa fa-address-card"
    },
    {
      path: "/resume",
      label: "Resume",
      icon: "fa fa-file-text"
    },
    {
      path: "/portfolio",
      label: "Portfolio",
      icon: "fa fa-briefcase"
    },
    {
      path: "/contact",
      label: "Contact",
      icon: "fa fa-address-book"
    }
  ]

  const downloadClick = () => {
    const a = document.createElement("a");
    a.href = "/pdf/RSResume.pdf"; // Update the path to your PDF file
    a.download = "rohitResume.pdf";
    a.click();
  };


  return (
    <div className="min-h-screen py-16 px-10 " style={{backgroundImage: "url('images/bg-image.jpg')", backgroundSize: "cover"}}>

      <div className='h-[150px]'></div>

      <div className="flex flex-row gap-10" >

        <div className="basis-4/12 bg-red-500 bg-white rounded-2xl py-5 h-[100%]">
          <div className='flex flex-col items-center justify-center gap-4'>
            <img src="/images/profile-img.jpg" className='rounded-3xl object-cover object-top h-[250px] w-[70%] -mt-[180px]' />
            <h1 className='text-[#000000] font-semibold text-3xl'>Rohit Shrirao</h1>
            <div className='bg-[#F3F6F6] font-semibold px-4 py-2 rounded-[8px]'>
              <h2 className='text-[18px]'>Full Stack MERN Developer</h2>
            </div>
            <div className='flex gap-2'>
              {
                socialIcons.map((socialIcon, index)=>(
                  <Link to={socialIcon.path}  target="_blank" rel="noopener noreferrer" key={index}>
                    <button className='flex flex-col justify-center px-4 py-3 rounded-[10px] text-[#1b74e4] bg-[#F3F6F6] text-[20px] hover:text-white hover:bg-[#1b74e4]'>
                      <i className={socialIcon.icon}></i>
                    </button>
                  </Link>
                ))
              }
            </div>
            <div className='w-full flex justify-center items-center py-4'>
                <div className='bg-[#F3F6F6] px-7 pt-7 pb-3 rounded-2xl'>
                  {
                    personalDetails.map((personalDetail, index)=>(
                      <div key={index}>
                        <div  className='flex gap-5'>
                          <div className={`flex justify-center items-center w-12 h-12 text-[#1b74e4] bg-white rounded-[10px] text-[23px]`}>
                            <i className={personalDetail.icon}></i>
                          </div>
                          <div className=''>
                            <h2 className='text-[#44566c] text-[14px]'>{personalDetail.label}</h2>
                            <h2 className='semibold '>{personalDetail.content}</h2>
                          </div>
                        </div>
                        <Divider className=' my-3' />
                      </div>
                    ))
                  }
                </div>
            </div>
            <div>
              <button 
                className="bg-[#1b74e4]  border border-white hover:bg-white  hover:text-black hover:border-[#1b74e4] text-white font-bold py-3 px-5 rounded-xl"
                onClick={downloadClick}
                >
                <i className="fa fa-download mr-2"></i> Download CV
              </button>
            </div>
          </div>
        </div>

        <div className="basis-8/12 bg-red-500 bg-white rounded-2xl p-10">
          {children}
        </div>

        <div className="basis-1/12 flex flex-col items-center gap-7 bg-white rounded-2xl p-8  h-[100%]">
          {
            menus.map((menu, index)=>(
              <Link to={menu.path} key={index}>
                <button className="w-20 h-20 block rounded-xl  bg-[#F3F6F6]  border-0 hover:text-white hover:bg-[#1b74e4] flex flex-col justify-center items-center text-[#44566C]">
                  <div className='text-[22px]'><i className={`${menu.icon} `}></i></div>
                  <h1 className='text-[15px]  font-semibold'>{menu.label}</h1>
                </button>
              </Link>
            ))
          }
        </div>

      </div>
    </div>
  )
}

export default Layout
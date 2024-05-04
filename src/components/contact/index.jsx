import { Button, Form, Input, message } from "antd"
import Layout from "../shared/layout"

const Contact = () =>{


    const onTicketCreate = ()=>{
        message.success("Form Submitted Successfully")
    }

    return (
        <Layout>
            <div className="flex items-center gap-5 pb-7">
               <h1 className="text-[40px] text-[#000000] font-bold">Contact Me</h1>
               <hr className="w-[25%] border border-[#1b74e4] h-[4px] bg-[#1b74e4] rounded" />
            </div>
            <div className="bg-[rgb(243,246,246)] px-7 pt-7 pb-3 rounded-2xl space-y-3">
               <h2 className="text-[#44566C] font-bold text-[23px]">DON"T BE SHY !</h2>
               <h3 className="text-black font-semibold">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</h3>
               <div className="pt-8">
                <Form
                   layout="vertical"
                   onFinish={onTicketCreate}
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{required: true}]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{required: true, type:"email"}]}
                    >
                        <Input />
                    </Form.Item>  

                    <Form.Item
                        label="Message"
                        name="message"
                        rules={[{required: true}]}
                    >
                        <Input.TextArea />
                    </Form.Item>

                    <Form.Item>
                        <button type='submit' className="hover:text-white hover:bg-[#1b74e4] hover:border-[#1b74e4] border border-black px-8 py-2 text-[17px] rounded-lg mt-5 ">Submit</button>
                    </Form.Item>

                </Form>
            </div>
            </div>

        </Layout>
    )
}

export default Contact
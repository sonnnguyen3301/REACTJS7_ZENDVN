import { Form, Input, Button,notification } from 'antd'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actRegisterAsync } from '../store/auth/action';


function RegisterPage() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [formError, setFormError] = useState('')
    const [loading, setLoading] = useState(false)

    const onFinish = async (values) => {
        console.log('Success:', values);

        const actAsync = actRegisterAsync({
            email: values.email,
            fullname: values.fullname,
            password: values.password,
            repassword: values.repassword
          })

          dispatch(actAsync).then(res => {
            console.log('res',res);
            if (res.ok) {
                navigate('/')
            } else {
              setFormError(res)
              setLoading(false)
            }
          })
    };
    const onFinishFailed = (errorInfo) => {
        // console.log('Failed:', errorInfo);
        notification.error({
            message: 'Oops!!!',
            description: 'Something went wrong. Please try again!',
        })
    };
    return (
        <div className="background-login">
            <div className="login-box">
                <div className='title-box'>Register</div>
                <Form
                    name="basic"
                    labelCol={{
                        span: 6,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Xin hãy nhận tên tài khoản email!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Fullname"
                        name="fullname"
                        rules={[
                            {
                                required: true,
                                message: 'Xin hãy nhập tên tài khoản!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Xin hãy nhập mật khẩu!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        label="Confirm Password"
                        name="repassword"
                        rules={[
                            {
                                required: true,
                                message: 'Xin hãy nhập mật khẩu!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                 

                    <Form.Item
                        wrapperCol={{
                            offset: 6,
                            span: 16,
                        }}
                        >
                            
                        {formError &&  <p style={{color: 'red', marginBottom: '10px', fontSize: "16px"}}>{formError}</p>}
                        <Button type="primary" htmlType="submit" loading={loading}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>

    )
}

export default RegisterPage
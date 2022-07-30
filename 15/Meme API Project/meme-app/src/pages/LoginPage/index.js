import 'antd/dist/antd.css';
import './login.css'
import { Button, Checkbox, Form, Input, Row  } from 'antd';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { actLoginAsync } from '../../store/auth/action';

function LoginPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formError, setFormError] = useState('')
  const [loading, setLoading] = useState(false)



  const onFinish = (values) => {
    setLoading(true)
    dispatch(actLoginAsync(values.username, values.password))
    .then(res => {
      if (res.ok === 200) {
        navigate('/')
      } else {
        setFormError(res.error)
        setLoading(false)
      }
    })
  };

  // const onFinishFailed = (errorInfo) => {
  //   console.log('Failed:', errorInfo);
  // };

  return (
    <div className="background-login">
      <div className="login-box">
      <div className='title-box'>Login</div>
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
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Xin hãy nhận tên tài khoản!',
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
                message: 'Xin hãy nhận mật khẩu!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
        
          <Form.Item
            valuePropName="checked"
            wrapperCol={{
              offset: 6,
              span: 16,
            }}
          >
            <Row justify="space-between">
              <Checkbox>Remember me</Checkbox>
              <Link  to={'/register'}>Chưa có tài khoản</Link>
            </Row>
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

export default LoginPage
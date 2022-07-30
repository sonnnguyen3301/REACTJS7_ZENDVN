import './profile.css'
import { Row, Col, Form, Input, Button, notification } from 'antd'
import { useEffect, useState } from 'react'
import { getBase64FromFile, validateFile } from '../../../helpers'
import { useSelector } from 'react-redux'
import { authService } from '../../../services/auth'

function DashboardProfile() {
  const [file, setFile] = useState(null)
  const currentUser = useSelector(state => state.Auth.currentUser)
  const [base64Url, setBase64Url] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setBase64Url(currentUser.avatar)
  }, [currentUser.avatar])

  function handleClickUpload() {
    const input = document.createElement('input')
    input.type = "file"
    input.accept = "image/*"
    input.addEventListener('change', handleChangeFile)
    input.click()
  }

  function handleChangeFile(evt) {
    const avatarFile = evt.target.files[0]
    const isValid = validateFile(avatarFile)

    if (!isValid) {
      return
    }

    getBase64FromFile(avatarFile, (url) => {
      setFile(avatarFile)
      setBase64Url(url)
    })
  }

  const onFinish = async (values) => {
    console.log('Success:', values);

    setLoading(true)
    const data = {
      firstName: values.firstName,
      lastName: values.lastName,
      nickname: values.nickname,
      description: values.description
    }

    try {
      if (file) {
        const responseMedia = await authService.uploadAvatar(file)
        const mediaId = responseMedia.data.id
        data.mediaId = mediaId
      }
  
      await authService.updateMe(data)
      
      notification.success({
        message: 'Yay!!',
        description: 'Update successfully!',
      })
    } catch(err) {
      notification.error({
        message: 'Oops!!!',
        description: 'Something went wrong. Please try again!',
      })
    }

    setLoading(false)
  };

  const onFinishFailed = (errorInfo) => {
    // console.log('Failed:', errorInfo);
    notification.error({
      message: 'Oops!!!',
      description: 'Something went wrong. Please try again!',
    })
  };

  return (

    <Form
      name="basic"
      // labelCol={{ span: 8 }}
      // wrapperCol={{ span: 24 }}
      initialValues={{
        email: currentUser.email,
        nickname: currentUser.nickname,
        description: currentUser.description,
        firstName: currentUser.firstName,
        lastName: currentUser.lastName
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
    >
      <Row gutter={30}>
        <Col span={6}>
          <h1>Avatar</h1>
          <div className="upload" onClick={handleClickUpload}>
            <svg viewBox="64 64 896 896" focusable="false" data-icon="plus" width="1em" height="1em" fill="currentColor" aria-hidden="true"><defs><style></style></defs><path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"></path><path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"></path></svg>
            <span>Upload</span>

            {base64Url && <img className="preview" src={base64Url} alt="" />}
          </div>
        </Col>
        <Col span={8}>
          {/* Form */}
          <h1>Profile</h1>

          <Form.Item
            label="Email"
            name="email"
          >
            <Input disabled />
          </Form.Item>
          <Form.Item
            label="Nickname"
            name="nickname"
            rules={[{ required: true, message: 'Please input your nickname!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="First Name"
            name="firstName"
          >
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ span: 14 }}>
          {/* <Form.Item> */}
            <Button type="primary" htmlType="submit" block loading={loading}>
              Submit
            </Button>
          </Form.Item>
        </Col>
        <Col span={8} style={{ paddingTop: '34px' }}>
          

          <Form.Item
            label="Last Name"
            name="lastName"
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
          >
            <Input.TextArea rows={5} />
          </Form.Item>
        </Col>
      </Row>
    </Form>

  )
}

export default DashboardProfile
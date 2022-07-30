export const BASE_URL = process.env.REACT_APP_BASE_URL
export const DATE_TEMPLATE = 'DD/MM/YYYY'
export const DATE_TEMPLATE_FULL = 'DD/MM/YYYY HH:mm:ss'
export const DEFAULT_AVATAR = 'https://huyhoanhotel.com/wp-content/uploads/2016/05/765-default-avatar.png'
export const ACCESS_TOKEN = 'access_token'

export const MESSAGE_FORM_ERROR = {
  // Back End error code
  existing_user_login: 'Tên đăng nhập đã tồn tại',
  existing_user_email: 'Email đã tồn tại',
  rest_user_invalid_password: 'Mật khẩu không hợp lệ',
  rest_user_invalid_username: 'Tên đăng nhập không hợp lệ',
  rest_user_invalid_email: 'Email không hợp lệ',
  password_length: 'Mật khẩu phải ít nhất 6 ký tự',

  // Front End error code
  email_required: 'Email không được rỗng',
  password_required: 'Mật khẩu không được rỗng',
  username_requỉed: 'Tên đăng nhập không được rỗng',

  default: 'Có lỗi xảy ra, vui lòng thử lại sau!'
}

export const ROUTER_POST = '/post/:slug'
// rest_user_invalid_password
// existing_user_login
// existing_user_email
// rest_user_invalid_username (Không chứa "space", Không chứa ký tự đặc biệt)
// rest_user_invalid_password (Không rỗng Không thể chứa dấu "/", Không chứa "space")
// rest_user_invalid_email
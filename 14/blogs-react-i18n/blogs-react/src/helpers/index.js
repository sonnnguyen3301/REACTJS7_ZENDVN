import { DEFAULT_AVATAR, MESSAGE_FORM_ERROR, ROUTER_POST } from "../constants"
import { message } from 'antd'
import { t } from "@lingui/macro"

export { formatRelativeDate } from './day'

export function getQueryStr(name, location) {
  return new URLSearchParams(location.search).get(name)
}


export function mappingPostData(post) {
  return {
    id: post.id,
    title: post.title.rendered,
    author: post.author_data,
    authorId: post.author,
    thumbnail: post.featured_media_url,
    slug: post.slug,
    createdDate: post.date,
    categoriesId: post.categories,
    viewCount: post.view_count,
    shortDescHTML: post.excerpt.rendered
    // 
  }
}
export function mappingPostDetailData(post) {
  return {
    ...mappingPostData(post),
    tagsId: post.tags,
    contentHTML: post.content.rendered,
    commentCount: post.comment_count
    // 
  }
}

export function mappingCurrentUser(user) {
  return {
    id: user.id,
    email: user.email,
    nickname: user.nickname,
    avatar: user.simple_local_avatar?.full || DEFAULT_AVATAR,
    description: user.description,
    firstName: user.first_name,
    lastName: user.last_name
  }
}

export const mappingMainMenus = menuItem => {
  const data = {
    id: menuItem.ID,
    url: menuItem.url,
    title: menuItem.title,
    childItems: menuItem.child_items || []
  }

  data.childItems = data.childItems.map(mappingMainMenus)

  return data
}

export const mappingComment = commentItem => {
  return {
    id: commentItem.id,
    postId: commentItem.post,
    parentId: commentItem.parent,
    authorName: commentItem.author_name,
    authorAvatar: commentItem.author_data.avatar || DEFAULT_AVATAR,
    authorId: commentItem.author,
    contentHTML: commentItem.content.rendered,
    createdDate: commentItem.date,
    replyCount: commentItem.comment_reply_count
  }
}

export function handleHashCategoryById(categories) {
  const hashObj = {}

  categories.forEach(categoryItem => {
    const key = categoryItem.id

    hashObj[key] = {
      id: categoryItem.id,
      name: categoryItem.name,
      slug: categoryItem.slug,
      lang: categoryItem.lang
    }
  })

  return hashObj
}

export function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function validateFormData({ value, name }) {
  let error = ''
  
  if (name === 'username' && !value) {
    error = t`Username không được rỗng`
  }
  if (name === 'password') {
    if (!value) error = 'Password không được rỗng'
    else if (value.length < 6) error = 'Password phải có ít nhất 6 ký tự'
  }

  return error
}

export function validateFormRegister({ value, name }) {
  let error = ''
  
  if (name === 'email') {
    if (!value) {
      error = MESSAGE_FORM_ERROR.email_required
    }
    else if (!validateEmail(value)) {
      error = MESSAGE_FORM_ERROR.rest_user_invalid_email
    }
  } else if (name === 'username' && !value) {
    error = MESSAGE_FORM_ERROR.username_requỉed
  } else if (name === 'password') {
    if (!value) {
      error = MESSAGE_FORM_ERROR.password_required
    } else if (value.length < 6) {
      error = MESSAGE_FORM_ERROR.password_length
    }
  }

  return error
}


export function highlightText(queryStr, targetStr) {
  const reg = new RegExp(queryStr, 'gi');
  const finalStr = targetStr.replace(reg, str => {
    return '<mark>' + str + '</mark>'
  });

  return finalStr
}

export function genUserLink(authorId) {
  return `/user/${authorId}`
}
export function genPostLink(slug) {
  return ROUTER_POST.replace(':slug', slug)
}

export function getDefaultCmtPaging() {
  return {
    list: [],
    currentPage: 0,
    total: 0,
    totalPages: 1,
    exclude: []
  }
}

export function validateFile(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

export function getBase64FromFile(file, callback) {
  const reader = new FileReader();
  
  reader.addEventListener("load", () => {
    callback(reader.result)
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}
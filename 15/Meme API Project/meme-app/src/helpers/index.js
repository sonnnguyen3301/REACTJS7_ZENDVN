import { ROUTER_POST, USER_POST } from "../constants"



export function getQueryStr(name, location) {
    return new URLSearchParams(location.search).get(name)
}
export function genUserLink(authorId) {
    return `/post/getListPostUserID.php?userid=${authorId}`
  }
export function genPostLink(slug) {
  return ROUTER_POST.replace(':slug',  slug)
}
export function genUserPostLink(slug) {
  return USER_POST.replace(':slug', slug)
}
export function handleHashCategoryById(posts) {
  const hashObj = {}

  posts.forEach(post => {
    const key = post.PID

    hashObj[key] = {
      id: post.PID,
      authorid: post.USERID,
      name: post.fullname,
      profile: post.profilepicture,
      content: post.post_content,
      passed: post.time_added,
      img: post.url_image,
      // slug: post.slug,
      // lang: post.lang
    }
  })
  return hashObj
}
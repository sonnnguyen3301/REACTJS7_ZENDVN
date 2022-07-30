import Button from "../shared/Button"

function PageNotFound() {
  return (
    <div className="articles-list section">
      <div className="tcl-container">
        <div className="tcl-row tcl-jc-center">
          <div className="tcl-col-3">
            <img src="https://cdn.24h.com.vn/images/404img_092018.png" alt="404"/>
          </div>
          <div className="tcl-col-5">
            <h2>Truy cập của bạn có thể bị lỗi hoặc không tìm thấy nội dung</h2>

            <Button href="/" as="a">Tro Ve Trang Chu</Button>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default PageNotFound
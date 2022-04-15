import logo from '../assets/images/logo.png';
import './footer.css'
function Footer() {
    
    return (
        <footer id="footer" className="bg-white">
        <div className="tcl-container">
          <div className="footer">
            <div className="tcl-row">
              {/* Footer Column */}
              <div className="tcl-col-12 tcl-col-sm-6 tcl-col-md-4 tcl-col-lg-3">
                <div className="footer-logo">
                  <img src={logo} alt="NuxtBlog Logo" />
                </div>
                <p>© 2020, All Rights Reserved.</p>
                <p>Created by <a href="https://www.facebook.com/congluc1902" target="_blank">Luctc</a></p>
              </div>
              {/* Footer Column */}
              <div className="tcl-col-12 tcl-col-sm-6 tcl-col-md-4 tcl-col-lg-2">
                <div className="footer-title">
                  <p>Categories</p>
                </div>
                <ul className="footer-content__list">
                  <li><a href="#">ReactJs</a></li>
                  <li><a href="#">Javascript</a></li>
                  <li><a href="#">Angular</a></li>
                  <li><a href="#">HTML, HTML5</a></li>
                </ul>
              </div>
              {/* Footer Column */}
              <div className="tcl-col-12 tcl-col-sm-6 tcl-col-md-4 tcl-col-lg-3">
                <div className="footer-title">
                  <p>Liên hệ</p>
                </div>
                <ul className="footer-content__list">
                  <li>219/78 Trần Văn Đang - Quận 10 - Thành phố Hồ chí Minh</li>
                  <li>0343 261 825</li>
                </ul>
              </div>
              {/* Footer Column */}
              <div className="tcl-col-12 tcl-col-sm-6 tcl-col-md-4 tcl-col-lg-4">
                <div className="footer-title">
                  <p>Fanpage</p>
                </div>
                <div className="footer-facebook">
                        <div className="fb-page fb_iframe_widget" data-href="https://www.facebook.com/HocLapTrinhWebTrenProjectsThucTe/" data-tabs data-width data-height data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true" fb-xfbml-state="rendered" fb-iframe-plugin-query="adapt_container_width=true&app_id=682829465411569&container_width=339&hide_cover=false&href=https%3A%2F%2Fwww.facebook.com%2FHocLapTrinhWebTrenProjectsThucTe%2F&locale=vi_VN&sdk=joey&show_facepile=true&small_header=false&tabs=&width="><span style={{verticalAlign: 'bottom', width: '339px', height: '130px'}}><iframe name="f224d23964d9564" width="1000px" height="1000px" data-testid="fb:page Facebook Social Plugin" title="fb:page Facebook Social Plugin" frameBorder={0} allowTransparency="true" allowFullScreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v7.0/plugins/page.php?adapt_container_width=true&app_id=682829465411569&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df3991a0c9d311cc%26domain%3D127.0.0.1%26is_canvas%3Dfalse%26origin%3Dhttp%253A%252F%252F127.0.0.1%253A5500%252Ff10fa5d56e47ec8%26relation%3Dparent.parent&container_width=339&hide_cover=false&href=https%3A%2F%2Fwww.facebook.com%2FHocLapTrinhWebTrenProjectsThucTe%2F&locale=vi_VN&sdk=joey&show_facepile=true&small_header=false&tabs=&width=" style={{border: 'none', visibility: 'visible', width: '339px', height: '130px'}} className /></span></div>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      );
}


export default Footer;
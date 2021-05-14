import React from "react";
const Footer = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-14">
          <footer class="footer">
            <div class="container">
              <div class="row">
                <div class="col-md-3 m-b-30">
                  <div class="footer-title m-t-5 m-b-20 p-b-8">About us</div>
                  <p class="white-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500 text of the
                    printing.
                  </p>
                </div>
                <div class="col-md-3 m-b-30">
                  <div class="footer-title m-t-5 m-b-20 p-b-8">
                    Latest themes
                  </div>
                  <div class="footer-links">
                    <button href="#">Appointment</button>
                    <button href="#">Health center</button>
                    <button href="#">Quality</button>
                    <button href="#">WallStreet</button>
                  </div>
                </div>
                <div class="col-md-3 m-b-30">
                  <div class="footer-title m-t-5 m-b-20 p-b-8">Quick Links</div>
                  <div class="footer-links">
                    <button href="#">Blog</button>
                    <button href="#">FAQ</button>
                    <button href="#">Terms & conditions</button>
                    <button href="#">Privacy policy</button>
                  </div>
                </div>
                <div class="col-md-3 m-b-30">
                  <div class="footer-title m-t-5 m-b-20 p-b-8">Support</div>
                  <div class="footer-links">
                    <button href="#">Affiliate</button>
                    <button href="#">Login</button>
                    <button href="#">All theme package</button>
                    <button href="#">Support forum</button>
                  </div>

                  <div class="footer-social-links m-t-30">
                    <li>
                      <button href="#">
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                      </button>
                      <button href="#">
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                      </button>
                      <button href="#">
                        <i class="fa fa-linkedin" aria-hidden="true"></i>
                      </button>
                      <button href="#">
                        <i class="fa fa-youtube" aria-hidden="true"></i>
                      </button>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          <div class="footer-bottom">Copyright © 2021, All Rights Reserved</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

// import React from "react";
// import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

// const Footer = () => {
//   return (
//     <MDBFooter color="brown" className="font-small pt-4 mt-4">
//       <MDBContainer fluid className="text-center text-md-left">
//         <MDBRow>
//           <MDBCol md="6">
//             <h5 className="title">Footer Content</h5>
//             <p>
//               Here you can use rows and columns here to organize your footer
//               content.
//             </p>
//           </MDBCol>
//           <MDBCol md="6">
//             <h5 className="title">Links</h5>
//             <ul>
//               <li className="list-unstyled">
//                 <a href="#!">Link 1</a>
//               </li>
//               <li className="list-unstyled">
//                 <a href="#!">Link 2</a>
//               </li>
//               <li className="list-unstyled">
//                 <a href="#!">Link 3</a>
//               </li>
//               <li className="list-unstyled">
//                 <a href="#!">Link 4</a>
//               </li>
//             </ul>
//           </MDBCol>
//         </MDBRow>
//       </MDBContainer>

//     </MDBFooter>
//   );
// }

// export default Footer;

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  BsFillTelephoneFill,
  BsEnvelopeFill,
  BsActivity,
  BsChevronDoubleRight,
  BsCheckAll,
  BsHeartPulseFill,
} from "react-icons/bs";
import "./Landing_page.css";
function Landing_page1() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="Landing_page1">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a
              className="navbar-brand"
              href="#"
              data-aos-duration="2000"
              data-aos="fade-right"
            >
              <h2 className="nav_title" style={{ color: "white" }}>
                <BsHeartPulseFill />
              </h2>
            </a>
            <button
              className="navbar-toggler"
              style={{ backgroundColor: "", color: "white",marginLeft:"60%" }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item" data-aos="fade-down">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>

                <li className="nav-item" data-aos="fade-up">
                  <a className="nav-link active" aria-current="page" href="#">
                    Specialities
                  </a>
                </li>
                <li className="nav-item" data-aos="fade-down">
                  <a className="nav-link active" aria-current="page" href="#">
                    Doctors
                  </a>
                </li>
                <li className="nav-item" data-aos="fade-up">
                  <a className="nav-link active" aria-current="page" href="#">
                    Facilities
                  </a>
                </li>
                <li className="nav-item" data-aos="fade-down">
                  <a className="nav-link active" aria-current="page" href="#">
                    Blog
                  </a>
                </li>
                <li className="nav-item" data-aos="fade-up">
                  <a className="nav-link active" aria-current="page" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item" data-aos="fade-down">
                  <a className="nav-link active" aria-current="page" href="#">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item" data-aos="fade-up">
                  <a className="nav-link active" aria-current="page" href="#">
                    Help
                  </a>
                </li>

                <button
                  className=" btn1"
                  // style={{ marginLeft: "50px" }}
                  data-aos-duration="2000"
                  data-aos="fade-left"
                >
                  Login
                </button>
              </ul>
            </div>
            <form className="d-flex" role="search">
              {/* <button className="button"> Donate</button> */}
            </form>
          </div>
        </nav>
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active slider1">
              <div
                className="content1"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <h5 style={{ color: "rgb(32,125,255)" }}>
                  Welcome to your safe zone
                </h5>
                <h1>We Are Here For You Only.</h1>
                <p>
                  Dead reckoning, the process of estimating a global position ·
                  Demand response, a method of managing consumer consumption of
                  electricity ·
                </p>
                <button class="button">Make a appointment </button>
              </div>
            </div>
            <div className="carousel-item slider2">
              <div className="content1">
                <h5 style={{ color: "rgb(32,125,255)" }}>
                  Welcome to your safe zone
                </h5>
                <h1>We Are Here For You Only.</h1>
                <p>
                  Dead reckoning, the process of estimating a global position ·
                  Demand response, a method of managing consumer consumption of
                  electricity ·
                </p>
                <button class="button">Make a appointment </button>
              </div>
            </div>
            <div className="carousel-item slider3">
              <div className="content1">
                <h5 style={{ color: "rgb(32,125,255)" }}>
                  Welcome to your safe zone
                </h5>
                <h1>We Are Here For You Only.</h1>
                <p>
                  Dead reckoning, the process of estimating a global position ·
                  Demand response, a method of managing consumer consumption of
                  electricity ·
                </p>
                <button class="button">Make a appointment </button>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon "
              style={{ color: "black" }}
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon mb-2"
              aria-hidden="true"
              style={{ color: "black" }}
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* Navbar */}

        <div className=" container about mt-5">
          <div class="container">
            <div class="row">
              <div
                class="col"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <img
                  src="https://images.unsplash.com/photo-1631815585553-a8a8d2361e2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1286&q=80"
                  height={630}
                  width={450}
                />
              </div>
              <div
                class="col p-3 mt-5 "
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <h1>
                  We Are Mediplus A Medical Clinic <span1>INDIA</span1>
                </h1>
                <br />
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth. It is
                  a paradisematic country, in which roasted parts of sentences
                  fly into your mouth.
                </p>
                <button class="button">Make a appointment </button>
                <span> </span>
                <button
                  class="button cc"
                  style={{ backgroundColor: "rgb(32,125,255)", color: "white" }}
                >
                  Contact{" "}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="conatiner specilist mt-5">
          <div className="">
            <h1 data-aos="fade-down-left" data-aos-duration="2000">
              Our Specialities
            </h1>
          </div>
          <br />
          <div class="container">
            <div class="row">
              <div class="col " data-aos="flip-left" data-aos-duration="2000">
                <div class="card card1" style={{ width: "18rem" }}>
                  <img
                    src="https://amcarehospital.com/wp-content/uploads/2021/07/Untitled-design-53-150x150.png"
                    class="card-img-top p-5"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Cardiology</h5>

                    <button class="button">Book Now </button>
                  </div>
                </div>
              </div>
              <div class="col " data-aos="flip-right" data-aos-duration="2000">
                <div class="card card1" style={{ width: "18rem" }}>
                  <img
                    src="https://amcarehospital.com/wp-content/uploads/2021/07/Untitled-design-53-150x150.png"
                    class="card-img-top p-5"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Neurosciences</h5>

                    <button class="button">Book Now </button>
                  </div>
                </div>
              </div>
              <div class="col " data-aos="flip-left" data-aos-duration="2000">
                <div class="card card1" style={{ width: "18rem" }}>
                  <img
                    src="https://amcarehospital.com/wp-content/uploads/2021/07/Untitled-design-60-150x150.png"
                    class="card-img-top p-5"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Orthopaedics</h5>

                    <button class="button">Book Now </button>
                  </div>
                </div>
              </div>
              <div class="col " data-aos="flip-left" data-aos-duration="2000">
                <div class="card card1" style={{ width: "18rem" }}>
                  <img
                    src="https://amcarehospital.com/wp-content/uploads/2021/07/Untitled-design-54-150x150.png"
                    class="card-img-top p-5"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Pulmonology</h5>

                    <button class="button">Book Now </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" container about mt-5 choose">
          <div class="container">
            <div class="row">
              <div
                class="col p-3 mt-5"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <h1>Why you choose Us</h1>
                <br />
                <h4>More Experience</h4>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                </p>
                <h4>The right answers?</h4>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                </p>
                <h4>Seamless care</h4>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                </p>
                <h4>Unparalleled expertise</h4>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                </p>
                <button class="button">Know More </button>
                <span> </span>
              </div>
              <div
                class="col   "
                data-aos="zoom-in-up"
                data-aos-duration="2000"
              >
                <img src="https://images.unsplash.com/photo-1619450565660-2a93ba8603fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80" />
              </div>
            </div>
          </div>
        </div>

        <div className="parallax mt-5">
          <div
            className="cnt"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="2000"
          >
            <h1 >Your Health is Our Priority</h1>
            <p>
              We can manage your dream building A small river named Duden flows
              by their place
            </p>
            <button class="button">Make a appointment </button>
            <span> </span>
            <button
              class="button"
              style={{ backgroundColor: "rgb(32,125,255)", color: "white" }}
            >
              Contact{" "}
            </button>
          </div>
        </div>

        <div className=" container doctors mt-5">
          <div className="drs">
            <h1 data-aos="fade-down-right" data-aos-duration="2000">
              Ours Top Doctors
            </h1>
            <p>
              Separated they live in. A small river named Duden the necessary
              regelialia. It is a paradisematic country
            </p>
          </div>
          <div class="card-group">
            <div
              class="card m-3 card1"
              data-aos="fade-up-right"
              data-aos-duration="2000"
            >
              <img src="https://www.suplinen.com/wp-content/uploads/2018/10/What-do-doctors-wear-1030x1030.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">CDr. Ian Smiths</h5>
                <h6>NEUROLOGIST</h6>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <button class="button">Book Now </button>
              </div>
            </div>
            <div
              class="card m-3 card1"
              data-aos="flip-left"
              data-aos-duration="5000"
            >
              <img
                src="https://media.istockphoto.com/id/138205019/photo/happy-healthcare-practitioner.jpg?s=612x612&w=0&k=20&c=b8kUyVtmZeW8MeLHcDsJfqqF0XiFBjq6tgBQZC7G0f0="
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Dr. Lloyd Wilson</h5>
                <h6>NEUROLOGIST</h6>
                <p class="card-text">
                  This card has supporting text below as a natural lead-in to
                  has even longer content than the first to show that equal
                  height action.
                </p>
                <button class="button">Book Now </button>
              </div>
            </div>
            <div
              class="card m-3 card1"
              data-aos="fade-up-left"
              data-aos-duration="2000"
            >
              <img
                src="https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Dr. Rachel Parker</h5>
                <h6>NEUROLOGIST</h6>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
                <button class="button">Book Now </button>
              </div>
            </div>
          </div>
        </div>

        <div className="review mt-5">
          <div className="drs" data-aos="zoom-in" >
        <br/>
            <h1 data-aos="fade-down-right" data-aos-duration="2000">
            <h6> Ours Patients Says</h6>
              Testimonials
            </h1>
          </div>
          <div className="revies-contents">
            <div
              id="carouselExampleCaptions"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
                    class="d-block  rimg"
                    alt="..."
                  />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Rahul singha</h5>
                    <p>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer. This is a wider card with supporting
                      text below as a natural lead-in to additional content.
                      This content is a little bit longer.
                    </p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
                    class="d-block  rimg"
                    alt="..."
                  />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img
                    src="https://images.unsplash.com/photo-1610088441520-4352457e7095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
                    class="d-block  rimg"
                    alt="..."
                  />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev second-btn"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon mb-2"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next second-btn"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon mb-2"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>

        <div className="contactus mt-5 mb-2">
          <div className="drs mb-3">
            <h1 data-aos="fade-down-left" data-aos-duration="2000">
              Contact Us
            </h1>
          </div>
          <div class="container">
            <div class="row">
              <div class="col  mapp" data-aos="fade-up" data-aos-duration="2000">
                <div
                  id="map-container-google-3"
                  class="z-depth-1-half map-container-3"
                >
                  <iframe
                    src="https://maps.google.com/maps?q=warsaw&t=k&z=13&ie=UTF8&iwloc=&output=embed"
                    frameborder="0"
                    style={{ border: "0" }}
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div class="col" data-aos="fade-up" data-aos-duration="2000">
                <div className="formimgg">
                  <img
                    className="formimg"
                    src="https://cdn.dribbble.com/users/2058540/screenshots/8225181/comp_4.gif"
                  />
                </div>
                <form className="form1">
                  <div class="row mb-4">
                    <div class="col">
                      <div class="form-outline">
                        <input
                          type="text"
                          id="form3Example1"
                          class="form-control"
                        />
                        <label class="form-label" for="form3Example1">
                          First name
                        </label>
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-outline">
                        <input
                          type="text"
                          id="form3Example2"
                          class="form-control"
                        />
                        <label class="form-label" for="form3Example2">
                          Last name
                        </label>
                      </div>
                    </div>
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3"
                      class="form-control"
                    />
                    <label class="form-label" for="form3Example3">
                      Email address
                    </label>
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="number"
                      id="form3Example4"
                      class="form-control"
                    />
                    <label class="form-label" for="form3Example4">
                      Mobile No
                    </label>
                  </div>

                  <div class="form-check d-flex justify-content-center mb-4">
                    <input
                      class="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example33"
                      checked
                    />
                    <label class="form-check-label" for="form2Example33">
                      Subscribe to our newsletter
                    </label>
                  </div>

                  <button type="submit" class="btn btn-primary btn-block mb-4">
                    Submit
                  </button>

                  <div class="text-center">
                    <p>Follow Us:</p>
                    <button
                      type="button"
                      class="btn btn-secondary btn-floating mx-1"
                    >
                      <i class="fab fa-facebook-f"></i>
                    </button>

                    <button
                      type="button"
                      class="btn btn-secondary btn-floating mx-1"
                    >
                      <i class="fab fa-google"></i>
                    </button>

                    <button
                      type="button"
                      class="btn btn-secondary btn-floating mx-1"
                    >
                      <i class="fab fa-twitter"></i>
                    </button>

                    <button
                      type="button"
                      class="btn btn-secondary btn-floating mx-1"
                    >
                      <i class="fab fa-github"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className=" footer mt-5">
          <div class="container p-5">
            <div class="row">
              <div class="col p-3">
                <h2 data-aos="zoom-in">
                  The
                  <span className="" style={{ color: "black" }}>
                    Doctors
                    <BsActivity />
                  </span>
                </h2>
                <p>
                  Amcare Is A 110 Bed Super Multi-Specialty Hospital Based In
                  VIP Road, Zirakpur With Over 20+ Super Medical & Surgical
                  Specialties Supporting Patients .​
                </p>
                <button class="button">Make a appointment </button>
              </div>
              <div class="col p-3">
                <h4 data-aos="zoom-in">
                  Patients Care{" "}
                  <BsChevronDoubleRight fontSize={20} color="darkblue" />
                </h4>
                <ul>
                  <li>
                    <a href="">Online Reports</a>
                  </li>
                  <li>
                    <a href="">specilist</a>
                  </li>
                  <li>
                    <a href="">Facilities</a>
                  </li>
                  <li>
                    <a href="">Our Doctors</a>
                  </li>
                  <li>
                    <a href="">About US</a>
                  </li>
                </ul>
              </div>
              <div class="col p-3">
                <h4 data-aos="zoom-in-left">
                  Important Links{" "}
                  <BsChevronDoubleRight fontSize={20} color="darkblue" />
                </h4>
                <ul>
                  <li>
                    <a href="">Careers</a>
                  </li>
                  <li>
                    <a href="">Blogs</a>
                  </li>
                  <li>
                    <a href="">News & Events</a>
                  </li>
                  <li>
                    <a href="">For Corporate TieUp</a>
                  </li>
                  <li>
                    <a href="">Help</a>
                  </li>
                </ul>
              </div>
              <div class="col p-3">
                <h4 data-aos="zoom-in-left">
                  Contact Us{" "}
                  <BsChevronDoubleRight fontSize={20} color="darkblue" />{" "}
                </h4>
                <div className="contact">
                  <span>Adress :</span>
                  VIP Road, Adjacent to Amcare Plaza, Zirakpur, Punjab 140603
                  <br />
                  <br />
                  <span>Phone :</span>+61 737272862
                  <br />
                  <br />
                  <span>Email :</span> dosctors@gmail.com
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer class="bg-light text-center text-white">
          <div class="container p-4 pb-0">
            <section class="mb-4">
              <a
                data-aos="zoom-out-up"
                class="btn text-white btn-floating m-1"
                style={{ backgroundColor: "#3b5998" }}
                href="#!"
                role="button"
              >
                <i class="fab fa-facebook-f"></i>
              </a>

              <a
                data-aos="zoom-out-up"
                class="btn text-white btn-floating m-1"
                style={{ backgroundColor: "#55acee" }}
                href="#!"
                role="button"
              >
                <i class="fab fa-twitter"></i>
              </a>

              <a
                data-aos="zoom-out-up"
                class="btn text-white btn-floating m-1"
                style={{ backgroundColor: "#dd4b39" }}
                href="#!"
                role="button"
              >
                <i class="fab fa-google"></i>
              </a>

              <a
                data-aos="zoom-out-up"
                class="btn text-white btn-floating m-1"
                style={{ backgroundColor: "#ac2bac" }}
                href="#!"
                role="button"
              >
                <i class="fab fa-instagram"></i>
              </a>

              <a
                data-aos="zoom-out-up"
                class="btn text-white btn-floating m-1"
                style={{ backgroundColor: "#0082ca" }}
                href="#!"
                role="button"
              >
                <i class="fab fa-github"></i>
              </a>
            </section>
          </div>

          <div class="text-center p-3" style={{ backgroundColor: "black" }}>
            © 2023 Copyright
            <span> Developed by</span> Rakesh singh
          </div>
        </footer>
      </div>
    </>
  );
}

export default Landing_page1;

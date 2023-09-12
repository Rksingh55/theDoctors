import React from "react";
import "./Profile.css";
function Profil() {
  const Student = {
    fullName: "Rakesh singh",
    Email: "rakesh@gmail.com",
    MobileNo: "536593659",
    MotherName: "-----",
    FatherName: "----",
    parentMobileNo: "8736923793",
   FullAdress: " np6 road delhi",
    Course: "java fullstack",
    Area: "Noida Electronicity Uttarpradesh",
  };

  return (
    <>
      <div className="student_dash">
        <div className="card-body maincard  ">
          <div className="container">
            <div className="main-body">
              <div className="row gutters-sm">
                <div className="col-md-4 mb-3">
                  <div className="card" >
                    <div className="card-body">
                      <div className="d-flex flex-column align-items-center text-center">
                        <img
                          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80"
                          alt="Admin"
                          className="rounded-circle imgp"
                          width="150"
                         
                        
                          height="160px"
                        />
                        <div className="mt-3">
                          <h4>{Student.fullName}</h4>
                          <p className="text-secondary mb-1">
                            {Student.Course}
                          </p>
                          <p className="text-muted font-size-sm">
                            {Student.Area}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card mt-3">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 className="mb-0">All Subjects</h6>
                        <span className="text-secondary"></span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 className="mb-0">Maths</h6>
                        <span className="text-secondary"></span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 className="mb-0">Physics</h6>
                        <span className="text-secondary"></span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 className="mb-0">Chemistry</h6>
                        <span className="text-secondary"></span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 className="mb-0">English</h6>
                        <span className="text-secondary"></span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 className="mb-0">Hindi</h6>
                        <span className="text-secondary"></span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-8" >
                  <div className="card mb-3 profil">
                    <div className="card-body">
                      <div className="row dat">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Full Name :</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          {Student.fullName}
                        </div>
                      </div>
                      <div className="row dat">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Course Name :</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          {Student.Course}
                        </div>
                      </div>

                      <div className="row dat">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Email : </h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          {Student.Email}
                        </div>
                      </div>

                      <div className="row dat">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Mobile No :</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          {Student.MobileNo}
                        </div>
                      </div>
                      <div className="row dat">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Mother Name :</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          {Student.MotherName}
                        </div>
                      </div>
                      <div className="row dat">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Father Name :</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          {Student.FatherName}
                        </div>
                      </div>

                      <div className="row dat">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Parent Mobile No :</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          {Student.parentMobileNo}
                        </div>
                      </div>

                      <div className="row dat">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Full Address :</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          {Student.FullAdress}
                        </div>
                      </div>

                      <div className="row ">
                        <div className="col-sm-12 text-end"></div>
                      </div>
                    </div>
                  </div>

                  <div className="row gutters-sm">
                    <div className="col mb-3">
                      <div className="card h-100">
                        <div className="card-body">
                          <h6 className="d-flex align-items-center mb-3">
                            Course Status
                          </h6>
                          <small>Maths</small>
                          <div
                            className="progress mb-3"
                            style={{ height: "5px" }}
                          >
                            <div
                              className="progress-bar bg-primary"
                              role="progressbar"
                              style={{ width: "60%" }}
                              aria-valuenow="80"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <small>Chemistry</small>
                          <div
                            className="progress mb-3"
                            style={{ height: "5px" }}
                          >
                            <div
                              className="progress-bar bg-primary"
                              role="progressbar"
                              style={{ width: "32%" }}
                              aria-valuenow="72"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <small>Physics</small>
                          <div
                            className="progress mb-3"
                            style={{ height: "5px" }}
                          >
                            <div
                              className="progress-bar bg-primary"
                              role="progressbar"
                              style={{ width: "59%" }}
                              aria-valuenow="89"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <small>Hindi</small>
                          <div
                            className="progress mb-3"
                            style={{ height: "5px" }}
                          >
                            <div
                              className="progress-bar bg-primary"
                              role="progressbar"
                              style={{ width: "25%" }}
                              aria-valuenow="55"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <small>English</small>
                          <div
                            className="progress mb-3"
                            style={{ height: "5px" }}
                          >
                            <div
                              className="progress-bar bg-primary"
                              role="progressbar"
                              style={{ width: "66%" }}
                              aria-valuenow="66"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profil;

import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS

function App() {
  return (
    <div className="app-container">
      <div className="container">
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="..." className="d-block w-100" alt="First slide" />
            </div>
            <div className="carousel-item">
              <img src="..." className="d-block w-100" alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img src="..." className="d-block w-100" alt="Third slide" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <ul className="list-group">
            <li className="list-group-item">Consultation</li>
            <li className="list-group-item">Appointment</li>
          </ul>
        </div>
        <div className="col-md-9 main-content">
          {/* Your main content goes here */}
        </div>
      </div>
    </div>
  );
}

export default App;



// import React from 'react';
// import './App.css'; // Assuming you have a CSS file for styling

// function App() {
//   return (
//     <div className="app-container">
//       <div className="sidebar">
//         <ul>
//           <li>Consultation</li>
//           <li>Appointment</li>
//         </ul>
//       </div>
//       <div className="main-content">
//         {/* Your main content goes here */}
//       </div>
//     </div>
//   );
// }

// export default App;

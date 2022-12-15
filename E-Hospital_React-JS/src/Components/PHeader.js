import React from 'react'
function PHeader(){
    return(
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="Dash">Home <span class="sr-only">(current)</span></a>
      </li>
      
      <li class="nav-item">
        <a class="nav-link" href="#">Profile</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Prescription</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Appointments <br></br>
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="BookApp">Book</a> <br></br>
          <a class="dropdown-item" href="CheckApp">Check</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="HospitalList">Hospital List</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">AboutUs</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="LogOut">Logout</a>
      </li>
    </ul>
    {/* <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search by district" aria-label="Search" >
      <button class="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
    </form> */}

  </div>
    )
}
export default PHeader;
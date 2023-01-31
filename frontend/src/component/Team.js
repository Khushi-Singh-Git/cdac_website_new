import React from 'react';
import '../index.css';
const Team = () =>{
     return(
<>
<div>
    <br></br>
<h3><strong className="brand" style={{color:"#d1e3ff",fontFamily:"Poppins"}}>Centre for Development of Advanced Computing, (CDAC), Mohali</strong></h3> <br></br>

<div class="row row-cols-1 row-cols-md-5 g-2">
  <div class="col">
    <div class="card h-100" style={{backgroundColor:"#d2eaf7"}}>
      {/* <img src="https://i1.rgstatic.net/ii/profile.image/272169955491850-1441901782309_Q128/Jaspal-Singh-13.jpg" class="card-img-top" alt="..."></img> */}
      <div class="card-body">
        <h5 class="card-title">Dr. Jaspal Singh</h5>
        <p class="card-text">Chief Investigator</p>
        <p style={{color:"#083f5c"}}>Designation: Joint Director</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      {/* <img src="https://media-exp1.licdn.com/dms/image/C5603AQG32_-XnJgTcg/profile-displayphoto-shrink_200_200/0/1516539599208?e=1665014400&v=beta&t=kURPgB_tj4tKjFrfgfNSRKfOyR8XfGnzi1W7BoXL7g4" class="card-img-top" alt="..."></img> */}
      <div class="card-body">
        <h5 class="card-title">Mr. Shailesh Singh</h5>
        <p class="card-text">Co- investigator (CDAC)</p>
        <p style={{color:"#083f5c"}}>Designation: Principal Engineer</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100" style={{backgroundColor:"#d2eaf7"}}>
      {/* <img src="https://us.123rf.com/450wm/apoev/apoev1902/apoev190200082/125259956-person-gray-photo-placeholder-woman-in-shirt-on-white-background.jpg?ver=6" class="card-img-top" alt="..."></img> */}
      <div class="card-body">
        <h5 class="card-title"> Mrs. Brijinder Kaur</h5>
        <p class="card-text">Co- investigators (CDAC)</p>
        <p style={{color:"#083f5c"}}>Designation: Senior Technical Officer</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
     
      <div class="card-body">
        <h5 class="card-title">Dr. Deepak</h5>
        <p class="card-text">Co-investigators (GMCH)</p>
        <p style={{color:"#083f5c"}}>Designation: Professor</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100" style={{backgroundColor:"#d2eaf7"}}>
      {/* <img src="https://newsozzy.com/wp-content/uploads/2022/05/broken-dp-for-whatsapp-contact.png" class="card-img-top" alt="..."></img> */}
      <div class="card-body">
        <h5 class="card-title">Dr. Vishal Guglani</h5>
        <p class="card-text">Co-investigators (GMCH)</p>
        <p style={{color:"#083f5c"}}>Designation: Professor and head</p>
      </div>
    </div>
  </div>
</div>
  <div style={{textAlign:"center"}}>
<h4 className="my-3" style={{textAlign:"justify",color:"white",fontFamily:"Poppins"}}>Chief Investigator (CDAC): <span style={{color:"#bfd4f5"}}>Dr. Jaspal Singh</span> </h4>  
<h4 className="my-3" style={{textAlign:"justify",color:"white",fontFamily:"Poppins"}}>Co- investigators (CDAC): <span style={{color:"#bfd4f5"}}>Mr. Shailesh Singh</span> and <span style={{color:"#bfd4f5"}}>Mrs. Brijinder Kaur</span> </h4>
<h4 className="my-3" style={{textAlign:"justify",color:"white",fontFamily:"Poppins"}}>Co-investigators (GMCH): <span style={{color:"#bfd4f5"}}>Dr. Deepak </span> and <span style={{color:"#bfd4f5"}}>Dr. Vishal Guglani</span> </h4>    
</div>
</div>
<hr></hr>
        <h6 style={{textAlign:"center",color:"white",fontFamily:"poppins"}}> Developed by CDAC, Mohali</h6>

<br></br>
   </>
   );
};

export default Team;
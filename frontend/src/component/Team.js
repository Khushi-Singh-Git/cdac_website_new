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
      <img src="https://i1.rgstatic.net/ii/profile.image/272169955491850-1441901782309_Q128/Jaspal-Singh-13.jpg" class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">Dr. Jaspal Singh</h5>
        <p class="card-text">Chief Investigator</p>
        <p style={{color:"#083f5c"}}>Designation: Joint Director</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://media-exp1.licdn.com/dms/image/C5603AQG32_-XnJgTcg/profile-displayphoto-shrink_200_200/0/1516539599208?e=1665014400&v=beta&t=kURPgB_tj4tKjFrfgfNSRKfOyR8XfGnzi1W7BoXL7g4" class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">Mr. Shailesh Singh</h5>
        <p class="card-text">Co- investigator (CDAC)</p>
        <p style={{color:"#083f5c"}}>Designation: Principal Engineer</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100" style={{backgroundColor:"#d2eaf7"}}>
      <img src="https://us.123rf.com/450wm/apoev/apoev1902/apoev190200082/125259956-person-gray-photo-placeholder-woman-in-shirt-on-white-background.jpg?ver=6" class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title"> Mrs. Brijinder Kaur</h5>
        <p class="card-text">Co- investigators (CDAC)</p>
        <p style={{color:"#083f5c"}}>Designation: Senior Technical Officer</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="data:image/jpeg;base64,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" class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">Dr. Deepak</h5>
        <p class="card-text">Co-investigators (GMCH)</p>
        <p style={{color:"#083f5c"}}>Designation: Professor</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100" style={{backgroundColor:"#d2eaf7"}}>
      <img src="https://newsozzy.com/wp-content/uploads/2022/05/broken-dp-for-whatsapp-contact.png" class="card-img-top" alt="..."></img>
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
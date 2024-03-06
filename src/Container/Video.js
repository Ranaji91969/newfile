import React from 'react';

const videos = document.querySelectorAll('  video');


videos.forEach(video => {
  video.addEventListener('mouseenter', () => {
    video.play();
  });
  
  video.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 2;
  });
});



const video = () => {
  return (
    <div>   
      <h3>Songs</h3>

<div className="Videosplay">
    <div className="gallery">
      <h6>Add to Vimeo Staff Picks</h6>  
    <video width="280
    " height="360" title="Advertisement"
    webkit-playsinline="true"
    playsinline="true">
         <source
          src="waterplane_hydroplane_floatplane_739.mp4"
          type="video/mp4"
          autoPlay
        />
     </video>
     Waterplane
     <br/>
     50M-view.
     <br/>
     <br/>
     5911 rect.
    </div>
  </div>

  
  
  <div className="Videosplay">
    <div className="gallery">
    <h6>Add to Vimeo Staff Picks</h6>  
    <video width="280
    " height="360" title="Advertisement"
    webkit-playsinline="true"
    playsinline="true">
        <source
          src="Judaa_h.mp4"
          type="video/mp4"
          autoPlay
        />
     </video>Level - Sidhu Moose Wala
     <br/>
     20M-view.
     <br/>
     <br/>
     5911 rect.
     </div>
  </div>
  
  <div className="Videosplay">
    <div className="gallery">
    <h6>Add to Vimeo Staff Picks</h6>  
    <video width="280
    " height="360" title="Advertisement"
    webkit-playsinline="true"
    playsinline="true">
        <source
          src="Judaa_h.mp4"
          type="video/mp4"
          autoPlay
        />
     </video>Amrinder Gill
     <br/>
     80K-view.
    <br/>
     Gill rect.</div>
  </div>
  <h3>Songs</h3>
  
  <div className="Videosplay">
    <div className="gallery">
    <h6>Add to Vimeo Staff Picks</h6>  
    <video width="280
    " height="360" title="Advertisement"
    webkit-playsinline="true"
    playsinline="true">
        <source
          src="cockpit_airplane_pilots_co_pilot_547.mp4"
          type="video/mp4"
          autoPlay
        />
     </video>Pilot Singh
     <br/>
     50K-view.
    <br/>
     Whitehell rect.</div>
   </div>
  
  
  <div className="Videosplay">
    <div className="gallery">
    <h6>Add to Vimeo Staff Picks</h6>  
    <video width="280
    " height="360" title="Advertisement"
    webkit-playsinline="true"
    playsinline="true">
        <source
          src="diving_seal_underwater_animals_949.mp4"
          type="video/mp4"
          autoPlay
        />
     </video>Diving team
     <br/>
     50K-view.
    <br/>
     Whitehell rect.</div>
   </div>
  
  <div className="Videosplay">
    <div className="gallery">
    <h6>Add to Vimeo Staff Picks</h6>  
    <video width="280
    " height="360" title="Advertisement"
    webkit-playsinline="true"
    playsinline="true">
        <source
          src="karate_martial_arts_blur_bokeh_1048.mp4"
          type="video/mp4"
          autoPlay
        />
     </video>Martial ARts
     <br/>
     20M-view.
     <br/>
     <br/>
     5911 rect.
     </div>
  </div>
  
  <div className="Videosplay">
    <div className="gallery">
    <h6>Add to Vimeo Staff Picks</h6>  
    <video width="280
    " height="360" title="Advertisement"
    webkit-playsinline="true"
    playsinline="true">
        <source
          src="waterplane_hydroplane_floatplane_739.mp4"
          type="video/mp4"
          autoPlay
        />
     </video>Hydroplane
     <br/>
     80K-view.
    <br/>
     Gill rect.</div>
  </div>
  
  <div className="Videosplay">
    <div className="gallery">
      <h6>Add to Vimeo Staff Picks</h6>  
    <video width="280
    " height="360" title="Advertisement"
    webkit-playsinline="true"
    playsinline="true">
         <source
          src="cockpit_airplane_pilots_co_pilot_547.mp4"
          type="video/mp4"
          autoPlay
        />
     </video>
     Mr singh Pilot
     <br/>
     50M-view.
     <br/>
     <br/>
     5911 rect.
    </div>
  </div>
  <div className="clearfix"></div></div>
  )
}

export default video;
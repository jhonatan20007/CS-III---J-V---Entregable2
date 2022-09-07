
class HolaMundo extends HTMLElement {
    constructor() {
      super();
     
    };

    connectedCallback(){
        this.innerHTML = `<div class="BordeBanner">
        <nav class="navbar" style="background-color: transparent;"> 
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                <img src="fonts/SVG/earth.svg" width="30" height="24" class="d-inline-block align-text-top">
                T I C K E T S  &nbsp B O L E T A S
              </a>
              <form class="d-flex" role="search">
                <button class="btn btn-outline-success " type="submit">Events</button>&nbsp;
                <button class="btn btn-outline-success" type="submit">About us</button>
              </form>
            </div>
          </nav>
          <br>
          <div class="banner" >
            <div class="inner-banner" style="background-color: #98DFEA;">
              <p>Our Summer 2017 Sale has finally arrived.</p>
              <a href="#"><button>GRAB THE DEALS</button></a>
            </div>
          </div>
          <br>
        </div> `;
    }
  };
  
  // Agregamos el componente a los elementos personalizados o propios
  window.customElements.define('hola-mundo', HolaMundo);
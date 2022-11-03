
    import React, { Component } from "react";
    import image1 from '../images/lifequote1.png';
    import image2 from '../images/lifequote2.jpg';

    export default class HomeComponent extends Component{
        render(){
            return(
                <>
    <div className="jumbotron jumbotron-fluid newstyle">
        <div className="container">
            <h1 className="display-3">Online Shopping</h1>
            <p className="lead">one stop solution for all daily needs</p>
            <hr className="my-2" />
        </div>
    </div>
   
    <div className="container" style={{marginTop:"30px"}}>
        <div className="card-deck">
            <div className="card">
                <img className="card-img-top" src={image2} alt="life quote" />
                <div className="card-body">
                    <h4 className="card-title">Life Quote</h4>
                    <p className="card-text">Life</p>
                </div>
            </div>
            <div className="card">
                <img className="card-img-top" src={image1} alt="life quote"/>
                <div className="card-body">
                    <h4 className="card-title">Life Quote</h4>
                    <p className="card-text">Life</p>
                </div>
            </div>
            <div className="card">
                <img className="card-img-top" src={image2} alt="life quote" />
                <div className="card-body">
                    <h4 className="card-title">Life Quote</h4>
                    <p className="card-text">Life</p>
                </div>
            </div>
            <div className="card">
                <img className="card-img-top" src={image1} alt="life quote" />
                <div className="card-body">
                    <h4 className="card-title">Life Quote</h4>
                    <p className="card-text">Life</p>
                </div>
            </div>
        </div>
    </div>
    <footer className="text-center text-white" style={{backgroundColor: "#f1f1f1"}}>

        <div className="container pt-4">
    
          <section className="mb-4">
      
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
              ><i className="fab fa-facebook-f"></i
            ></a>
      
      
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
              ><i className="fab fa-twitter"></i
            ></a>
      
   
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
              ><i className="fab fa-google"></i
            ></a>
      
       
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
              ><i className="fab fa-instagram"></i
            ></a>
      

            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
              ><i className="fab fa-linkedin"></i
            ></a>
     
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
              ><i className="fab fa-github"></i
            ></a>
          </section>

        </div>
  
        <div className="text-center text-dark p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
          © 2023 Copyright:
          <a className="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>

      </footer>
      </>
      )
        }
}
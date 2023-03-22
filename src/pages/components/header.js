import { height } from "@mui/system";
import React from "react"
import "./css/header.css"

const Header = () =>{
    return (  
        <header class="header" style={{position: "fixed", width: "100%", zIndex: "100"}}>
            <nav class="navbar navbar-expand-lg navbar-dark shadow-5-strong">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#" style={{marginLeft: "10%"}}>Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation" style={{marginRight: "30px"}}>
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarScroll" style={{margin: "auto"}}>
                        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{bsScrollHeight: "100px", margin: "0 auto"}}>
                            <li class="nav-item" id="li">
                            <a class="nav-link active" aria-current="page" href="/"><p class="p">Home</p></a>
                            </li>
                            <li class="nav-item" id="li">
                            <a class="nav-link" href="/privat"><p class="p">Privat</p></a>
                            </li>
                            <li class="nav-item" id="li">
                            <a class="nav-link" href="/login"><p class="p">Login</p></a>
                            </li>
                            <li class="nav-item" id="li">
                            <a class="nav-link" href="/signin"><p class="p">Sign in</p></a>
                            </li>
                            <li class="nav-item" id="li" style={{width: "150px"}}>
                                <div class="dropdown">
                                    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{width: "100%", height: "40px", margin: "auto", padding: "0 0 0 10px" }}>
                                        <p class="p" style={{float: "left"}}>Link</p>
                                    </a>

                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    {/*<form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>*/}
                    </div>
                </div>
            </nav>
        </header> 
    );
  }

export default Header;
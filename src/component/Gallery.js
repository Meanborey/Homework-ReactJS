export default function Gallery() {
    return ( 
            <section>
            {/* navbar */}
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStsnCPFliH0XDHeIwzKTfn8b96x8bf7Ptzjw&usqp=CAU"/>
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-primary" type="submit">Search</button>
                    </form>
                    </div>
                </div>
                </nav> 
                {/* slide show */}
                <div class="controller">
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="https://iso.500px.com/wp-content/uploads/2015/08/dog1_Cover.jpeg" class="d-block w-100 height: 400px" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src="https://drscdn.500px.org/photo/43388692/m%3D900/v2?sig=6c8c83dab0911a06bc67bb6c2a339ee3a7a6b8b2e761b4db1022802c9252460f" class="d-block w-100 height: 400px" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src="https://drscdn.500px.org/photo/81178411/m%3D900/v2?sig=4548a6c930c9a2e5baa7edb5c1462468d8d214f26de3234bb8640b531db45f0f" class="d-block w-100 height: 400px" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
                </div>
               {/* card */}
               <h1>Photos and Information for Dogs</h1>
               <div class="row">
                <div class="col-12 col-sm-6 col-md-4 col-xl-3">
                <div class="card" >
                <img src="https://www.shutterstock.com/image-photo/boxer-dog-puppy-full-height-260nw-2275185673.jpg" class="card-img-top" alt="..."/>
                <div class="card-body shadow">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Buy Now</a>
                </div>
                </div>
                </div>

                <div class="col-12 col-sm-6 col-md-4 col-xl-3"><div class="card" >
                <img src="https://img2.thejournal.ie/article/4903445/river/?height=400&version=4903447" class="card-img-top" alt="..."/>
                <div class="card-body shadow">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Buy Now</a>
                </div>
                </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-xl-3"><div class="card" >
                <img src="https://www.fastly.io/image.jpg?height=200&dpr=2" class="card-img-top" alt="..."/>
                <div class="card-body shadow">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Buy Now</a>
                </div>
                </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-xl-3"><div class="card" >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBuj2t-TkkkF0-xX90HzkL8paMV4TR8G2kuw&usqp=CAU" class="card-img-top" alt="..."/>
                <div class="card-body shadow">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Buy Now</a>
                </div>
                </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-xl-3"><div class="card" >
                <img src="https://img.freepik.com/premium-photo/white-puppy-are-sitting-snow-sunny-day-generative-ai_791958-141.jpg" class="card-img-top" alt="..."/>
                <div class="card-body shadow">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Buy Now</a>
                </div>
                </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-xl-3"><div class="card" >
                <img src="https://i.insider.com/5b71941bbda1c71d008b4599?width=1000&format=jpeg&auto=webp" class="card-img-top" alt="..."/>
                <div class="card-body shadow">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Buy Now</a>
                </div>
                </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-xl-3"><div class="card" >
                <img src="https://www.rd.com/wp-content/uploads/2020/11/GettyImages-1124309626.jpg" class="card-img-top" alt="..."/>
                <div class="card-body shadow">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Buy Now</a>
                </div>
                </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-xl-3"><div class="card" >
                <img src="https://hips.hearstapps.com/hmg-prod/images/beagle-dog-breed-of-the-month-1619614746.jpg" class="card-img-top" alt="..."/>
                <div class="card-body shadow">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Buy Now</a>
                </div>
                </div>
                </div>
               </div>
               {/* Feedback */}
               <from><div class="col-mb-3 ">
                <label for="validationTextarea" class="form-label"></label>
                <textarea class="form-control is-primary " id="validationTextarea" placeholder="Feedback" required></textarea>
                <div class="invalid-feedback">
                Please enter a message for feedback.
                </div>
                <div class="mb-3">
                <button class="btn btn-primary" type="submit" disabled>Submit</button>
            </div>
            </div></from>
               {/* footer */}
               <div class="container py-5">
                <div class="row">
                <div class="col-lg-3 mb-3 ">
                    <a class="d-inline-flex align-items-center mb-2 link-dark text-decoration-none" href="/" aria-label="dog">
                    <svg xmlns="https://www.mydogsname.com/images/my-dogs-name-logo.svg" width="40" height="32" class="d-block me-2" viewBox="0 0 118 94" role="img"><title>dog</title><path fill-rule="evenodd" clip-rule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z" fill="currentColor"></path></svg>
                    <span class="fs-5">DOG</span>
                    </a>
                    <ul class="list-unstyled small text-muted">
                    <li class="mb-2">Designed and built with all the love in the world by the <a href="/docs/5.0/about/team/">Dog team</a> with the help of <a href="https://github.com/twbs/bootstrap/graphs/contributors">our contributors</a>.</li>
                    <li class="mb-2">Code licensed <a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank" rel="license noopener">MIT</a>, docs <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="license noopener">CC BY 3.0</a>.</li>
                    <li class="mb-2">Currently v5.0.2.</li>
                    <li class="mb-2">Analytics by <a href="https://usefathom.com/ref/ADZSBE" target="_blank" rel="noopener">Fathom</a>.</li>
                    </ul>
                </div>
                <div class="col-6 col-lg-2 offset-lg-1 mb-3">
                    <h5>Links</h5>
                    <ul class="list-unstyled">
                    <li class="mb-2"><a href="/">Home</a></li>
                    <li class="mb-2"><a href="/docs/5.0/">Docs</a></li>
                    <li class="mb-2"><a href="/docs/5.0/examples/">Examples</a></li>
                    <li class="mb-2"><a href="https://themes.getbootstrap.com/">Themes</a></li>
                    <li class="mb-2"><a href="https://blog.getbootstrap.com/">Blog</a></li>
                    <li class="mb-2"><a href="https://cottonbureau.com/people/bootstrap">Swag Store</a></li>
                    </ul>
                </div>
                <div class="col-6 col-lg-2 mb-3">
                    <h5>Guides</h5>
                    <ul class="list-unstyled">
                    <li class="mb-2"><a href="/docs/5.0/getting-started/">Getting started</a></li>
                    <li class="mb-2"><a href="/docs/5.0/examples/starter-template/">Starter template</a></li>
                    <li class="mb-2"><a href="/docs/5.0/getting-started/webpack/">Webpack</a></li>
                    <li class="mb-2"><a href="/docs/5.0/getting-started/parcel/">Parcel</a></li>
                    </ul>
                </div>
                <div class="col-6 col-lg-2 mb-3">
                    <h5>Projects</h5>
                    <ul class="list-unstyled">
                    <li class="mb-2"><a href="https://github.com/twbs/bootstrap">Poodle</a></li>
                    <li class="mb-2"><a href="https://github.com/twbs/bootstrap/tree/v4-dev">Bulldog</a></li>
                    <li class="mb-2"><a href="https://github.com/twbs/icons">Icons</a></li>
                    <li class="mb-2"><a href="https://github.com/twbs/rfs">RFS</a></li>
                    <li class="mb-2"><a href="https://github.com/twbs/bootstrap-npm-starter">npm starter</a></li>
                    </ul>
                </div>
                <div class="col-6 col-lg-2 mb-3">
                    <h5>Community</h5>
                    <ul class="list-unstyled">
                    <li class="mb-2"><a href="https://github.com/twbs/bootstrap/issues">Issues</a></li>
                    <li class="mb-2"><a href="https://github.com/twbs/bootstrap/discussions">Discussions</a></li>
                    <li class="mb-2"><a href="https://github.com/sponsors/twbs">Corporate sponsors</a></li>
                    <li class="mb-2"><a href="https://opencollective.com/bootstrap">Open Collective</a></li>
                    <li class="mb-2"><a href="https://stackoverflow.com/questions/tagged/bootstrap-5">Dog Breeds</a></li>
                    </ul>
                </div>
                </div>
            </div>

            </section>
            
            ) 
        }
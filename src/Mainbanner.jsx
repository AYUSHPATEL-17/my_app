import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/assets/css/styling.css";

const Mainbanner = () => {
    return (
        <>
            <main>
                <section>
                    <Carousel fade>

                        <Carousel.Item>
                            <div className="d-block w-100 img1 position-relative" src="" >

                                <Carousel.Caption>
                                    <div className=" position-absolute text-dark container    over text-center bg-light  p-5">

                                        <h1 className='mb-3'>Welcome to Medicio</h1>
                                        <p className='lead mb-3'>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel.</p>
                                        <button className='appointment-btn'>Read More</button>

                                    </div>
                                </Carousel.Caption>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="d-block w-100 img2 position-relative" src="" >
                                <Carousel.Caption>
                                    <div className="container position-absolute  text-dark    over text-center bg-light  p-5">
                                        <h1 className='mb-3'>Lorem Ipsum Dolor</h1>
                                        <p className='lead mb-3'>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel.</p>
                                        <button className='appointment-btn'>Read More</button>
                                    </div>
                                </Carousel.Caption>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="d-block w-100  img3 position-relative" src="" >
                                <Carousel.Caption>
                                    <div className="container position-absolute  text-dark     over text-center bg-light  p-5">
                                        <h1 className='mb-3'>Sequi ea ut et est quaerat</h1>
                                        <p className='lead mb-3'>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel.</p>
                                        <button className='appointment-btn'>Read More</button>
                                    </div>
                                </Carousel.Caption>
                            </div>
                        </Carousel.Item>
                    </Carousel>

                </section>

                <section>
                    <div className="container p-4 mt-3">
                        <div className="row  align-content-center justify-content-between">
                            <div className="col-3">
                                <div className="card border-0 rounded-3 shadow-lg icon-box p-3" >
                                    <h5 className='fw-semibold'>Lorem Ipsum</h5>
                                    <p> Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>

                                </div>
                            </div>
                            <div className="col-3">
                                <div className="card border-0 rounded-3 shadow-lg icon-box p-3" >
                                    <h5 className='fw-semibold'>Sed ut perspiciatis</h5>
                                    <p>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>

                                </div>
                            </div>
                            <div className="col-3">
                                <div className="card border-0 rounded-3 shadow-lg icon-box p-3" >
                                    <h5 className='fw-semibold'> Nemo Enim</h5>
                                    <p>
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>

                                </div>
                            </div>
                            <div className="col-3">
                                <div className="card border-0 rounded-3 shadow-lg icon-box p-3" >
                                    <h5 className='fw-semibold'>Lorem Ipsum</h5>
                                    <p> Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, dicta!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </main>
        </>
    )
}

export default Mainbanner;

import { Modal } from 'react-bootstrap'
import Header from '../user/layout/Header'
import FooterHome from './FooterHome'
import SignupPage from '../auth/SignupPage';
import Login from '../auth/Login';
import ForgotPassword from '../auth/ForgotPassword';
import ResetPassword from '../auth/ResetPasswrd';
import { useEffect, useState } from 'react';

import { arrayIndex, availableApi, getTokenData } from '../../Utils';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
    const [show, setShow] = useState(false);
    const [modalName, setModalName] = useState("");
    const navigate = useNavigate()
    useEffect(() => {
        if (getTokenData()) {
            // navigate(-1)
        }
    })

    const [selectedCard, setSelectedCard] = useState(null);

    const cards = [
        {
            title: "PF Withdrawal",
            img: "/assets/img/dev.png",
            details:
                "Lorem ipsum dolor sit amet consectetur. Facilisis consequat cursus enim sed. Sollicitudin et nullam pellentesque id diam sit mollis. Faucibus vehicula.",
        },
        {
            title: "PF Transfer",
            img: "/assets/img/uat.png",
            details:
                "Lorem ipsum dolor sit amet consectetur. Facilisis consequat cursus enim sed. Sollicitudin et nullam pellentesque id diam sit mollis. Faucibus vehicula.",
        },
        {
            title: "KYC",
            img: "/assets/img/prod.png",
            details:
                "Lorem ipsum dolor sit amet consectetur. Facilisis consequat cursus enim sed. Sollicitudin et nullam pellentesque id diam sit mollis. Faucibus vehicula.",
        },
        {
            title: "Claim",
            img: "/assets/img/prod.png",
            details:
                "Lorem ipsum dolor sit amet consectetur. Facilisis consequat cursus enim sed. Sollicitudin et nullam pellentesque id diam sit mollis. Faucibus vehicula.",
        },
        {
            title: "Others",
            img: "/assets/img/prod.png",
            details:
                "Lorem ipsum dolor sit amet consectetur. Facilisis consequat cursus enim sed. Sollicitudin et nullam pellentesque id diam sit mollis. Faucibus vehicula.",
        },
    ];
    return (
        <div>
            <Header />
            <div className="gifDiv">
                <div style={{ padding: '3em 6em', display: 'flex', justifyContent: "space-between"}}>
                    <div className="gif-content">
                        <p className='mb-0 '>Welcome to</p>
                        <div >One EPF Solution</div>
                        <small>🤔 Do you know if your Provident Fund is Withdrawable?.</small>
                        <small>🤔 Incorrect KYC & personal details.</small>
                        <small>🤔 Not Sure if you are EPS member.</small>
                        <small>🤔 Missing Contributions from employer.</small>
                        <small>🤔 Data entry mistakes by Employer.</small>
                        <button className='btn btn-primary' onClick={() => { navigate('/get-started') }}>Get Started For Solution<i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                    <div className="bannerImg">
                        <img src="/assets/img/epf/bannerside.png" alt="Na" className='w-100' style={{ height: '500px' }} />
                    </div>
                </div>
                <div className='howItWorks'>
                    <div className='titleDiv'> How it Works?</div>
                    <p>we simplify the process of withdrawing your provident fund. Our expert team is dedicated to guiding you through every step, ensuring your documents are in order and providing personalized assistance.</p>
                    <div className="card-section row g-0 mt-5 pb-5">
                        <div className="card col-3 m-auto">
                            <div className="card-body">
                                <div className='content-title'>Sign Up to Get Started</div>
                                <div className='content-data'>Create your account to explore and manage powerful APIs.</div>
                                <div className="">
                                    <img src="/assets/img/createaccount.png" alt="NA" className='w-100' />
                                </div>
                            </div>
                        </div>
                        <div className="col-1 d-flex align-items-center justify-content-center">
                            <img src="/assets/img/prime_forward.png" alt='Na' className='forword-icon' />
                        </div>
                        <div className="card col-3 m-auto">
                            <div className="card-body">
                                <div className='content-title'>Select Our Available API</div>
                                <div className='content-data'>Explore and select from our wide range of available APIs.</div>
                                <div className="">
                                    <img src="/assets/img/sidebar.png" alt="NA" className='w-100' />
                                </div>
                            </div>
                        </div>
                        <div className="col-1 d-flex align-items-center justify-content-center">
                            <img src="/assets/img/prime_forward.png" alt='Na' className='forword-icon' />
                        </div>
                        <div className="card col-3 m-auto">
                            <div className="card-body">
                                <div className='content-title'>Test it Out</div>
                                <div className='content-data'>Use our interactive mock API to test your integration.</div>
                                <div className="">
                                    <img src="/assets/img/commingsoon.png" alt="NA" className='w-100' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="goLiveSection py-5">
                    <div className="titleDiv">Select your Provident Fund issue</div>
                    <div className="section-details">
                        Get transparent and unbiased guidance on your PF and EPF query. Our
                        experts will always look out for your best interest..
                    </div>

                    {/* Card Section */}
                    <div className="card-section row g-4 mt-5 pb-5">
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className="card col-2 m-auto"
                                onClick={() => setSelectedCard(card)}
                                style={{ cursor: "pointer" }}
                            >
                                <div className="card-body p-4 text-center">
                                    <div className="content-title">{card.title}</div>
                                    <img src={card.img} alt="NA" className="w-100" />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Show Details on Same Page */}
                    {selectedCard && (
                        <div className="selected-card-details mt-4 p-4 border rounded">
                            <h3>{selectedCard.title}</h3>
                            <img
                                src={selectedCard.img}
                                alt="NA"
                                style={{ maxWidth: "150px", display: "block", marginBottom: "1rem" }}
                            />
                            <p>{selectedCard.details}</p>
                        </div>
                    )}
                </div>
                <div className="availableApi py-5">
                    <div className='titleDiv'> Service Overview</div>
                    <div className='section-details'>Get transparent and unbiased guidance on your PF and EPF query. Our experts will always look out for your best interest..</div>
                    <div className="card-section mt-5 pb-5">
                        {availableApi.map((card, index) => (
                            <div key={arrayIndex('card', index)} className="card" style={{ width: '308px' }}>
                                <div className="card-body p-4">
                                    <img src="/assets/img/bullet.png" alt="NA" className='' />
                                    <div className="content-title my-3">
                                        {card.title}
                                    </div>
                                    <div className="content-details">
                                        {card.details}
                                    </div>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </div>
                <FooterHome />
            </div>
            <Modal size="lg" show={show} onHide={() => setShow(false)} centered>
                <Modal.Header closeButton className="border-bottom-0 py-0"></Modal.Header>
                <Modal.Body className="pt-0">
                    <div className="col-12 px-3">
                        <div className="row">
                            <div className="col-xl-5 col-lg-5 col-md-5 col-12 signUpsideBanner">
                                <img src="/assets/img/Bajaj Logo.png" alt="NA" className="mt-2" />
                                <div className="authContent">
                                    <h1 className="title">
                                        Welcome to My EPF Portal.
                                    </h1>
                                    <p>
                                        Your one-stop destination for accessing, integrating, and managing powerful APIs that drive seamless digital experiences.
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-7 col-md-7 col-12 ps-4">
                                {modalName == 'signup' && <SignupPage setModalName={setModalName} setShow={setShow} />}
                                {modalName == 'login' && <Login setModalName={setModalName} setShow={setShow} />}
                                {modalName == 'forget-pass' && <ForgotPassword setModalName={setModalName} setShow={setShow} />}
                                {modalName == 'reset-pass' && <ResetPassword setModalName={setModalName} setShow={setShow} />}
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default LandingPage

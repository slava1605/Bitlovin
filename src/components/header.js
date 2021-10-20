import React, { useState, useEffect } from 'react';
import cardIcon from "../assets/images/card-icon.png";
import logoIcon from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useRacingContext } from '../helpers/hooks/useRacingContext';
import CollapseTransition from 'react-collapse-transition';
import checkIfMobile from '../utils/isMobile';

const Header = () => {
	const [isRacing, setIsRacing] = useState(false);
	const [isChecken, setIsChecken] = useState(false);
	const [isShow, setIsShow] = useState(false);
	const { headerFocus, setHeaderFocus } = useRacingContext();
	const [isMobileMenuOpened, setMobileMenuOpened] = useState(false);
	const [isMobile, setIsMobile] = useState(checkIfMobile());

	useEffect(() => {
		setMobileMenuOpened(false);
		window.addEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		setIsRacing(false);
		setIsChecken(false);
	}, [headerFocus]);

	const handleResize = (e) => {
		setIsMobile(checkIfMobile());
	}

	const toggleRacing = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setIsRacing(!isRacing);
		setIsChecken(false);
	};

	const toggleChicken = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setIsChecken(!isChecken);
		setIsRacing(false);
	};

	const toggleShow = (e) => {
		e.preventDefault();
		setIsShow(!isShow);
	};

	const handleMobileMenu = (e) => {
		setMobileMenuOpened(!isMobileMenuOpened);
	};

	return (
		<div className="navbar navbar-default mynav" onClick={() => setHeaderFocus(!headerFocus)}>
			<div className="container">
				{/* Brand and toggle get grouped for better mobile display */}
				<div className="navbar-header">
					<button type="button" className={`navbar-toggle ${!isMobileMenuOpened?"collapsed":""}`} onClick={handleMobileMenu}>
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
					<a className="" href="/">
						<img src={logoIcon} className="logo" alt="" />
					</a>
				</div>
			
				<CollapseTransition visible={!isMobile || isMobileMenuOpened}>
					<div id="bs-example-navbar-collapse-1" >
						<ul className="nav navbar-nav navbar-right">
							<li className={`dropdown ${isRacing ? "open" : ''}`}>
								<a
									href="/"
									onClick={toggleRacing}
									className="dropdown-toggle"
								>
									Racing
									<span className="caret"></span>
								</a>
								<ul className="dropdown-menu">
									<li>
										<Link
											to="/"
											onClick={() => setMobileMenuOpened(false)}
										>
											Enter Race
										</Link>
									</li>
									<li>
										<Link
											to="/scheduled-races"
											onClick={() => setMobileMenuOpened(false)}
										>
											Scheduled
										</Link>
									</li>
									<li>
										<Link 
											to="/results"
											onClick={() => setMobileMenuOpened(false)}
										>
											Results
										</Link>
									</li>
								</ul>
							</li>
							<li className={`dropdown ${isChecken ? "open" : ''}`}>
								<a
									href="/"
									className="dropdown-toggle"
									onClick={toggleChicken}
								>
									Chickens <span className="caret"></span></a>
								<ul className="dropdown-menu">
									<li>
										<Link
											to="/my-coop"
											onClick={() => setMobileMenuOpened(false)}
										>
											My Coop
										</Link>
									</li>
									<li><a href>Search</a></li>
								</ul>
							</li>
							<li><a href>Tutorial</a></li>
							<li>
								<div className="pricing-section">
									<div
										className="show-width"
										style={isShow ? {visibility: 'visible'} : {visibility: 'hidden'}}
									>
										<ul className="balance-sheet">
											<li>ETH BALANCE <span>$0.00 USD</span></li>
											<li>WETH BALANCE <span>$148.86 USD</span></li>
										</ul>
									</div>
									<a
										href="/"
										onClick={toggleShow}
										className="icon-show"
									>
										<img src={cardIcon} className="icon-card" alt="" />
										<span className="open">Show</span>
									</a>
								</div>
							</li>
						</ul>
					</div>	
				</CollapseTransition>
			</div>
		</div>
	)
};

export default Header;
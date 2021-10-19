import React, { useState, useEffect } from 'react';
import cardIcon from "../assets/images/card-icon.png";
import logoIcon from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useRacingContext } from '../helpers/hooks/useRacingContext';

const Header = () => {
	const [isRacing, setIsRacing] = useState(false);
	const [isChecken, setIsChecken] = useState(false);
	const [isShow, setIsShow] = useState(false);
	const { headerFocus, setHeaderFocus } = useRacingContext();

	useEffect(() => {
		setIsRacing(false);
		setIsChecken(false);
	}, [headerFocus]);

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

	return (
		<div className="navbar navbar-default mynav" onClick={() => setHeaderFocus(!headerFocus)}>
			<div className="container">
				{/* Brand and toggle get grouped for better mobile display */}
				<div className="navbar-header">
					<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
					<a className="" href="/">
						<img src={logoIcon} className="logo" alt="" />
					</a>
				</div>
				{/* <!-- Collect the nav links, forms, and other content for toggling --> */}
				<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
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
								<li><Link to="/">Enter Race</Link></li>
								<li><Link to="/scheduled-races">Scheduled</Link></li>
							 	<li><Link to="/results">Results</Link></li>
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
								<li><Link to="/my-coop">My Coop</Link></li>
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
			</div>
		</div>
	)
};

export default Header;
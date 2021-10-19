import React, { useState, useEffect } from "react";
import ChickenSmImg from "../assets/images/chicken-sm.png";
import { useRacingContext } from "../helpers/hooks/useRacingContext";
import ResultsTable from "../components/resultsTable";
import ResultsFilterModal from "../components/modals/resultsFilterModal.js";
import { Link } from "react-router-dom";

const RacingPending = () => {
	const { racingPendingData } = useRacingContext();
	const [_racingPendingData, setRacingPendingData] = useState([]);

	useEffect(() => {
		let temp = [];
		for (let i = 0; i < racingPendingData.length; i+=3) {
			let _temp = [];
			for (let j = i; j < i + 3; j++) {
				_temp.push(racingPendingData[j]);
			}
			temp.push(_temp);
		}
		setRacingPendingData(temp);

		return () => {
			setRacingPendingData();
		}
	}, []);

  return (
		<div className="racing-pending">
			<div className="container">
				<div className="racing-top">
					<div>
						<h3>Juvinile Jublie</h3>
						<p>
								<a href="" className="btn btn-race">Enter Race</a>
						</p>
					</div>
					<div className="text-right">
						<h4>Prizepool <span>$24.63 USD</span></h4>
						<h4>Registerd <span>9/12</span></h4>
					</div>
				</div>
				<div className="racing-list">
					<ul>
						<li>Pecking Order: <span className="text-class">A</span></li>
						<li>Distance: <span>1000m</span></li>
						<li>Status: <span></span></li>
						<li>Starts At: <span></span></li>
						<li>Terrain: <span></span></li>
					</ul>
				</div>
				{_racingPendingData.map((row, index) => (
					<div className="row" key={`row_${index}`}>
						{row.map((racingPending, _index) => (
							<div className="col-md-4 col-sm-4" key={`items_${index}_${_index}`}>
								<div className="racing-box">
									<div>
										<h4>Lane {racingPending?.lane}</h4>
										<ul>
											<li><span>{racingPending?.event}</span></li>
											<li className="price-right">{racingPending?.talent}</li>
										</ul>
										<ul>
											<li>{racingPending?.heritage}</li>
											<li>{racingPending?.perfection}%</li>
											<li>{racingPending?.stock}</li>
										</ul>
									</div>
									<div className="text-center">
										<a href=""> <img src={ChickenSmImg} alt="" /></a>
									</div>
								</div>
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	)
};

export default RacingPending;

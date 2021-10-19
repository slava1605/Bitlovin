import React, { useState, useEffect } from 'react';
import { useRacingContext } from '../helpers/hooks/useRacingContext';
import TerrainIcon from "../assets/images/terrain.png";
import ChickenImg from "../assets/images/chicken.png";
import ViewChickenModal from "./modals/viewChickenModal";
import CollapseTransition from 'react-collapse-transition';
import { timeFormat1, timeFormat2 } from "../utils/timeFormat";

const ScheduledRacingTable = () => {
	const [openedRow, setOpenedRow] = useState(-1);
	const [currentRacing, setCurrentRacing] = useState();
	const { scheduledRacingData } = useRacingContext();

	useEffect(() => {
		setOpenedRow(-1);
	}, []);

	const toggleRacingOpen = (index) => {
		if (openedRow === index) {
			setOpenedRow(-1);
		} else {
			setOpenedRow(index);
		}
	};

	const closeAllModal = (e) => {
		// e.stopPropagation();
		// setCurrentRacing(null);
	};

	return (
		<>
			<table
				className="table table-stripped table-hover"
				style={{borderCollapse: 'collapse'}}
				onClick={closeAllModal}
			>
				<thead>
					<tr>
						<th>Event</th>
						<th>Location</th>
						<th>Pecking Order</th>
						<th>Distance</th>
						<th>Terrain</th>
						<th>Prize Pool</th>
						<th>Starts In</th>
					</tr>
				</thead>
				<tbody>
					{scheduledRacingData.map((row, index) => (
						<>
							<tr
								key={`${index}_row`}
								className={`accordion-toggle ${openedRow === index ? "change-bg" : ""}`}
								onClick={(e) => toggleRacingOpen(index)}
							>
								<td>{row.event}</td>
								<td>{row.location}</td>
								<td><span className="text-class">{row.peckingOrder}</span></td>
								<td>140m</td>
								<td>
									<img src={TerrainIcon} className="" data-toggle="tooltip" data-placement="bottom" title="Terrain Icon" alt="" />
								</td>
								<td><span className="price-green"> ${row.prizePool} </span> <span className="price-usd">USD</span></td>
								<td>{timeFormat2(row.startIn)}</td>
							</tr>
							<tr key={`${index}_row_1`}>
								<td colspan="8" className={'hiddenRow'}>
									<CollapseTransition visible={openedRow === index}>
										{/* <div className={`accordian-body collapse ${openedRow === index ? " in" : "out"}`} id="demo1" style={{transition: 'height 0.35'}}> */}
										<div className={`accordian-body`} id="demo1">
											<div className="top-heading">
												<div>
													<h4>Juvinile Jublie 
														<span className="starts-in">
															Starts in:  <img src="images/clock-icon.png" alt="" /> {timeFormat1(row.startIn)}
														</span>
													</h4>
												</div>
												<div>
													<a href data-toggle="modal" data-target="#select-watch" className="btn btn-enter">Watch</a>
												</div>
											</div>
											
											<table className="table">
												<thead>
													<tr>
															<th>Lane</th>
															<th>Image</th>
															<th>Name</th>
															<th>Heritage</th>
															<th>Perfection</th>
															<th>Owner</th>
															<th>History</th>
															<th>Races</th>
													</tr>
												</thead>
												<tbody>
													{row.racingChickens.map(racingDetail => (
														<tr onClick={() => setCurrentRacing(racingDetail)}>
															<td><img src={ChickenImg} className="img-pic" alt="" /></td>
															<td>{racingDetail.lane}</td>
															<td>{racingDetail.name}</td>
															<td>{racingDetail.heritage}</td>
															<td>{racingDetail.perfection}%</td>
															<td>{racingDetail.owner}</td>
															<td>{racingDetail.history}</td>
															<td>{racingDetail.races}</td>
														</tr>
													))}
												</tbody>
											</table>
										</div>
									</CollapseTransition>
								</td>
							</tr>
						</>
					))}
				</tbody>
			</table>	
			<ViewChickenModal chickenData={currentRacing} closeModal={() => setCurrentRacing(null)} />
		</>
	)
};

export default ScheduledRacingTable;

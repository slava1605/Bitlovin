
import React, { useState, useEffect } from 'react';
import { useRacingContext } from '../helpers/hooks/useRacingContext';
import TerrainIcon from "../assets/images/terrain.png";
import ChickenImg from "../assets/images/chicken.png";
import ViewChickenModal from "./modals/viewChickenModal";
import CollapseTransition from 'react-collapse-transition';

const ResultsTable = () => {
	const [openedRow, setOpenedRow] = useState(-1);
	const [currentRacing, setCurrentRacing] = useState();
	const { resultsRacingData } = useRacingContext();

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
						<th>Winner</th>
						<th>Pecking Order</th>
						<th>Distance</th>
						<th>Terrain</th>
						<th>Prize Pool</th>
					</tr>
				</thead>
				<tbody>
					{resultsRacingData.map((row, index) => (
						<>
							<tr
								key={`${index}_row`}
								className={`accordion-toggle ${openedRow === index ? "change-bg" : ""}`}
								onClick={(e) => toggleRacingOpen(index)}
							>
								<td>{row.event}</td>
								<td>{row.location}</td>
								<td>{row.winner}</td>
								<td><span className="text-class">{row.peckingOrder}</span></td>
								<td>1600m</td>
								<td>
									<img src={TerrainIcon} className="" data-toggle="tooltip" data-placement="bottom" title="Terrain Icon" alt="" />
								</td>
								<td><span className="price-green"> ${row.prizePool} </span> <span className="price-usd">USD</span></td>
							</tr>
							<tr key={`${index}_row_1`}>
								<td colspan="8"  className="hiddenRow">
									<CollapseTransition visible={openedRow === index}>
										<div id="demo1" className="accordian-body">
											<div className="top-heading">
												<div>
												</div>
												<div>
														<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn btn-enter">Watch Reply</a>
												</div>
											</div>
											<table className="table">
												<thead>
													<tr>
														<th>Position</th>
														<th>Image</th>
														<th>Name</th>
														<th>Owner</th>
														<th>Winnings</th>
														<th>Heritage</th>
														<th>Perfection</th>
														<th>History</th>
														<th>Races</th>
													</tr>
												</thead>
												<tbody>
													{row.racingChickens.map((racingDetail, _index) => (
														<tr onClick={() => setCurrentRacing(racingDetail)}>
															<td>{_index + 1} st</td>
															<td><img src={ChickenImg} className="img-pic" alt="" /></td>
															<td>{racingDetail.name}</td>
															<td>{racingDetail.owner}</td>
															<td>{racingDetail.winnings}</td>
															<td>{racingDetail.heritage}</td>
															<td>{racingDetail.perfection}%</td>
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

export default ResultsTable;

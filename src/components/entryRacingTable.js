import React, { useState, useEffect } from 'react';
import { useRacingContext } from '../helpers/hooks/useRacingContext';
import TerrainIcon from "../assets/images/terrain.png";
import ChickenImg from "../assets/images/chicken.png";
// import { entryRacingData } from "../helpers/testRacing";
import ViewChickenModal from "./modals/viewChickenModal";
import SelectChickenModal from "./modals/selectChickenModal";
import CollapseTransition from 'react-collapse-transition';

const EntryRacingTable = () => {
	const [openedRow, setOpenedRow] = useState(-1);
	const [currentRacing, setCurrentRacing] = useState();
	const [isChickenSelectModal, setIsChickenSelectModal] = useState(false);
	const { entryRacingData } = useRacingContext();

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

	const handleOpenSelectChickenModal = (e) => {
		e.preventDefault();
		setIsChickenSelectModal(true);
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
						<th>Entry Fee</th>
						<th>Prize Pool</th>
						<th>Capacity</th>
					</tr>
				</thead>
				<tbody>
					{entryRacingData.map((row, index) => (
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
								<td><span className="price-green"> ${row.entryFee} </span> <span className="price-usd">USD</span></td>
								<td><span className="price-green"> ${row.prizePool} </span> <span className="price-usd">USD</span></td>
								<td>3/8</td>
							</tr>
							<tr key={`${index}_row_1`}>
								<td colspan="8" className={'hiddenRow'}>
									<CollapseTransition visible={openedRow === index}>
										{/* <div className={`accordian-body collapse ${openedRow === index ? " in" : "out"}`} id="demo1" style={{transition: 'height 0.35'}}> */}
										<div className={`accordian-body`} id="demo1">
											<div className="pick-gate">
												<h2 className="text-center">Pick a Lane to enter</h2>
												<div className="open-gates">
													<span>Open Lane</span>
													<a href onClick={handleOpenSelectChickenModal} className="btn">2</a>
													<a href onClick={handleOpenSelectChickenModal} className="btn">3</a>
													<a href onClick={handleOpenSelectChickenModal} className="btn">4</a>
													<a href onClick={handleOpenSelectChickenModal} className="btn">5</a>
													<a href onClick={handleOpenSelectChickenModal} className="btn">6</a>
													<a href onClick={handleOpenSelectChickenModal} className="btn">7</a>
													<a href onClick={handleOpenSelectChickenModal} className="btn">8</a>
													<a href onClick={handleOpenSelectChickenModal} className="btn">9</a>
													<a href onClick={handleOpenSelectChickenModal} className="btn">10</a>
													<a href onClick={handleOpenSelectChickenModal} className="btn">12</a>
												</div>
											</div>
											
											<table className="table">
												<thead>
													<tr>
														<th>Image</th>
														<th>Lane</th>
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
			<SelectChickenModal isOpen={isChickenSelectModal} onClose={() => setIsChickenSelectModal(false)} />
		</>
	)
};

export default EntryRacingTable;

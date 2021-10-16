import React, { useState, useEffect } from 'react';
import { useRacingContext } from '../helpers/hooks/useRacingContext';
import TerrainIcon from "../assets/images/terrain.png";
import ChickenImg from "../assets/images/chicken.png";
import racingData from "../helpers/testRacing";

const RacingTable = () => {
	const [isRacingDetail, setIsRacingDetail] = useState();

	useEffect(() => {
		if (racingData) {
			let temp = [];
			racingData.map(row => {
				temp.push({
					lane: row.racingChickens.lane,
					opened: false
				});
			});
			setIsRacingDetail(temp);
		}
	}, [racingData]);

	const checkRacingDetailOpened = (row) => {
		const isOpened = isRacingDetail?.filter(_row => _row.lane === row.racingChickens.lane);
		console.log(isRacingDetail, row);
		if (isOpened) {
			return isOpened[0].opened;
		}
		return false;
	}

	const toggleRacingDetail = (row) => {
		const isOpened = isRacingDetail?.filter(_row => _row.lane === row.racingChickens.lane);
		let temp = JSON.parse(JSON.stringify(isRacingDetail?isRacingDetail:[]));
		if (!isOpened) {
			temp.push({
				lane: row.racingChickens.lane,
				opened: true
			})
		} else {
			let temp1 = temp.filter(_row => _row.lane !== isOpened[0].lane);
			setIsRacingDetail([...temp1, {
				lane: row.racingChickens.lane,
				opened: !isOpened[0].opened
			}])
		}
	};

	return (
		<table className="table table-stripped table-hover" style={{borderCollapse: 'collapse'}}>
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
				{racingData.map((row, index) => (
					<>
						<tr
							key={`${index}_row`}
							className="accordion-toggle"
							onClick={(e) => toggleRacingDetail(row)}
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
								<div className={`accordian-body collapse ${checkRacingDetailOpened(row)?"in":""}`} id="demo1">
										<div className="pick-gate">
											<h2 className="text-center">Pick a Lane to enter</h2>
											<div className="open-gates">
													<span>Open Lane</span>
													<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">2</a>
													<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">3</a>
													<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">4</a>
													<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">5</a>
													<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">6</a>
													<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">7</a>
													<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">8</a>
													<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">9</a>
													<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">10</a>
													<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">12</a>
											</div>
										</div>
										{/* <!-- pick-gate--> */}
								{/* <!-- <div className="top-heading">
									<div>
											<h4>Juvinile Jublie</h4>
									</div>
									<div>
											<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn btn-enter">Enter</a>
									</div>
									</div> --> */}
								{/* <!-- top-heading --> */}
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
											<tr data-toggle="modal" data-target="#view-chicken">
												<td><img src={ChickenImg} className="img-pic" alt="" /></td>
												<td>3</td>
												<td>Willber</td>
												<td>Dorking</td>
												<td>96%</td>
												<td>Liam</td>
												<td>2/0/4</td>
												<td>12</td>
											</tr>
											<tr data-toggle="modal" data-target="#view-chicken">
												<td><img src={ChickenImg} className="img-pic" alt="" /></td>
												<td>5</td>
												<td>Willber</td>
													<td>Dorking</td>
													<td>96%</td>
													<td>Liam</td>
													<td>2/0/4</td>
													<td>12</td>
												</tr>
												<tr data-toggle="modal" data-target="#view-chicken">
													<td><img src={ChickenImg} className="img-pic" alt="" /></td>
													<td>8</td>
													<td>Willber</td>
													<td>Dorking</td>
													<td>96%</td>
													<td>Liam</td>
													<td>2/0/4</td>
													<td>12</td>
												</tr>
										</tbody>
									</table>
							</div>
							</td>
						</tr>

					</>
				))}
				<tr data-toggle="collapse" data-target="#demo1" className="accordion-toggle">
					<td>The Timbuktu Trek</td>
					<td>Timbuktu, Mali</td>
					<td><span className="text-class">A</span></td>
					<td>140m</td>
					<td>
						<img src={TerrainIcon} className="" data-toggle="tooltip" data-placement="bottom" title="Terrain Icon" alt="" />
					</td>
					<td><span className="price-green"> $17.88 </span> <span className="price-usd">USD</span></td>
					<td><span className="price-green"> $128.75 </span> <span className="price-usd">USD</span></td>
					<td>3/8</td>
				</tr>
				<tr>
					<td colspan="8" className="hiddenRow">
						<div className="accordian-body collapse" id="demo1">
								<div className="pick-gate">
									<h2 className="text-center">Pick a Lane to enter</h2>
									<div className="open-gates">
											<span>Open Lane</span>
											<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">2</a>
											<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">3</a>
											<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">4</a>
											<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">5</a>
											<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">6</a>
											<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">7</a>
											<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">8</a>
											<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">9</a>
											<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">10</a>
											<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">12</a>
									</div>
								</div>
								{/* <!-- pick-gate--> */}
								{/* <!-- <div className="top-heading">
									<div>
											<h4>Juvinile Jublie</h4>
									</div>
									<div>
											<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn btn-enter">Enter</a>
									</div>
									</div> --> */}
								{/* <!-- top-heading --> */}
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
											<tr data-toggle="modal" data-target="#view-chicken">
												<td><img src={ChickenImg} className="img-pic" alt="" /></td>
												<td>3</td>
												<td>Willber</td>
												<td>Dorking</td>
												<td>96%</td>
												<td>Liam</td>
												<td>2/0/4</td>
												<td>12</td>
											</tr>
											<tr data-toggle="modal" data-target="#view-chicken">
												<td><img src={ChickenImg} className="img-pic" alt="" /></td>
												<td>5</td>
												<td>Willber</td>
												<td>Dorking</td>
												<td>96%</td>
												<td>Liam</td>
												<td>2/0/4</td>
												<td>12</td>
											</tr>
											<tr data-toggle="modal" data-target="#view-chicken">
												<td><img src={ChickenImg} className="img-pic" alt="" /></td>
												<td>8</td>
												<td>Willber</td>
												<td>Dorking</td>
												<td>96%</td>
												<td>Liam</td>
												<td>2/0/4</td>
												<td>12</td>
											</tr>
									</tbody>
								</table>
						</div>
					</td>
				</tr>
				<tr data-toggle="collapse" data-target="#demo2" className="accordion-toggle">
						<td>Mauritshuis Ras</td>
						<td>The Hague, Netherlands</td>
						<td><span className="text-class">A</span></td>
						<td>210m</td>
						<td>
							<img src={TerrainIcon} className="" data-toggle="tooltip" data-placement="bottom" title="Terrain Icon" alt="" />
						</td>
						<td><span className="price-green"> $35.76</span> <span className="price-usd">USD</span></td>
						<td><span className="price-green"> $257.49</span> <span className="price-usd">USD</span></td>
						<td>3/8</td>
				</tr>
				<tr>
					<td colspan="8" className="hiddenRow">
						<div className="accordian-body collapse" id="demo2">
								<div className="pick-gate">
									<h2 className="text-center">Pick a Lane to enter</h2>
									<div className="open-gates">
											<span>Open Lane</span>
											<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">2</a>
											<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">3</a>
											<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">4</a>
											<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">5</a>
											<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">6</a>
											<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">7</a>
											<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">8</a>
											<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">9</a>
											<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">10</a>
											<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">12</a>
									</div>
								</div>
								{/* <!-- pick-gate--> */}
								{/* <!-- <div className="top-heading">
									<div>
											<h4>Juvinile Jublie</h4>
									</div>
									<div>
											<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn btn-enter">Enter</a>
									</div>
									</div> --> */}
								{/* <!-- top-heading --> */}
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
											<tr data-toggle="modal" data-target="#view-chicken">
												<td><img src={ChickenImg} className="img-pic" alt="" /></td>
												<td>3</td>
												<td>Willber</td>
												<td>Dorking</td>
												<td>96%</td>
												<td>Liam</td>
												<td>2/0/4</td>
												<td>12</td>
											</tr>
											<tr data-toggle="modal" data-target="#view-chicken">
												<td><img src={ChickenImg} className="img-pic" alt="" /></td>
												<td>5</td>
												<td>Willber</td>
												<td>Dorking</td>
												<td>96%</td>
												<td>Liam</td>
												<td>2/0/4</td>
												<td>12</td>
											</tr>
											<tr data-toggle="modal" data-target="#view-chicken">
												<td><img src={ChickenImg} className="img-pic" alt="" /></td>
												<td>8</td>
												<td>Willber</td>
												<td>Dorking</td>
												<td>96%</td>
												<td>Liam</td>
												<td>2/0/4</td>
												<td>12</td>
											</tr>
									</tbody>
								</table>
						</div>
					</td>
				</tr>
				<tr data-toggle="collapse" data-target="#demo3" className="accordion-toggle">
					<td>Bauernhof Lopp</td>
					<td>Matfors, Sweden</td>
					<td><span className="text-class">A</span></td>
					<td>180m</td>
					<td>
						<img src={TerrainIcon} className="" data-toggle="tooltip" data-placement="bottom" title="Terrain Icon" alt="" />
					</td>
					<td><span className="price-green"> $7.15</span> <span className="price-usd">USD</span></td>
					<td><span className="price-green"> $51.50</span> <span className="price-usd">USD</span></td>
					<td>3/8</td>
				</tr>
				<tr>
					<td colspan="8" className="hiddenRow">
						<div className="accordian-body collapse" id="demo3">
								<div className="pick-gate">
									<h2 className="text-center">Pick a Lane to enter</h2>
									<div className="open-gates">
											<span>Open Lane</span>
											<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">2</a>
											<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">3</a>
											<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">4</a>
											<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">5</a>
											<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">6</a>
											<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">7</a>
											<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">8</a>
											<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">9</a>
											<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">10</a>
											<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">12</a>
									</div>
								</div>
								{/* <!-- pick-gate--> */}
								{/* <!-- <div className="top-heading">
									<div>
											<h4>Juvinile Jublie</h4>
									</div>
									<div>
											<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn btn-enter">Enter</a>
									</div>
									</div> --> */}
								{/* <!-- top-heading --> */}
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
											<tr data-toggle="modal" data-target="#view-chicken">
												<td><img src={ChickenImg} className="img-pic" alt="" /></td>
												<td>3</td>
												<td>Willber</td>
												<td>Dorking</td>
												<td>96%</td>
												<td>Liam</td>
												<td>2/0/4</td>
												<td>12</td>
											</tr>
											<tr data-toggle="modal" data-target="#view-chicken">
												<td><img src={ChickenImg} className="img-pic" alt="" /></td>
												<td>5</td>
												<td>Willber</td>
												<td>Dorking</td>
												<td>96%</td>
												<td>Liam</td>
												<td>2/0/4</td>
												<td>12</td>
											</tr>
											<tr data-toggle="modal" data-target="#view-chicken">
												<td><img src={ChickenImg} className="img-pic" alt="" /></td>
												<td>8</td>
												<td>Willber</td>
												<td>Dorking</td>
												<td>96%</td>
												<td>Liam</td>
												<td>2/0/4</td>
												<td>12</td>
											</tr>
									</tbody>
								</table>
						</div>
					</td>
				</tr>
				<tr data-toggle="collapse" data-target="#demo4" className="accordion-toggle">
					<td>The Rio Run</td>
					<td>Rio de Janeiro, Brazil</td>
					<td><span className="text-class">A</span></td>
					<td>100m</td>
					<td>
						<img src={TerrainIcon} className="" data-toggle="tooltip" data-placement="bottom" title="Terrain Icon" alt="" />
					</td>
					<td><span className="price-green"> $3.58</span> <span className="price-usd">USD</span></td>
					<td><span className="price-green"> $25.75</span> <span className="price-usd">USD</span></td>
					<td>3/8</td>
				</tr>
				<tr>
					<td colspan="8" className="hiddenRow">
						<div className="accordian-body collapse" id="demo4">
								<div className="pick-gate">
									<h2 className="text-center">Pick a Lane to enter</h2>
									<div className="open-gates">
											<span>Open Lane</span>
											<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">2</a>
											<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">3</a>
											<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">4</a>
											<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">5</a>
											<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">6</a>
											<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">7</a>
											<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">8</a>
											<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">9</a>
											<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">10</a>
											<a href="#" data-toggle="modal" data-target="#select-chicken" className="btn">12</a>
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
											<tr data-toggle="modal" data-target="#view-chicken">
												<td><img src={ChickenImg} className="img-pic" alt="" /></td>
												<td>3</td>
												<td>Willber</td>
												<td>Dorking</td>
												<td>96%</td>
												<td>Liam</td>
												<td>2/0/4</td>
												<td>12</td>
											</tr>
											<tr data-toggle="modal" data-target="#view-chicken">
												<td><img src={ChickenImg} className="img-pic" alt="" /></td>
												<td>5</td>
												<td>Willber</td>
												<td>Dorking</td>
												<td>96%</td>
												<td>Liam</td>
												<td>2/0/4</td>
												<td>12</td>
											</tr>
											<tr data-toggle="modal" data-target="#view-chicken">
												<td><img src={ChickenImg} className="img-pic" alt="" /></td>
												<td>8</td>
												<td>Willber</td>
												<td>Dorking</td>
												<td>96%</td>
												<td>Liam</td>
												<td>2/0/4</td>
												<td>12</td>
											</tr>
									</tbody>
								</table>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	)
};

export default RacingTable;

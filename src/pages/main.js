import React, { useState } from "react";
import TerrainIcon from "../assets/images/terrain.png";
import { useRacingContext } from "../helpers/hooks/useRacingContext";
import RacingTable from "../components/racingTable";
import FilterModal from "../components/modals/filterModal1.js";
import { Link } from "react-router-dom";

const Main = () => {
	const { headerFocus, setHeaderFocus } = useRacingContext();
	const [isFilterModal, setIsFilterModal] = useState(false);

	const handleOpenFilterModal = (e) => {
		e.preventDefault();
		setIsFilterModal(true);
	};

	return (
		<div className="table-section" onClick={() => setHeaderFocus(!headerFocus)}>
			<div className="container">
				<div className="table-box">
						<ul>
							<li className="active"><Link to="/">Enter Race</Link></li>
							<li><Link to="scheduled-races">Scheduled Races</Link></li>
							<li><a href>Results</a></li>
						</ul>
						<div className="table-buttons">
							<div>
									<a href className="btn btn-races">Open Races</a>
							</div>
							<div>
								<a onClick={handleOpenFilterModal} className="btn btn-filters" href><span className="fa fa-sliders"></span>  Filters</a>
							</div>
						</div>
						<div className="table-responsive">
							<RacingTable />
						</div>
				</div>
			</div>
			{isFilterModal && <FilterModal onClose={() => setIsFilterModal(false)} />}
		</div>
	)
};

export default Main;
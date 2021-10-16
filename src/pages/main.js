import React, { useState } from "react";
import TerrainIcon from "../assets/images/terrain.png";
import { useRacingContext } from "../helpers/hooks/useRacingContext";
import RacingTable from "../components/racingTable";
import FilterModal from "../components/modals/filterModal1.js";

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
							<li className="active"><a href="">Enter Race</a></li>
							<li><a href="">Scheduled Races</a></li>
							<li><a href="">Results</a></li>
						</ul>
						<div className="table-buttons">
							<div>
									<a href="#" className="btn btn-races">Open Races</a>
							</div>
							<div>
								<a onClick={handleOpenFilterModal} className="btn btn-filters"><span className="fa fa-sliders"></span>  Filters</a>
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
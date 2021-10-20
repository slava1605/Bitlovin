import React, { useState } from "react";
import TerrainIcon from "../assets/images/terrain.png";
import { useRacingContext } from "../helpers/hooks/useRacingContext";
import EntryRacingTable from "../components/entryRacingTable";
import EntryFilterModal from "../components/modals/entryFilterModal.js";
import { Link } from "react-router-dom";
import NoChickenModal from "../components/modals/noChickenModal";

const Main = () => {
	const { headerFocus, setHeaderFocus } = useRacingContext();
	const [isFilterModal, setIsFilterModal] = useState(false);
	const [isChickenAvailable, setChickenAvailable] = useState(false);

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
						<li><Link to="/results">Results</Link></li>
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
						<EntryRacingTable />
					</div>
				</div>
			</div>
			{isFilterModal && <EntryFilterModal onClose={() => setIsFilterModal(false)} />}
			{!isChickenAvailable && <NoChickenModal isOpen={!isChickenAvailable} onClose={(e) => setChickenAvailable(true)} />}
		</div>
	)
};

export default Main;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ScheduledFilterModal from "../components/modals/scheduledFilterModal";
import ScheduledRacingTable from "../components/scheduledRacingTable";

const ScheduledRaces = () => {
	const [isFilterModal, setIsFilterModal] = useState(false);

	const handleOpenFilter = (e) => {
		setIsFilterModal(true);
	};

  return (
		<div className="table-section">
			<div className="container">
				<div className="table-box">
					<ul>
							<li><Link to="/">Enter Race</Link></li>
							<li className="active"><Link to="/scheduled-races">Scheduled Races</Link></li>
							<li><Link to="/results">Results</Link></li>
					</ul>
					<div className="table-buttons">
						<div className="filter-btns">									 
							<div className="buttons">
								<button class='btn'> Pecking Order: <span className="selected-text">A</span> <i className="fa fa-times"></i></button>
							</div>
							<div className="buttons">
								<button class='btn'> Distance: <span className="selected-text">180m</span> <i className="fa fa-times"></i></button>
							</div>
							<div className="buttons">
								<button class='btn'> Terrain: <span className="selected-text">Dirt</span> <i className="fa fa-times"></i></button>
							</div>
							<p>
								<a href className="clear-all">Clear All</a>
							</p>
						</div>
						<div>
							<a href onClick={handleOpenFilter} className="btn btn-filters">
								<span className="fa fa-sliders"></span>
								Filters
							</a>
						</div>
					</div>
					<div className="table-responsive">
						<ScheduledRacingTable />
					</div>
				</div>
			</div>
			{isFilterModal && <ScheduledFilterModal onClose={() => setIsFilterModal(false)} />}
	 	</div>
	)
};

export default ScheduledRaces;

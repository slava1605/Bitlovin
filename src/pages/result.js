import React, { useState } from "react";
import ResultsTable from "../components/resultsTable";
import ResultsFilterModal from "../components/modals/resultsFilterModal.js";
import { Link } from "react-router-dom";

const Results = () => {
	const [isFilterModal, setIsFilterModal] = useState(false);

	const handleOpenFilter = (e) => {
		setIsFilterModal(true);
	};

	return (
		<div class="table-section">
			<div class="container">
				<div class="table-box">
					<ul>
						<li><Link to="/">Enter Race</Link></li>
						<li><Link to="/scheduled-races">Scheduled Races</Link></li>
						<li className="active"><Link to="/results">Results</Link></li>
					</ul>
					<div class="result-filter">
						<div>
							<label class="switch">
								<input type="checkbox" class="switch-input" />
								<span class="switch-label" ></span>
								<span class="switch-handle"></span>
							</label>
							<span class="my-chicken">My Chickens Only</span>
						</div>
						<div>
								<div class="race-result">
									<h4><span class="yellow">315516</span> RACES <span class="spacing-right"></span> <span class="green">$24,154,45 USD</span> WON</h4>
								</div>
								<div class="filter-right">
									<a href onClick={handleOpenFilter} className="btn btn-filters">
										<span class="fa fa-sliders"></span>
										Filters
									</a>
								</div>
						</div>
					</div>
					<div class="table-responsive">
						<ResultsTable />
					</div>
				</div>
			</div>
			{isFilterModal && <ResultsFilterModal onClose={() => setIsFilterModal(false)} />}
		</div>
	)
};

export default Results;

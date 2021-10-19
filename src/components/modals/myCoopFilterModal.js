import React, { useState, useEffect } from "react";
import { useRacingContext } from "../../helpers/hooks/useRacingContext";

const DropdownFilter = ({ label, options, isOpen = false, initialValues = [] }) => {
	const [opened, setOpened] = useState(isOpen);
	const [values, setValues] = useState(initialValues);

	const handleOptionChange = (index) => (e) => {
		let temp = JSON.parse(JSON.stringify(values));
		temp[index] = !!e.target.checked;
		setValues(temp);
	};

	return (
		<div className="form-group">
			<label for="">{label}</label>
			<div className={`dropdown select-checkout ${opened?"open":""}`}>
					<a className="dropdown-toggle btn" onClick={(e) => setOpened(!opened)} href>
						Select {label}
						<b className="caret"></b>
					</a>
					<ul className="dropdown-menu dropdown-menu-form" role="menu">
						{options.map((option, index) => (
							<li key={`option_${index}${new Date().getTime()}`}>
									<label className="checkbox">
									<input
										type="checkbox"
										checked={values[index] === undefined ? false : values[index]}
										onChange={handleOptionChange(index)}
									/>
									{option}
									</label>
							</li>
						))}
					</ul>
			</div>
		</div>
	)
};

const MyCoopFilterModal = ({ onClose }) => {
	const [_className, setClassName] = useState("modal fade show");
	const { filterOptions } = useRacingContext();
	const [opened, setOpened] = useState();
	const [values, setValues] = useState({});

	useEffect(() => {
		 setClassName("modal fade in");
	}, []);

	const handleCloseModal = (e) => {
		 e.stopPropagation();
		 setClassName("modal fade closing");
		 setTimeout(() => onClose(), 350);
	};

	const handleOpenDropdown = (key) => {
		if (opened && opened === key)
			setOpened()
		else setOpened(key);
	};

	return (
		<div class={`${_className} bs-example-modal-lg my-coop-filter`} tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
			<div className="mask" onClick={handleCloseModal}></div>
			<div className="modal-dialog modal-lg" role="document">
					<div className="modal-content">
						<div className="modal-body">
								<h3>Filter</h3>
								<h4 className="fbold">Stats</h4>
								<div className="row">
									<div className="col-md-3 col-sm-6">
											<div className="form-group">
												<label for="">Name</label>
												<input type="text" className="form-control" name="" id="" />
											</div>
									</div>
									<div className="col-md-3 col-sm-6">
										<DropdownFilter label="Heritage" options={filterOptions.heritages} />
									</div>
									<div className="col-md-3 col-sm-6">
										<DropdownFilter label="Talent" options={filterOptions.talents} />
									</div>
									<div className="col-md-3 col-sm-6">
										<DropdownFilter label="Stock" options={filterOptions.stocks} />
									</div>
								</div>
								<div className="row">
									<div className="col-md-3 col-sm-6">
											<div className="form-group">
												<label for="">Perfection (Min)</label>
												<input type="text" className="form-control" name="" id="" />
											</div>
									</div>
									<div className="col-md-3 col-sm-6">
											<div className="form-group">
												<label for="">Perfection (Max)</label>
												<input type="text" className="form-control" name="" id="" />
											</div>
									</div>
									<div className="col-md-3 col-sm-6">
										<DropdownFilter label="Situation" options={filterOptions.situations} />
									</div>
								</div>
								<h4 className="fbold">Race History</h4>
								<div className="row">
									<div className="col-md-3 col-sm-6">
											<div className="form-group">
												<label for="">Races (Min)</label>
												<input type="text" className="form-control" name="" id="" />
											</div>
									</div>
									<div className="col-md-3 col-sm-6">
											<div className="form-group">
												<label for="">Races (Max)</label>
												<input type="text" className="form-control" name="" id="" />
											</div>
									</div>
									<div className="col-md-3 col-sm-6">
											<div className="form-group">
												<label for="">POP (Min)</label>
												<input type="text" className="form-control" name="" id="" />
											</div>
									</div>
									<div className="col-md-3 col-sm-6">
											<div className="form-group">
												<label for="">POP (Max)</label>
												<input type="text" className="form-control" name="" id="" />
											</div>
									</div>
								</div>
								<div className="row">
									<div className="col-md-3 col-sm-6">
											<div className="form-group">
												<label for="">Placed (Min)</label>
												<input type="text" className="form-control" name="" id="" />
											</div>
									</div>
									<div className="col-md-3 col-sm-6">
											<div className="form-group">
												<label for="">Placed (Max)</label>
												<input type="text" className="form-control" name="" id="" />
											</div>
									</div>
									<div className="col-md-3 col-sm-6">
											<div className="form-group">
												<label for="">Winnings (Min)</label>
												<input type="text" className="form-control" name="" id="" />
											</div>
									</div>
									<div className="col-md-3 col-sm-6">
											<div className="form-group">
												<label for="">Winnings (Max)</label>
												<input type="text" className="form-control" name="" id="" />
											</div>
									</div>
								</div>
								<div className="row">
									<div className="col-md-3 col-sm-6">
										<DropdownFilter label="Pecking Order" options={filterOptions.peckingOrders} />
									</div>
								</div>
								<h4 className="fbold">Traits</h4>
								<div className="row">
									<div className="col-md-3 col-sm-6">
										<DropdownFilter label="Gender" options={filterOptions.genders} />
									</div>
									<div className="col-md-3 col-sm-6">
										<DropdownFilter label="Color" options={filterOptions.colors} />
									</div>
									<div className="col-md-3 col-sm-6">
										<DropdownFilter label="Comb" options={filterOptions.combs} />
									</div>
									<div className="col-md-3 col-sm-6">
										<DropdownFilter label="Wattle" options={filterOptions.wattles} />
									</div>
								</div>
								<div className="row">
									<div className="col-md-3 col-sm-6">
										<DropdownFilter label="Beak" options={filterOptions.beaks} />
									</div>
									<div className="col-md-3 col-sm-6">
										<DropdownFilter label="Accessory" options={filterOptions.accessories} />
									</div>
									<div className="col-md-3 col-sm-6">
										<DropdownFilter label="Eyes" options={filterOptions.eyes} />
									</div>
									<div className="col-md-3 col-sm-6">
										<DropdownFilter label="Background" options={filterOptions.backgrounds} />
									</div>
								</div>
								<div className="row">
									<div className="col-md-3 col-sm-6">
										<DropdownFilter label="Stripes" options={filterOptions.stripes} />
									</div>
								</div>
								<div className="modal-footer">
									<button type="button" className="btn btn-filter-modal">Filter</button>
									<button type="button" className="btn btn-reset">Reset</button>
								</div>
						</div>
					</div>
			</div>
		</div>
	)
};

export default MyCoopFilterModal;

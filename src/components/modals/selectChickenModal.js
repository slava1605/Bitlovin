import React, {useState, useEffect} from "react";
import CloseIcon from "../../assets/images/close-icon.png";
import ChickenImg from "../../assets/images/chicken.png";
import FilterModal2 from "./filterModal2";

const SelectChickenModal = ({ isOpen, onClose }) => {
	const [_className, setClassName] = useState('');
	const [isFilter2, setIsFilter2] = useState(false);

	useEffect(() => {
		if (isOpen)
			setClassName('in');
		else setClassName('');
	}, [isOpen]);

	const handleClose = (e) => {
		setClassName('closing');
		setTimeout(()=>onClose(), 350);
	};

	const handleOpenFilter2 = (e) => {
		e.preventDefault();
		setIsFilter2(true);
	};

	return (
		<div className={`modal fade ${isOpen ? "show": ""} ${_className}`} id="select-chicken" tabIndex="-1" role="dialog" ariaLabelledBy="myModalLabel">
			<div className="mask" onClick={handleClose}></div>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<button onClick={handleClose} type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true"><img src={CloseIcon} alt="" /></span>
						</button>
						<h3 className="modal-title" id="myModalLabel">Juvinile Jubile
						</h3>
					</div>
					<div className="modal-body">
						<div className="select-chicken-row">
							<div>
								<h4 className="text-center">Pecking Order: <span>A</span></h4>
							</div>
							<div className="form-group has-feedback">
								<span className="fa fa-search form-control-feedback"></span>
								<input type="text" className="form-control customInput" placeholder="Chicken Name" />
							</div>
							<div>
								<a href onClick={handleOpenFilter2} className="btn btn-filters">
									<span className="fa fa-sliders"></span>
									Filters
								</a>
							</div>
						</div>
						<table className="table order-table">
							<tbody>
								<tr>
									<th>Image</th>
									<th>Name</th>
									<th>Heritage</th>
									<th>Perfection%</th>
									<th>Races</th>
									<th>History</th>
									<th>Talent</th>
									<th></th>
								</tr>
								<tr>
									<td><img src={ChickenImg} className="img-pic" alt="" /></td>
									<td>Willber</td>
									<td>Dorking</td>
									<td>96%</td>
									<td>12</td>
									<td>2/0/4</td>
									<td>Talent</td>
									<td><a href data-toggle="modal" data-dismiss="modal" data-target="#transaction-confirmation"  className="btnEnter">Enter</a></td>
								</tr>
								<tr>
									<td><img src={ChickenImg} className="img-pic" alt="" /></td>
									<td>Willber</td>
									<td>Dorking</td>
									<td>96%</td>
									<td>12</td>
									<td>2/0/4</td>
									<td>Talent</td>
									<td><a href data-toggle="modal" data-dismiss="modal" data-target="#transaction-confirmation"  className="btnEnter">Enter</a></td>
								</tr>
								<tr>
									<td><img src={ChickenImg} className="img-pic" alt="" /></td>
									<td>Willber</td>
									<td>Dorking</td>
									<td>96%</td>
									<td>12</td>
									<td>2/0/4</td>
									<td>Talent</td>
									<td><a href data-toggle="modal" data-dismiss="modal" data-target="#transaction-confirmation"  className="btnEnter">Enter</a></td>
								</tr>
								<tr>
									<td><img src={ChickenImg} className="img-pic" alt="" /></td>
									<td>Willber</td>
									<td>Dorking</td>
									<td>96%</td>
									<td>12</td>
									<td>2/0/4</td>
									<td>Talent</td>
									<td><a href data-toggle="modal" data-dismiss="modal" data-target="#transaction-confirmation"  className="btnEnter">Enter</a></td>
								</tr>
								<tr>
									<td><img src={ChickenImg} className="img-pic" alt="" /></td>
									<td>Willber</td>
									<td>Dorking</td>
									<td>96%</td>
									<td>12</td>
									<td>2/0/4</td>
									<td>Talent</td>
									<td><a href data-toggle="modal" data-dismiss="modal" data-target="#transaction-confirmation"  className="btnEnter">Enter</a></td>
								</tr>
							</tbody>
						</table>
					</div>
					{isFilter2 && <FilterModal2 isOpen={isFilter2} onClose={() => setIsFilter2(false)} />}
				</div>
			</div>
		</div>
	);
};

export default SelectChickenModal;

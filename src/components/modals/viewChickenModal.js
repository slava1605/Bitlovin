import React, {useEffect, useState} from "react";
import ChickenThumbnail from "../../assets/images/chicken-thumbnail.png";
import CloseIcon from "../../assets/images/close-icon.png";

const ViewChickenModal = ({ chickenData, closeModal }) => {
	const [_className, setClassName] = useState('');

	useEffect(() => {
		if (chickenData)
			setClassName('in');
		else setClassName('');
	}, [chickenData])

	const handleClose = (e) => {
		setClassName('closing');
		setTimeout(()=>closeModal(), 350);
	};

	return (
		<>
			<div
				class={`modal fade ${chickenData ? "show" : ""} ${_className}`}
				id="view-chicken"
				tabindex="-1"
				role="dialog"
				aria-labelledby="myModalLabel"
			>
				<div className="mask" onClick={handleClose}></div>
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" onClick={handleClose}>
								<span aria-hidden="true"><img src={CloseIcon} alt="" /></span>
							</button>
							<h3 class="modal-title" id="myModalLabel">View Chicken Details</h3>
						</div>
						<div class="modal-body">
							<div class="chicken-box-sm">
								<p> <img src={ChickenThumbnail} alt="" /> </p>
								<div class="chicken-user">
									<table class="table">
										<thead>
											<tr>
												<th>Owner</th>
												<th>Name</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>{chickenData?.owner}</td>
												<td>{chickenData?.name}</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<div class="chicken-box-lg">
								<div class="table-responsive">
									<table class="table">
										<tr>
											<th>Heritage</th>
											<th>Perfection</th>
											<th>Stock</th>
											<th>Talent</th>
											<th>Pecking Order</th>
											<th>POP</th>
											<th>History</th>
										</tr>
										<tr>
											<td>{chickenData?.heritage}</td>
											<td>{chickenData?.perfection}%</td>
											<td>{chickenData?.stock}</td>
											<td>{chickenData?.talent}</td>
											<td><span class="text-classwhite">CLASS {chickenData?.class}</span></td>
											<td>{chickenData?.pop}</td>
											<td>{chickenData?.history}</td>
										</tr>
										<tr>
											<th>Races</th>
											<th>Winnings</th>
											<th>Situations</th>
											<th>Gender</th>
											<th>Color</th>
											<th>Stripes</th>
											<th>Eyes</th>
										</tr>
										<tr>
											<td>{chickenData?.races}</td>
											<td>${chickenData?.winnings}</td>
											<td>{chickenData?.situations}</td>
											<td>{chickenData?.gender}</td>
											<td>{chickenData?.color}</td>
											<td>{chickenData?.stripes}</td>
											<td>{chickenData?.eyes}</td>
										</tr>
										<tr>
											<th colspan="1" class="hidden-xs"></th>
											<th>Beak</th>
											<th>Comb</th>
											<th>Wattle</th>
											<th>Background</th>
										</tr>
										<tr>
											<td colspan="1" class="hidden-xs"></td>
											<td>{chickenData?.beak}</td>
											<td>{chickenData?.comb}</td>
											<td>{chickenData?.wattle}</td>
											<td>{chickenData?.background}</td>
										</tr>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
};

export default ViewChickenModal;

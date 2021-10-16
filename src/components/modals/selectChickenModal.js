import React from "react";

const SelectChickenModal = () => {
	return (
		<div class="modal fade" id="select-chicken" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><img src="images/close-icon.png" alt="" /></span></button>
						<h3 class="modal-title" id="myModalLabel">Juvinile Jubile
						</h3>
					</div>
					<div class="modal-body">
						<div class="select-chicken-row">
								<div>
									<h4 class="text-center">Pecking Order: <span>A</span></h4>
								</div>
								<div class="form-group has-feedback">
									<span class="fa fa-search form-control-feedback"></span>
									<input type="text" class="form-control customInput" placeholder="Chicken Name" />
								</div>
								<div>
									<a href="#"  data-dismiss="modal" data-toggle="modal" data-target="#filter-popup2" class="btn btn-filters"><span class="fa fa-sliders"></span>  Filters</a>
								</div>
						</div>
						<table class="table order-table">
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
										<td><img src="images/chicken.png" class="img-pic" alt="" /></td>
										<td>Willber</td>
										<td>Dorking</td>
										<td>96%</td>
										<td>12</td>
										<td>2/0/4</td>
										<td>Talent</td>
										<td><a href="#" data-toggle="modal" data-dismiss="modal" data-target="#transaction-confirmation"  class="btnEnter">Enter</a></td>
									</tr>
									<tr>
										<td><img src="images/chicken.png" class="img-pic" alt="" /></td>
										<td>Willber</td>
										<td>Dorking</td>
										<td>96%</td>
										<td>12</td>
										<td>2/0/4</td>
										<td>Talent</td>
										<td><a href="#" data-toggle="modal" data-dismiss="modal" data-target="#transaction-confirmation"  class="btnEnter">Enter</a></td>
									</tr>
									<tr>
										<td><img src="images/chicken.png" class="img-pic" alt="" /></td>
										<td>Willber</td>
										<td>Dorking</td>
										<td>96%</td>
										<td>12</td>
										<td>2/0/4</td>
										<td>Talent</td>
										<td><a href="#" data-toggle="modal" data-dismiss="modal" data-target="#transaction-confirmation"  class="btnEnter">Enter</a></td>
									</tr>
									<tr>
										<td><img src="images/chicken.png" class="img-pic" alt="" /></td>
										<td>Willber</td>
										<td>Dorking</td>
										<td>96%</td>
										<td>12</td>
										<td>2/0/4</td>
										<td>Talent</td>
										<td><a href="#" data-toggle="modal" data-dismiss="modal" data-target="#transaction-confirmation"  class="btnEnter">Enter</a></td>
									</tr>
									<tr>
										<td><img src="images/chicken.png" class="img-pic" alt="" /></td>
										<td>Willber</td>
										<td>Dorking</td>
										<td>96%</td>
										<td>12</td>
										<td>2/0/4</td>
										<td>Talent</td>
										<td><a href="#" data-toggle="modal" data-dismiss="modal" data-target="#transaction-confirmation"  class="btnEnter">Enter</a></td>
									</tr>
								</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SelectChickenModal;

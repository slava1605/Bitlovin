import React from "react";

const FilterModal = ({ closeModal }) => {

  return (
		<>
			<div className="mask" onClick={closeModal}></div>
			<div class="modal fade in" id="filter-popup" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" style={{display: 'block'}}>
         <div class="modal-dialog" role="document">
            <div class="modal-content">
               <div class="modal-header">
                  <h3 class="modal-title" id="myModalLabel">Filter</h3>
               </div>
               <div class="modal-body">
                  <div class="row">
                     <div class="col-md-6">
                        <div class="form-group">
                           <label for="">Pecking Order</label>
                           <div class="dropdown select-checkout">
                              <a class="dropdown-toggle btn" data-toggle="dropdown" href="#">
                              Select Pecking Order
                              <b class="caret"></b>
                              </a>
                              <ul class="dropdown-menu dropdown-menu-form" role="menu">
                                 <li>
                                    <label class="checkbox">
                                    <input type="checkbox" />
                                    A
                                    </label>
                                 </li>
                                 <li>
                                    <label class="checkbox">
                                    <input type="checkbox" />
                                    B
                                    </label>
                                 </li>
                                 <li>
                                    <label class="checkbox">
                                    <input type="checkbox" />
                                    C
                                    </label>
                                 </li>
                                 <li>
                                    <label class="checkbox">
                                    <input type="checkbox" />
                                    Chicks
                                    </label>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div class="col-md-6">
                        <div class="form-group">
                           <label for="">Distance</label>
                           <div class="dropdown select-checkout">
                              <a class="dropdown-toggle btn" data-toggle="dropdown" href="#">
                              Select Distance
                              <b class="caret"></b>
                              </a>
                              <ul class="dropdown-menu dropdown-menu-form" role="menu">
                                 <li>
                                    <label class="checkbox">
                                    <input type="checkbox" />
                                    100m
                                    </label>
                                 </li>
                                 <li>
                                    <label class="checkbox">
                                    <input type="checkbox" />
                                    120m
                                    </label>
                                 </li>
                                 <li>
                                    <label class="checkbox">
                                    <input type="checkbox" />
                                    140m
                                    </label>
                                 </li>
                                 <li>
                                    <label class="checkbox">
                                    <input type="checkbox" />
                                    160m
                                    </label>
                                 </li>
                                 <li>
                                    <label class="checkbox">
                                    <input type="checkbox" />
                                    180m
                                    </label>
                                 </li>
                                 <li>
                                    <label class="checkbox">
                                    <input type="checkbox" />
                                    200m
                                    </label>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="row">
                     <div class="col-md-6">
                        <div class="form-group">
                           <label for="">Entry Fee (Min)</label>
                           <input type="text" class="form-control" name="" id="" />
                        </div>
                     </div>
                     <div class="col-md-6">
                        <div class="form-group">
                           <label for="">Entry Fee (Max)</label>
                           <input type="text" class="form-control" name="" id="" />
                        </div>
                     </div>
                  </div>
                  <div class="form-group">
                     <label for="">Terrain Type</label>
                     <div class="dropdown select-checkout">
                        <a class="dropdown-toggle btn" data-toggle="dropdown" href="#">
                        Select Terrain
                        <b class="caret"></b>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-form" role="menu">
                           <li>
                              <label class="checkbox">
                              <input type="checkbox" />
                              Dirt
                              </label>
                           </li>
                           <li>
                              <label class="checkbox">
                              <input type="checkbox" />
                              Grass
                              </label>
                           </li>
                           <li>
                              <label class="checkbox">
                              <input type="checkbox" />
                              Road
                              </label>
                           </li>
                           <li>
                              <label class="checkbox">
                              <input type="checkbox" />
                              Rock
                              </label>
                           </li>
                           <li>
                              <label class="checkbox">
                              <input type="checkbox" />
                              Sand
                              </label>
                           </li>
                           <li>
                              <label class="checkbox">
                              <input type="checkbox" />
                              Snow
                              </label>
                           </li>
                           <li>
                              <label class="checkbox">
                              <input type="checkbox" />
                              Track
                              </label>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div class="footer-btn">
                     <button type="button" class="btn btn-reset">Reset</button>
                     <button type="button" class="btn btn-filter-modal">Filter</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
		</>
	)
};

export default FilterModal;

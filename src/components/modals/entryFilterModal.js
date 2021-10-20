import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { useRacingContext } from "../../helpers/hooks/useRacingContext";

const EntryFilterModal = ({ onClose }) => {
   const { filterOptions } = useRacingContext();
   const { peckingOrders, racingDistances, terrains } = filterOptions;

   const [isPeckingOrder, setIsPeckingOrder] = useState(false);
   const [isDistance, setIsDistance] = useState(false);
   const [isTerrains, setIsTerrains] = useState(false);
   const [_className, setClassName] = useState("modal fade show");

   useEffect(() => {
      setClassName("modal fade in");
   }, []);

   const handleCloseModal = (e) => {
      e.stopPropagation();
      setClassName("modal fade closing");
      setTimeout(() => onClose(), 350);
   };

   const handleCloseDropdown = (e) => {
      e.stopPropagation();
      setIsPeckingOrder(false);
      setIsDistance(false);
      setIsTerrains(false);
   };

   const handleTogglePeckingOrder = (e) => {
      e.preventDefault();
      e.stopPropagation();
      setIsPeckingOrder(!isPeckingOrder);
   };

   const handleToggleDistance = (e) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDistance(!isDistance);
   };

   const handleToggleTerrains = (e) => {
      e.preventDefault();
      e.stopPropagation();
      setIsTerrains(!isTerrains);
   };

   return (
		<Modal.Dialog>
         <div className="mask"></div>
			<div className={_className} onClick={handleCloseModal} id="filter-popup" style={{display: 'block'}}>
            <div className="modal-dialog" role="document" onClick={handleCloseDropdown}>
               <div className="modal-content" >
                  <div className="modal-header">
                     <h3 className="modal-title" id="myModalLabel">Filter</h3>
                  </div>
                  <div className="modal-body">
                     <div className="row">
                        <div className="col-md-6">
                           <div className="form-group">
                              <label for="">Pecking Order</label>
                              <div className={`dropdown select-checkout ${isPeckingOrder?' open': ''}`}>
                                 <a onClick={handleTogglePeckingOrder} className="dropdown-toggle btn" href>
                                    Select Pecking Order
                                    <b className="caret"></b>
                                 </a>
                                 <ul className="dropdown-menu dropdown-menu-form" role="menu">
                                    {peckingOrders.map((order, index) => (
                                    <li key={index + '_order'} onClick={(e) => e.stopPropagation()}>
                                       <label className="checkbox">
                                       <input type="checkbox" />
                                          {order}
                                       </label>
                                    </li>
                                    ))}
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="form-group">
                              <label for="">Distance</label>
                              <div className={`dropdown select-checkout ${isDistance?' open': ''}`}>
                                 <a className="dropdown-toggle btn" onClick={handleToggleDistance} href>
                                    Select Distance
                                 <b className="caret"></b>
                                 </a>
                                 <ul className="dropdown-menu dropdown-menu-form" role="menu">
                                    {racingDistances.map((distance, index) => (
                                       <li key={`distance_${index}`} onClick={(e) => e.stopPropagation()}>
                                          <label className="checkbox">
                                          <input type="checkbox" />
                                             {distance}m
                                          </label>
                                       </li>
                                    ))}
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-md-6">
                           <div className="form-group">
                              <label for="">Entry Fee (Min)</label>
                              <input type="text" className="form-control" name="" id="" />
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="form-group">
                              <label for="">Entry Fee (Max)</label>
                              <input type="text" className="form-control" name="" id="" />
                           </div>
                        </div>
                     </div>
                     <div className="form-group">
                        <label for="">Terrain Type</label>
                        <div className={`dropdown select-checkout ${isTerrains? 'open': ''}`}>
                           <a className="dropdown-toggle btn" onClick={handleToggleTerrains} href>
                              Select Terrain
                           <b className="caret"></b>
                           </a>
                           <ul className="dropdown-menu dropdown-menu-form" role="menu">
                              {terrains.map((terrain, index) => (
                              <li key={`terain_${index}`} onClick={(e) => e.stopPropagation()}>
                                 <label className="checkbox">
                                 <input type="checkbox" />
                                    {terrain}
                                 </label>
                              </li>
                              ))}
                           </ul>
                        </div>
                     </div>
                     <div className="footer-btn">
                        <button type="button" className="btn btn-reset">Reset</button>
                        <button type="button" className="btn btn-filter-modal">Filter</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
		</Modal.Dialog>
	)
};

export default EntryFilterModal;

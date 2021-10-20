import React, { useState, useEffect } from "react";

const NoChickenModal = ({ isOpen, onClose }) => {
	const [_className, setClassName] = useState('modal fade show no-chicken');

	useEffect(() => {
		console.log(isOpen);
		if (isOpen)
			setClassName('modal fade no-chicken in');
	}, [isOpen]);

	const handleClose = (e) => {
		setClassName('modal fade closing no-chicken');
		setTimeout(() => {
			setClassName('modal fade no-chicken');
			onClose();
		}, 350);
	};

  return (
		<div className={_className} id="no-chicken">
			<div className="mask" onClick={handleClose}></div>
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-body">
						<h3>
							You don't have any <span className="block"></span> chickens available for this race.
						</h3>
						<p className="text-center">
							<a
								href=""
								onClick={(e) =>{
									e.preventDefault();
									handleClose(e);
								}}
								className="btn btn-close"
							>
								Close
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
};

export default NoChickenModal;

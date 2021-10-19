import React, { useState } from "react";
import CloseIcon from "../../assets/images/close-icon.png";

const TransactionConfirmationModal = ({ isOpen, onClose }) => {
	const [_className, setClassName] = useState('modal fade show');

	useEffect(() => {
		if (isOpen)
			setClassName('modal fade in');
	}, [isOpen]);

	const handleClose = (e) => {
		setClassName('modal fade closing');
		setTimeout(() => {
			setClassName('modal fade');
			onClose();
		}, 350);
	};

	return (
		<div className={_className} id="transaction-confirmation" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
			<div className="mask" onClick={handleClose}></div>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<button type="button" className="close" onClick={handleClose}>
							<span aria-hidden="true"><img src={CloseIcon} alt="" /></span>
						</button>
						<h3 className="modal-title" id="myModalLabel">Transaction confirmation</h3>
					</div>
					<div className="modal-body">
						<h4>CURRENT PRICE</h4>
						<p>$2.36 USD</p>
						<h4>ESTIMATED TX FEE</h4>
						<p>$0.00 USD</p>
						<h4>ESTIMATED TOTAL</h4>
						<p>$0.00 USD</p>
						<h4 className="text-center">
							$2.36 USD (0.0006 ETH)
						</h4>
						<div className="bottom-btn">
							<a href="" className="btn btn-go">GO BACK</a>
							<a href="$" data-toggle="modal" data-target="#complete-transaction" className="btn btn-confirm" data-dismiss="modal">CONFIRM</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};

export default TransactionConfirmationModal;

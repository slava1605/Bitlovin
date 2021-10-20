import React, { useState, useEffect } from "react";
import CloseIcon from "../../assets/images/close-icon.png";
import CompleteTransactionModal from "./completeTransactionModal";

const TransactionConfirmationModal = ({ isOpen, onClose }) => {
	const [_className, setClassName] = useState('modal fade show');
	const [isCompleteTransaction, setCompleteTransaction] = useState(false);

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

	const handleCompleteTransaction = (e) => {
		setCompleteTransaction(true);
	};

	return (
		<div className={_className} id="transaction-confirmation">
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
							<a href className="btn btn-confirm" onClick={handleCompleteTransaction}>CONFIRM</a>
						</div>
					</div>
				</div>
			</div>
			{isCompleteTransaction &&
				<CompleteTransactionModal
					isOpen={isCompleteTransaction}
					onClose={(e) => setCompleteTransaction(false)}
				/>
			}
		</div>
	)
};

export default TransactionConfirmationModal;

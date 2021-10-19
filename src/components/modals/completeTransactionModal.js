import React, { useState } from "react";
import LoaderGif from "../../assets/images/loader.gif";

const CompleteTransactionModal = ({ isOpen, onClose }) => {

	const [_className, setClassName] = useState('modal fade show choose-an-account complete-transaction');

	useEffect(() => {
		if (isOpen)
			setClassName('modal fade choose-an-account complete-transaction in');
	}, [isOpen]);

	const handleClose = (e) => {
		setClassName('modal fade closing choose-an-account complete-transaction');
		setTimeout(() => {
			setClassName('modal fade choose-an-account complete-transaction');
			onClose();
		}, 350);
	};

  return (
		<div className={_className} id="complete-transaction" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
			<div className="mask" onClick={handleClose}></div>
			<div className="modal-dialog">
				<div className="modal-content">
						<div className="modal-body">
							<h3>
									Please complete you transaction <span className="block"></span> on MetaMask
							</h3>
							<p>
									To complete your transaction please click Confirm in the <span className="block"></span>
									MetaMask window
							</p>
							<p>
									<img src={LoaderGif} className="loader-img" alt="" /> 
							</p>
							<h5>Tip: If Metamask does not appear automatically. Please click <span className="block"></span>
									on MetaMask icon in your browser notification toolbar
							</h5>
						</div>
				</div>
			</div>
		</div>
	)
};

export default CompleteTransactionModal;

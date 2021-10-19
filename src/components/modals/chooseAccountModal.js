import React, { useState } from "react";
import MetaMaskImg from "../../assets/images/meta-mask.png";

const ChooseAccountModal = ({ isOpen, onClose}) => {
	const [_className, setClassName] = useState('modal fade show choose-an-account');

	useEffect(() => {
		if (isOpen)
			setClassName('modal fade choose-an-account in');
	}, [isOpen]);

	const handleClose = (e) => {
		setClassName('modal fade closing choose-an-account');
		setTimeout(() => {
			setClassName('modal fade choose-an-account');
			onClose();
		}, 350);
	};

  return (
		<div className={_className} id="choose-an-account" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-body">
						<h3>
							CHOOSE AN ACCOUNT
						</h3>
						<div className="blue-box">
							<p className="text-center"> <img src={MetaMaskImg} className="meta-mask" alt="" /> </p>
							<h3>MetaMask</h3>
							<h4>Browser Extension</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};

export default ChooseAccountModal;

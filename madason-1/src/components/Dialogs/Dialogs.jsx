import s from './Dialogs.module.css';
import React from 'react';
import {
	Link
} from "react-router-dom";


const DialogItem = (props) => {
	let path = "/Dialogs/" + props.id;

	return (
		<div className={s.dialog}>
			<Link to={path}> {props.name}</Link>
		</div>
	)
}

const MessageItem = (props) => {
	return (
		<div>
			<div className={s.message}>
				{props.message}
			</div>
		</div>
	)
}

const Dialogs = (props) => {
	// debugger;
	let newMessageElement = React.createRef();

	let NewMessage = () => {
		let message = newMessageElement.current.value;
		// console.log(message);
		props.addNewMessage(message);
	}
	

	let onMessageChange = () => {
		let message = newMessageElement.current.value;
		props.updateNewMessageText(message);
		// newMessageElement.current.value = '';
	}
	const dialogsItems = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
	const messagesItems = props.dialogsPage.messages.map(m => <MessageItem message={m.message} />);

	return (
		<div className={s.dialogs}>
			<div className="dialogItems">
				{dialogsItems}
			</div>
			<div className={s.messages}>
				{messagesItems}
				<div>
					<textarea onChange={onMessageChange} ref={newMessageElement} value={props.dialogsPage.newMessageText}/>
				</div>
				<div>
					<button onClick={NewMessage}>
						sendMessage
				</button>
				</div>
			</div>
		</div>
	)
}

export default Dialogs;
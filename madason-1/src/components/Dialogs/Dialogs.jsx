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

	let newMessageElement = React.createRef();

	let NewMessage = () => {
		let message = newMessageElement.current.value;
		props.addNewMessage(message);
	}
	debugger;
	const dialogsItems = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
	const messagesItems = props.messages.map(m => <MessageItem message={m.message} />);

	return (
		<div className={s.dialogs}>
			<div className="dialogItems">
				{dialogsItems}
			</div>
			<div className={s.messages}>
				{messagesItems}
				<div>
					<textarea ref={newMessageElement}>

					</textarea>
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
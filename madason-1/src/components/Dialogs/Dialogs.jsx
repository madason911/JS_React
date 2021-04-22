import s from './Dialogs.module.css';
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
		<div className={s.message}>
			{props.message}
		</div>
	)
}

const Dialogs = (props) => {

	

	const dialogsItems = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
	const messagesItems = props.messages.map(m => <MessageItem message={m.message} />);

	return (
		<div className={s.dialogs}>
			<div className="dialogItems">
				{dialogsItems}
			</div>
			<div className={s.messages}>
				{messagesItems}
			</div>
		</div>
	)
}

export default Dialogs;
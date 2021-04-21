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

const Dialogs = () => {
	return (
		<div className={s.dialogs}>
			<div className="dialogItems">
				<DialogItem name='Ivan' id='1' />
				<DialogItem name='Maga' id='2' />
				<DialogItem name='Masha' id='3' />
				<DialogItem name='Sasha' id='4' />
			</div>
			<div className={s.messages}>
				<MessageItem message='hi' />
				<MessageItem message='how are you' />
				<MessageItem message='how old are you' />
			</div>
		</div>
	)
}

export default Dialogs;
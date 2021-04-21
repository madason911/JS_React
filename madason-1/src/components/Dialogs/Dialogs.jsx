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

	const dialogs = [
		{id:1, name: "Ivan"},
		{id:2, name: "Maga"},
		{id:3, name: "Sasha"},
		{id:4, name: "Masha"},
		{id:5, name: "Dasha"}
	]
	
	const messages = [
		{id:1, message:"Hello!"},
		{id:2, message:"How are you?"},
		{id:3, message:"How old are you?"},
	]

	const dialogsItems = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
	const messagesItems = messages.map(m => <MessageItem message={m.message} />);

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
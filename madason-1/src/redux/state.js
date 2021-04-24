import {reRender} from '../render'

let state = {
	dialogsPage: {
		dialogs: [
			{id:1, name: "Ivan"},
			{id:2, name: "Maga"},
			{id:3, name: "Sasha"},
			{id:4, name: "Masha"},
			{id:5, name: "Dasha"}
		],
		messages: [
			{id:1, message:"Hello!"},
			{id:2, message:"How are you?"},
			{id:3, message:"How old are you?"}
		],
		newMessageText: "madason"},
	profilePage: {
		posts: [
			{id:1, post:"Hello my dear friend!"},
			{id:2, post:"Hello my dear friends!"},
			{id:3, post:"Hello my dear friend!"},
			{id:4, post:"Hello my dear friends!"},
			{id:5, post:"Hello my dear teacher!"}
		]}
}

export let addNewMessage = (newMessage) => {
	let messageObj = {
		id: 4,
		message: newMessage
	}
	state.dialogsPage.messages.push(messageObj)
	reRender(state);
	state.dialogsPage.newMessageText = '';
}

export let updateNewMessageText = (newMessage) => {
	state.dialogsPage.newMessageText = newMessage;
	reRender(state);
}

export default state;
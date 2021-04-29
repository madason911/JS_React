let store = {
	_callSubscriber() {
		console.log("stateIsChanged");
	},
	_state: {
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
	},
	getState() {
		return this._state;
	},
	addNewMessage(newMessage) {
		let messageObj = {
			id: 4,
			message: newMessage
		}
		this._state.dialogsPage.messages.push(messageObj)
		this._callSubscriber(this._state);
		this._state.dialogsPage.newMessageText = '';
	},
	updateNewMessageText(newMessage) {
		this._state.dialogsPage.newMessageText = newMessage;
		this._callSubscriber(this._state);
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	}
}

export default store;
window.store = store;
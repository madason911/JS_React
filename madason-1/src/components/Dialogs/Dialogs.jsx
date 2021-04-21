import s from './Dialogs.module.css'

const Dialogs = () => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialog}>
				<div className={s.item + ' ' + s.active}>Ivan</div>
				<div className={s.item}>Maga</div>
				<div className={s.item}>Misha</div>
				<div className={s.item}>Sveta</div>
				<div className={s.item}>Masha</div>
			</div>
			<div className={s.messages}>
				<div className={s.message}>
					Hi
				</div>
				<div className={s.message}>
					How are you
				</div>
				<div className={s.message}>
					i am fine, Thanks!
				</div>
			</div>
		</div>
	)
}

export default Dialogs;
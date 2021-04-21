import s from './Navbar.module.css';
import {
	Link
} from "react-router-dom";

const Navbar = () => {
	return (
		<nav className={s.nav}>
			<div className={s.item}>
				{/* <a href='./License'>Лицензии</a> */}
				<Link to='./Dialogs'>Messages</Link>
			</div>
			<div className={s.item}>
				{/* <a href='./Profile'>Режим работы</a> */}
				<Link to='./Profile'>Profile</Link>
			</div>
			<div>
				<a>Вакансии</a>
			</div>
			<div>
				<a>Об учреждении</a>
			</div>
			<div>
				<a>Устав</a>
			</div>
		</nav>
	)
}

export default Navbar;
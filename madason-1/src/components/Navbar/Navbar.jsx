import s from './Navbar.module.css'

const Navbar = () => {
	return (
		<nav className={s.nav}>
			<div>
				<a href='./License'>Лицензии</a>
			</div>
			<div>
				<a href='./Profile'>Режим работы</a>
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
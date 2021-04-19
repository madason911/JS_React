import s from './Navbar.module.css'

const Navbar = () => {
	return (
		<nav className={s.nav}>
			<div>
				<a>Лицензии</a>
			</div>
			<div>
				<a>Режим работы</a>
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
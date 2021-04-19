import s from './Post.module.css'

const Post = (props) => {
	return (
		<div className={s.item}>
			{props.review}
		</div>	
	)
}

export default Post;
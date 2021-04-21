import Post from "./Post/Post"

const MyPost = (props) => {

	// const posts = [
	// 	{id:1, post:"Hello my dear friend!"},
	// 	{id:2, post:"Hello my dear friends!"},
	// 	{id:3, post:"Hello my dear friend!"},
	// 	{id:4, post:"Hello my dear friends!"},
	// 	{id:5, post:"Hello my dear teacher!"}
	// ]

	// const postItems = posts.map(p => <Post review={p.post}/>);

	return (
		<div>
			{props.postEl}
		</div>
	)
}

export default MyPost;
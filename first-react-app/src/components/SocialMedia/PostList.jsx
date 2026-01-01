// import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../../store/post-list-store.jsx";
import WelcomeMessage from "./WelcomeMessage.jsx";
import LoadingSpinner from "./LoadingSpinner.jsx";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
    // const {postList, addInitialPosts} = useContext(PostListData);
    // const [fetching, setFetching] = useState(false);
    const postList = useLoaderData();

    //  const handleGetPostsClick = (signal) => {
    //     // setFetching(true)
    //     fetch('https://dummyjson.com/posts', { signal })
    //         .then(res => res.json())
    //         .then(data => {
    //             // console.log(data.posts);
    //             addInitialPosts(data.posts);
    //             // setFetching(false);
    //         });

    //         // fetch('url', {
    //         //     method: 'POST',
    //         //     headers: {},
    //         //     body: JSON.stringify({key: 'value'})
    //         // })
    //         // .then((res) => res.json())
    //         // .then((data) => console.log(data));
    // }

    // useEffect(() => {
    //     const controller = new AbortController();
    //     const signal = controller.signal;
    //     handleGetPostsClick(signal);

    //     return () => {
    //         controller.abort();
    //     }
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

    // const callback = useCallback(() => {

    // },[]);

    // const memo = useMemo(() => {

    // },[])

    return (
        <>
        {/* {fetching && <LoadingSpinner/>} */}
        {postList.length === 0 && <WelcomeMessage onGetPostsClick={() => {}} />}
        {postList.map((post) => (
            <Post key={post.id} post={post}/>
        ))}
        </>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const postLoader = () => {
    return fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then(data => {
            // console.log(data.posts);
            //addInitialPosts(data.posts);
            return data.posts;
        });
}

export default PostList;
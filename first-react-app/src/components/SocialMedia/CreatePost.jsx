// import { useContext, useRef } from "react";
import { PostList } from "../../store/post-list-store";
import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
    // const {addPost} = useContext(PostList);
    // const navigate = useNavigate();

    // const userIdRef = useRef();
    // const titleRef = useRef();
    // const bodyRef = useRef();
    // const reactionsRef = useRef();
    // const tagsRef = useRef();

    //const handleSubmit = (e) => {
        // e.preventDefault();
        // const postData = {
        //     id: new Date().toISOString(),
        //     userId: userIdRef.current.value,
        //     title: titleRef.current.value,
        //     body: bodyRef.current.value,
        //     reactions: reactionsRef.current.value,
        //     tags: tagsRef.current.value.split(" ")
        // };
        // userIdRef.current.value = '';
        // titleRef.current.value = '';
        // bodyRef.current.value = '';
        // reactionsRef.current.value = '';
        // tagsRef.current.value = '';

        // fetch('https://dummyjson.com/posts/add', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(postData)
        // })
        //     .then(res => res.json())
        //     .then((data) => {
        //         addPost(data);
        //         navigate("/");
        //     });
    //}

    return (
        <Form method="POST" className="create-post">
            <div className="mb-3">
                <label htmlFor="userId" className="form-label">User ID</label>
                <input name="userId" type="text" className="form-control" id="userId" aria-describedby="userIdHelp" placeholder="Enter your User ID"/>
            </div>

            <div className="mb-3">
                <label htmlFor="title" className="form-label">Post Title</label>
                <input name="title" type="text" className="form-control" id="title" aria-describedby="titleHelp" placeholder="How are you feeling today.."/>
            </div>

            <div className="mb-3">
                <label htmlFor="body" className="form-label">Post Content</label>
                <textarea name="body" type="text" className="form-control" id="body" rows={4} placeholder="Tell us more about it..."/>
            </div>

            <div className="mb-3">
                <label htmlFor="reactions" className="form-label">Number of Reactions</label>
                <input name="reactions" type="text" className="form-control" id="reactions" aria-describedby="reactionsHelp" placeholder="How many people reacted to this post.."/>
            </div>

            <div className="mb-3">
                <label htmlFor="tags" className="form-label">Enter your hashtags here</label>
                <input name="tags" type="text" className="form-control" id="tags" aria-describedby="tagsHelp" placeholder="Enter hashtags separated by space.."/>
            </div>
            <button type="submit" className="btn btn-primary">Post</button>
        </Form>
    )

    // return (
    //     <form className="create-post">
    //         <div className="mb-3">
    //             <label htmlFor="userId" className="form-label">User ID</label>
    //             <input ref={userIdRef} type="text" className="form-control" id="userId" aria-describedby="userIdHelp" placeholder="Enter your User ID"/>
    //         </div>

    //         <div className="mb-3">
    //             <label htmlFor="title" className="form-label">Post Title</label>
    //             <input ref={titleRef} type="text" className="form-control" id="title" aria-describedby="titleHelp" placeholder="How are you feeling today.."/>
    //         </div>

    //         <div className="mb-3">
    //             <label htmlFor="body" className="form-label">Post Content</label>
    //             <textarea ref={bodyRef} type="text" className="form-control" id="body" rows={4} placeholder="Tell us more about it..."/>
    //         </div>

    //         <div className="mb-3">
    //             <label htmlFor="reactions" className="form-label">Number of Reactions</label>
    //             <input ref={reactionsRef} type="text" className="form-control" id="reactions" aria-describedby="reactionsHelp" placeholder="How many people reacted to this post.."/>
    //         </div>

    //         <div className="mb-3">
    //             <label htmlFor="tags" className="form-label">Enter your hashtags here</label>
    //             <input ref={tagsRef} type="text" className="form-control" id="tags" aria-describedby="tagsHelp" placeholder="Enter hashtags separated by space.."/>
    //         </div>
    //         <button type="submit" className="btn btn-primary">Post</button>
    //     </form>
    // )
}

// eslint-disable-next-line react-refresh/only-export-components
export const createPostAction = async (data) => {
    const formData = await data.request.formData();
    const postData = Object.fromEntries(formData);
    postData.tags = postData.tags.split(" ");//formData.get("tags").split(" ");

    fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(() => {
            //addPost(data);
        });
        return redirect("/");
}

export default CreatePost;
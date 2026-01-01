import { useState } from "react";
import CreatePost from "../../components/SocialMedia/CreatePost";
import Footer from "../../components/SocialMedia/Footer";
import Header from "../../components/SocialMedia/Header";
import PostList from "../../components/SocialMedia/PostList";
import Sidebar from "../../components/SocialMedia/Sidebar";
import "./SocialMedia.css";
import PostListProvider from "../../store/post-list-store";
import { Outlet } from "react-router-dom";

const SocialMedia = () => {
    const [selectedTab, setSelectedTab] = useState("Home");

    return (
        <PostListProvider>
            <div className="app-container">
                <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
                <div className="content">
                    <Header />
                    <Outlet/>
                    {/* {selectedTab === "Home" ? <PostList /> : <CreatePost />} */}
                    <Footer />
                </div>
            </div>
        </PostListProvider>
    );
};

export default SocialMedia;

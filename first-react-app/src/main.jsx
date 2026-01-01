import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './routes/App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreatePost, { createPostAction } from './components/SocialMedia/CreatePost.jsx';
import PostList, { postLoader } from './components/SocialMedia/PostList.jsx';
import { Provider } from 'react-redux';
import counterStore from './store/reduxStore.js';

const route = createBrowserRouter([
  {
    path: "/", element: <App />, children: [
      { path: "/", element: <PostList />, loader: postLoader },
      { path: "/create-post", element: <CreatePost />, action: createPostAction }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={counterStore} >
      <RouterProvider router={route} />
      {/* <App /> */}
    </Provider>
  </StrictMode>,
)

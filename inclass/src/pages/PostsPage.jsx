import {
  Outlet,
  useParams,
  Link,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { useData } from "../hooks/useData";

export default function PostsPage() {
  return (
    <div>
      <h1>Posts</h1>
      <Outlet />
    </div>
  );
}

export function PostList() {
  // adding in code for query Parameters
  const [searchParams, setSearchParams] = useSearchParams(); //import this hook
  const limit = searchParams.get("limit") ? searchParams.get("limit") : 5;
  const postsData = useData(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
  );

  const handleChangeLimit = (e) => {
    setSearchParams({ limit: e.target.value });
  };

  const postList = postsData?.map((post) => (
    <li key={post.id}>
      <Link to={"/posts/" + post.id}>
        Post #{post.id}: {post.title}
      </Link>
    </li>
  ));

  //update return to render limit changed to 10
  return (
    <>
      <Link to="/posts?limit=10">Load # of Posts</Link>
      <select onChange={handleChangeLimit} value={limit}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
      </select>
      <ul>{postList}</ul>
    </>
  );
}

export function Post() {
  const { id } = useParams();
  const post = useData("https://jsonplaceholder.typicode.com/posts/" + id);

  //Next button Extension
  const navigate = useNavigate();
  const allPosts = useData("https://jsonplaceholder.typicode.com/posts/");

  //Function to Navigate to the next post
  const goToNextPost = () => {
    const currentIndex = allPosts.findIndex((p) => p.id === post.id); //collects allPosts variable and set as Integer (via findIndex() method)
    const nextPost = allPosts[currentIndex + 1]; //new variable that increments on the value of allPosts integer

    if (nextPost) {
      navigate(`/posts/${nextPost.id}`);
    }
  };

  //Function to Navigate to the previous post
  const goToPreviousPost = () => {
    const currentIndex = allPosts.findIndex((p) => p.id === post.id);
    const nextPost = allPosts[currentIndex - 1];

    if (nextPost) {
      navigate(`/posts/${nextPost.id}`);
    }
  };

  return (
    <div className="Post">
      {post ? (
        <>
          <h3>
            Post #{post.id}: {post.title}
          </h3>
          <p>{post.body}</p>
        </>
      ) : (
        "Loading..."
      )}
      <button onClick={goToPreviousPost}>Previous Post</button>
      <button onClick={goToNextPost}>Next Post</button>
    </div>
  );
}

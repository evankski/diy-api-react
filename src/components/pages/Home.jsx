import { Link } from "react-router-dom";

function Home() {
    return ( 
        <div>
            <h1>Home Page</h1>
            <h1><Link to="/blog">All Blogs</Link></h1>
        </div>
     );
}

export default Home;
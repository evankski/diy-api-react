
function Blog({blogs}) {
    // console.log(blog)
    const allBlogs = blogs.map((blog, idx) => {
        return(
            <div key={`blog-${idx}`}>
                <h1>{blog.title}</h1>
                <h4>{blog.content}</h4>
                <p>Author: {blog.name}</p>
                <hr/>
            </div>
        )
    })

    return ( 
        <div>
            {allBlogs}
        </div>
     );
}

export default Blog;
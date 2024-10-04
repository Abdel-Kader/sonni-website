import React from 'react';
import blogBanner from "../assets/banners/blog.jpg";
import Banner from "../components/layout/Banner";

const BlogPage = () => {
    return (
        <>
            <Banner image={blogBanner} title={"Blog"}
                    description={""}/>
        </>
    );
};

export default BlogPage;

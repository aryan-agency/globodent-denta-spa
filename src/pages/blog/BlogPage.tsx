import { useParams } from "react-router-dom";
import { blogPosts } from "./blogData";
import BlogPostPage from "./BlogPostPage";
import NotFound from "@/pages/NotFound";

const BlogPage = () => {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) return <NotFound />;
  const post = blogPosts[slug];
  if (!post) return <NotFound />;
  return <BlogPostPage data={post} />;
};

export default BlogPage;

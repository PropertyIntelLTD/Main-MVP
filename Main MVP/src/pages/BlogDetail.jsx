
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/components/ui/use-toast";
import { format } from "date-fns";

function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    loadBlog();
  }, [id]);

  const loadBlog = async () => {
    try {
      const { data, error } = await supabase
        .from("blogs")
        .select(`
          *,
          author:author_id(name)
        `)
        .eq("id", id)
        .single();

      if (error) throw error;
      setBlog(data);
      setLoading(false);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load blog post",
      });
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background p-6 flex items-center justify-center">
        <p className="text-xl">Loading blog post...</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-background p-6 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl mb-4">Blog post not found</p>
          <Link to="/blogs">
            <Button>Back to Blogs</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link to="/blogs">
            <Button variant="outline">← Back to Blogs</Button>
          </Link>
        </div>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card rounded-lg shadow-lg overflow-hidden"
        >
          <div className="aspect-video relative">
            <img 
              className="w-full h-full object-cover"
              alt={`Blog post about ${blog.title}`}
             src="https://images.unsplash.com/photo-1504983875-d3b163aba9e6" />
          </div>

          <div className="p-8">
            <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
            
            <div className="flex items-center text-gray-600 mb-8">
              <span>By {blog.author?.name}</span>
              <span className="mx-2">•</span>
              <span>{format(new Date(blog.created_at), "MMMM d, yyyy")}</span>
            </div>

            <div className="prose max-w-none">
              <p className="text-gray-600 whitespace-pre-line">{blog.content}</p>
            </div>

            <div className="mt-8 border-t pt-6">
              <h2 className="text-2xl font-bold mb-4">Share this article</h2>
              <div className="flex space-x-4">
                <Button variant="outline">Share on Twitter</Button>
                <Button variant="outline">Share on Facebook</Button>
                <Button variant="outline">Copy Link</Button>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
}

export default BlogDetail;

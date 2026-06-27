import { useEffect, useState } from "react";
import { supabase } from "../../supabase/client";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const { data } = await supabase
      .from("blog_posts")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

    if (data) {
      setPosts(data);
    }
  }

  if (selectedPost) {
    return (
      <div className="max-w-5xl mx-auto py-12 px-6">
        <button
          onClick={() => setSelectedPost(null)}
          className="mb-6 bg-gray-200 px-4 py-2 rounded"
        >
          ← Back To News
        </button>

        <h1 className="text-4xl font-bold">
          {selectedPost.title}
        </h1>

        <p className="text-blue-600 mt-2">
          {selectedPost.category}
        </p>

        <p className="text-gray-500 mt-2">
          {new Date(
            selectedPost.created_at
          ).toLocaleDateString()}
        </p>

        <div className="mt-8 whitespace-pre-wrap">
          {selectedPost.content}
        </div>

        {selectedPost.requirements && (
          <div className="mt-10 bg-yellow-50 p-6 rounded-xl">
            <h3 className="font-bold text-xl mb-3">
              Requirements
            </h3>

            <p className="whitespace-pre-wrap">
              {selectedPost.requirements}
            </p>
          </div>
        )}

        {selectedPost.application_process && (
          <div className="mt-10 bg-blue-50 p-6 rounded-xl">
            <h3 className="font-bold text-xl mb-3">
              Application Process
            </h3>

            <p className="whitespace-pre-wrap">
              {selectedPost.application_process}
            </p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto py-16 px-6">

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold">
            News & Updates
          </h1>

          <p className="text-gray-600 mt-4">
            Latest announcements, HELB updates,
            KUCCPS applications, scholarships,
            study abroad opportunities and government services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <div className="bg-blue-700 text-white p-4">
                {post.category}
              </div>

              <div className="p-6">
                <h2 className="font-bold text-xl">
                  {post.title}
                </h2>

                <p className="text-gray-600 mt-3">
                  {post.summary}
                </p>

                <button
                  onClick={() =>
                    setSelectedPost(post)
                  }
                  className="mt-6 bg-blue-600 text-white px-5 py-2 rounded"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}

        </div>

        {posts.length === 0 && (
          <div className="text-center py-20">
            No news available.
          </div>
        )}

      </div>
    </div>
  );
}
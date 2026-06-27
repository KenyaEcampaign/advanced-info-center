import { useEffect, useState } from "react";
import { supabase } from "../../../supabase/client";

export default function ManageBlog() {
  const [posts, setPosts] = useState([]);

  const [form, setForm] = useState({
    title: "",
    category: "",
    summary: "",
    content: "",
    requirements: "",
    application_process: "",
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const { data } = await supabase
      .from("blog_posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (data) {
      setPosts(data);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const { error } = await supabase
      .from("blog_posts")
      .insert([
        {
          title: form.title,
          category: form.category,
          summary: form.summary,
          content: form.content,
          requirements: form.requirements,
          application_process: form.application_process,
        },
      ]);

    if (error) {
      alert(error.message);
      return;
    }

    alert("News posted successfully");

    setForm({
      title: "",
      category: "",
      summary: "",
      content: "",
      requirements: "",
      application_process: "",
    });

    fetchPosts();
  }

  async function deletePost(id) {
    if (!window.confirm("Delete this post?")) return;

    await supabase
      .from("blog_posts")
      .delete()
      .eq("id", id);

    fetchPosts();
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Manage News & Updates
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow rounded-xl p-6 mb-8"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <input
            className="border p-3 rounded"
            placeholder="Title"
            value={form.title}
            onChange={(e) =>
              setForm({
                ...form,
                title: e.target.value,
              })
            }
            required
          />

          <input
            className="border p-3 rounded"
            placeholder="Category"
            value={form.category}
            onChange={(e) =>
              setForm({
                ...form,
                category: e.target.value,
              })
            }
            required
          />
        </div>

        <textarea
          className="border p-3 rounded w-full mt-4"
          rows="3"
          placeholder="Short Summary"
          value={form.summary}
          onChange={(e) =>
            setForm({
              ...form,
              summary: e.target.value,
            })
          }
          required
        />

        <textarea
          className="border p-3 rounded w-full mt-4"
          rows="6"
          placeholder="Full News Content"
          value={form.content}
          onChange={(e) =>
            setForm({
              ...form,
              content: e.target.value,
            })
          }
          required
        />

        <textarea
          className="border p-3 rounded w-full mt-4"
          rows="4"
          placeholder="Requirements"
          value={form.requirements}
          onChange={(e) =>
            setForm({
              ...form,
              requirements: e.target.value,
            })
          }
        />

        <textarea
          className="border p-3 rounded w-full mt-4"
          rows="4"
          placeholder="Application Process"
          value={form.application_process}
          onChange={(e) =>
            setForm({
              ...form,
              application_process: e.target.value,
            })
          }
        />

        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white px-6 py-3 rounded"
        >
          Publish News
        </button>
      </form>

      <div className="bg-white shadow rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="text-left p-4">Title</th>
              <th className="text-left p-4">Category</th>
              <th className="text-left p-4">Date</th>
              <th className="text-left p-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {posts.map((post) => (
              <tr key={post.id} className="border-t">
                <td className="p-4">{post.title}</td>
                <td className="p-4">{post.category}</td>
                <td className="p-4">
                  {new Date(
                    post.created_at
                  ).toLocaleDateString()}
                </td>

                <td className="p-4">
                  <button
                    onClick={() => deletePost(post.id)}
                    className="bg-red-600 text-white px-4 py-2 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {posts.length === 0 && (
              <tr>
                <td
                  colSpan="4"
                  className="text-center p-6"
                >
                  No news posts found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
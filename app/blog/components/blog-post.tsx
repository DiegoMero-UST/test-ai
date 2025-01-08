import Image from "next/image";

export default function BlogPost() {
  const posts = [
    {
      title: "The Future of AI in Business Automation",
      excerpt: "Discover how artificial intelligence is revolutionizing business processes and what it means for your company's future.",
      category: "AI Trends",
      readTime: "5 min read",
      date: "Mar 15, 2024",
      image: "/botcustom.png",
      author: {
        name: "Dr. Sarah Chen",
        role: "AI Research Director",
        avatar: "/avatar.png"
      },
      tags: ["AI", "Automation", "Future of Work"]
    },
    {
      title: "10 Ways to Improve Business Efficiency with AI",
      excerpt: "Learn practical strategies to implement AI solutions that can dramatically improve your business operations.",
      category: "Business Strategy",
      readTime: "8 min read",
      date: "Mar 12, 2024",
      image: "/botcustom.png",
      author: {
        name: "James Wilson",
        role: "Business Solutions Expert",
        avatar: "/avatar.png"
      },
      tags: ["Efficiency", "Implementation", "ROI"]
    },
    {
      title: "Understanding Machine Learning in Modern Business",
      excerpt: "A comprehensive guide to understanding how machine learning can transform your business operations.",
      category: "Technology",
      readTime: "6 min read",
      date: "Mar 10, 2024",
      image: "/botcustom.png",
      author: {
        name: "Maria Rodriguez",
        role: "Tech Lead",
        avatar: "/avatar.png"
      },
      tags: ["Machine Learning", "Technology", "Innovation"]
    }
  ];

  return (
    <section className="pb-20 pt-48 px-5 xl:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text py-5 lg:text-6xl">
            Latest Insights
          </h2>
          <p className="text-xl text-gray-600">
            Expert perspectives on AI, automation, and business efficiency
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="relative h-[400px]">
              <div className="absolute inset-0 bg-gray-900/10" />
              <Image
                src={posts[0].image}
                alt={posts[0].title}
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                  {posts[0].category}
                </span>
                <span className="text-gray-500 text-sm">
                  {posts[0].readTime}
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {posts[0].title}
              </h3>

              <p className="text-gray-600 mb-6">
                {posts[0].excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Image
                    src={posts[0].author.avatar}
                    alt={posts[0].author.name}
                    width={1000}
                    height={1000}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-medium">{posts[0].author.name}</p>
                    <p className="text-sm text-gray-500">{posts[0].author.role}</p>
                  </div>
                </div>
                <span className="text-gray-500 text-sm">{posts[0].date}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gray-900/10" />
                <Image
                  src={post.image}
                  alt={post.title}
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-6">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={1000}
                      height={1000}
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <p className="font-medium text-sm">{post.author.name}</p>
                      <p className="text-xs text-gray-500">{post.author.role}</p>
                    </div>
                  </div>
                  <span className="text-gray-500 text-sm">{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Stay Updated with Our Newsletter
          </h3>
          <p className="text-gray-600 mb-8">
            Get the latest insights on AI and automation delivered to your inbox
          </p>
          <form className="flex flex-col gap-4 md:flex-row p-5">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
            />
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
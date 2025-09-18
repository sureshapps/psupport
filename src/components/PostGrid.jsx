import React, { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from 'lucide-react';
import PostModal from './PostModal';

const PostGrid = ({ posts }) => {
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
  };

  return (
    <>
      <div className="w-full max-w-4xl mx-auto p-6">
        {/* Glass container for grid */}
        <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-3xl p-8 shadow-xl">
          {/* Grid - 8 columns, responsive */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-1">
            {posts.map((post, index) => (
              <div
                key={post.id}
                className="aspect-square group cursor-pointer relative overflow-hidden rounded-lg"
                onClick={() => handlePostClick(post)}
              >
                {/* Post image/placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm border border-white/20 rounded-lg overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                  <img
                    src={post.image}
                    alt={`Post ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%23f8fafc'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%2394a3b8' font-size='16'%3E${index + 1}%3C/text%3E%3C/svg%3E`;
                    }}
                  />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                  <div className="flex space-x-4 text-white">
                    <div className="flex items-center space-x-1">
                      <Heart className="w-5 h-5 fill-current" />
                      <span className="font-semibold">{post.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-5 h-5 fill-current" />
                      <span className="font-semibold">{post.comments}</span>
                    </div>
                  </div>
                </div>

                {/* Post type indicator */}
                {post.type === 'carousel' && (
                  <div className="absolute top-2 right-2 bg-black/50 rounded-full p-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                )}
                {post.type === 'video' && (
                  <div className="absolute top-2 right-2 bg-black/50 rounded-full p-1">
                    <div className="w-0 h-0 border-l-4 border-l-white border-t-2 border-t-transparent border-b-2 border-b-transparent ml-1"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Load more section */}
          <div className="flex justify-center mt-8">
            <button className="px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-xl text-gray-800 font-medium transition-all duration-300 hover:scale-105">
              Load More Posts
            </button>
          </div>
        </div>
      </div>

      {/* Post Modal */}
      {selectedPost && (
        <PostModal post={selectedPost} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default PostGrid;
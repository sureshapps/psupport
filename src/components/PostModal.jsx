import React, { useEffect } from 'react';
import { X, Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from 'lucide-react';
import { Button } from './ui/button';

const PostModal = ({ post, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      {/* Modal container */}
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex h-full">
          {/* Image section */}
          <div className="flex-1 bg-black/20 flex items-center justify-center">
            <img
              src={post.image}
              alt="Post"
              className="max-w-full max-h-full object-contain"
              onError={(e) => {
                e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='600' viewBox='0 0 600 600'%3E%3Crect width='600' height='600' fill='%23f1f5f9'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%2394a3b8' font-size='24'%3EPost Image%3C/text%3E%3C/svg%3E";
              }}
            />
          </div>

          {/* Content section */}
          <div className="w-96 flex flex-col bg-white/10 backdrop-blur-md">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/20">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-white/30 to-white/20 backdrop-blur-sm border border-white/30 overflow-hidden">
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%23f1f5f9'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%2394a3b8' font-size='12'%3EU%3C/text%3E%3C/svg%3E"
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-semibold text-white">username</span>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" onClick={onClose} className="text-white hover:bg-white/20">
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Description section */}
            <div className="flex-1 overflow-y-auto p-4">
              {/* Post caption */}
              <div className="flex space-x-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-white/30 to-white/20 backdrop-blur-sm border border-white/30 overflow-hidden flex-shrink-0">
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%23f1f5f9'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%2394a3b8' font-size='12'%3EU%3C/text%3E%3C/svg%3E"
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-white">
                    <span className="font-semibold">username</span> {post.caption}
                  </p>
                  <p className="text-gray-400 text-sm mt-2">{post.timeAgo}</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="border-t border-white/20 p-4 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 p-0">
                    <Heart className="w-6 h-6" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 p-0">
                    <MessageCircle className="w-6 h-6" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 p-0">
                    <Send className="w-6 h-6" />
                  </Button>
                </div>
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 p-0">
                  <Bookmark className="w-6 h-6" />
                </Button>
              </div>

              <div className="text-white font-semibold">
                {post.likes} likes
              </div>

              <div className="text-gray-400 text-sm">
                {post.timeAgo}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
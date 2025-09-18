import React from 'react';
import { Settings, Grid3X3, Bookmark, UserPlus } from 'lucide-react';
import { Button } from './ui/button';

const ProfileHeader = ({ profile }) => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      {/* Glass container for header */}
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 shadow-xl">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
          {/* Profile Picture */}
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-white/30 to-white/20 backdrop-blur-sm border-4 border-white/30 shadow-2xl overflow-hidden">
              <img 
                src={profile.avatar} 
                alt={profile.username}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Crect width='160' height='160' fill='%23f1f5f9'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%2394a3b8' font-size='24'%3EUser%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>
            
            {/* Online indicator */}
            <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-400 rounded-full border-4 border-white/40 backdrop-blur-sm"></div>
          </div>

          {/* Profile Info */}
          <div className="flex-1 text-center md:text-left">
            {/* Username and actions */}
            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6 mb-6">
              <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
                {profile.username}
              </h1>
              
              <div className="flex space-x-3 justify-center md:justify-start">
                <Button variant="default" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-gray-800">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Follow
                </Button>
                <Button variant="outline" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-gray-800">
                  Message
                </Button>
                <Button variant="ghost" size="icon" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-gray-800">
                  <Settings className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="flex justify-center md:justify-start space-x-8 mb-6">
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-gray-800">{profile.posts}</div>
                <div className="text-sm text-gray-600">posts</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-gray-800">{profile.followers}</div>
                <div className="text-sm text-gray-600">followers</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-gray-800">{profile.following}</div>
                <div className="text-sm text-gray-600">following</div>
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-2">
              <h2 className="font-semibold text-gray-800">{profile.displayName}</h2>
              <p className="text-gray-700 leading-relaxed">{profile.bio}</p>
              <a href={profile.website} className="text-blue-600 hover:text-blue-500 transition-colors">
                {profile.website}
              </a>
            </div>
          </div>
        </div>

        {/* Navigation tabs */}
        <div className="flex justify-center space-x-12 mt-8 pt-6 border-t border-white/20">
          <button className="flex items-center space-x-2 text-gray-800 border-t-2 border-gray-800 pt-4 -mt-4">
            <Grid3X3 className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wide">Posts</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-500 hover:text-gray-700 transition-colors pt-4 -mt-4">
            <Bookmark className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wide">Saved</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
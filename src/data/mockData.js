// Mock data for Instagram-like profile
export const mockProfile = {
  username: "Suresh Kaleyannan",
  displayName: "Achievements & Credentials",
  bio: "“Explore my professional achievements and certifications, showcasing my dedication to continuous learning and skill development. This page highlights my qualifications across various fields, providing verified credentials that reflect my expertise and commitment to growth",
  website: "https://suresh.app  avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f1f5f9;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23e2e8f0;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='160' height='160' fill='url(%23grad)'/%3E%3Ccircle cx='80' cy='60' r='25' fill='%2394a3b8'/%3E%3Cpath d='M40 120 Q80 100 120 120 L120 160 L40 160 Z' fill='%2394a3b8'/%3E%3C/svg%3E",
  posts: 24,
  followers: "2.5k",
  following: 489
};

// Generate 24 mock posts for 8x3 grid
export const mockPosts = Array.from({ length: 24 }, (_, index) => {
  const postTypes = ['photo', 'carousel', 'video'];
  const randomType = postTypes[Math.floor(Math.random() * postTypes.length)];
  
  return {
    id: index + 1,
    image: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Cdefs%3E%3ClinearGradient id='grad${index}' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23${getRandomColor(index)};stop-opacity:0.8' /%3E%3Cstop offset='100%25' style='stop-color:%23${getRandomColor(index + 1)};stop-opacity:0.4' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='400' fill='url(%23grad${index})'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='24' font-weight='bold'%3E${index + 1}%3C/text%3E%3C/svg%3E`,
    type: randomType,
    likes: Math.floor(Math.random() * 1000) + 50,
    comments: Math.floor(Math.random() * 100) + 5,
    caption: getCaptionForPost(index),
    timeAgo: getTimeAgo(index)
  };
});

// Helper function to get random colors for gradients
function getRandomColor(seed) {
  const colors = [
    'f1f5f9', 'e2e8f0', 'cbd5e1', '94a3b8', '64748b',
    'f8fafc', 'f1f5f9', 'e2e8f0', 'cbd5e1', 'a1a1aa',
    'f4f4f5', 'e4e4e7', 'd4d4d8', 'a1a1aa', '71717a'
  ];
  return colors[seed % colors.length];
}

// Helper function to generate captions
function getCaptionForPost(index) {
  const captions = [
    "Exploring the beauty of glass morphism design - where transparency meets elegance. This aesthetic brings depth and sophistication to modern interfaces.",
    "Behind every pixel lies a story of creativity and passion. Today's creation represents hours of meticulous design work and attention to detail.",
    "Minimalism isn't about having less, it's about making room for what matters most. Clean lines, purposeful spacing, and thoughtful composition.",
    "The intersection of art and technology creates endless possibilities. This piece explores the delicate balance between form and function.",
    "Sometimes the most powerful designs are the quietest ones. Subtle gradients and soft shadows can speak volumes without saying a word.",
    "Creating experiences that feel both familiar and surprising. Every interaction should feel natural while still delighting the user.",
    "Light and shadow dance together to create depth and dimension. The interplay of transparency and opacity tells its own visual story.",
    "Design is thinking made visual - every element serves a purpose, every color choice tells part of the narrative we're crafting together.",
    "In a world full of noise, simplicity becomes a form of sophistication. This design strips away the unnecessary to reveal pure beauty.",
    "The magic happens in the details - subtle animations, perfect spacing, and carefully chosen typography all work together harmoniously.",
    "Translucency creates layers of meaning, allowing viewers to see through to what lies beneath while still maintaining visual interest.",
    "Every great design starts with understanding the user's journey. This piece represents countless iterations and user feedback sessions."
  ];
  return captions[index % captions.length];
}

// Helper function to generate time ago strings
function getTimeAgo(index) {
  const times = [
    "2 minutes ago", "15 minutes ago", "1 hour ago", "3 hours ago",
    "5 hours ago", "1 day ago", "2 days ago", "3 days ago",
    "1 week ago", "2 weeks ago", "3 weeks ago", "1 month ago"
  ];
  return times[index % times.length];
}
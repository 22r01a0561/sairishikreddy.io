// import React from "react";

// interface CodingProfileCardProps {
//      platform: string;
//      rating?: string;
//      problemsSolved?: string;
//      globalRank?: string;
//      badges?: string;
// }

// const CodingProfileCard: React.FC<CodingProfileCardProps> = ({ platform, rating, problemsSolved, globalRank, badges }) => {
//      const platformColors: Record<string, string> = {
//           Codeforces: "bg-blue-600",
//           LeetCode: "bg-yellow-500",
//           CodeChef: "bg-brown-600",
//           GeeksforGeeks: "bg-green-700",
//           HackerRank: "bg-green-500"
//      };

//      return (
//           <div className={`p-4 rounded-xl shadow-lg text-white ${platformColors[platform] || "bg-gray-700"}`}>
//                <h2 className="text-xl font-bold">{platform}</h2>
//                <p>⭐ Rating: {rating || "N/A"}</p>
//                <p>🔥 Problems Solved: {problemsSolved || "N/A"}</p>
//                <p>🥇 Global Rank: {globalRank || "N/A"}</p>
//                <p>🏅 Badges: {badges || "N/A"}</p>
//           </div>
//      );
// };

// export default CodingProfileCard;

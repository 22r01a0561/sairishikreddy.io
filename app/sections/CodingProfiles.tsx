// import React, { useEffect, useState } from "react";
// import CodingProfileCard from "../components/codingProfiles/CodingProfileCard";
// import { fetchCodeforcesData, fetchLeetCodeData, fetchCodeChefData, fetchGFGData, fetchHackerRankData } from "utils/api";

// const CodingProfiles = () => {
//      const [profiles, setProfiles] = useState<any>({});

//      useEffect(() => {
//           const fetchData = async () => {
//                try {
//                     const [codeforces, leetcode, codechef, gfg, hackerrank] = await Promise.all([
//                          fetchCodeforcesData(),
//                          fetchLeetCodeData(),
//                          fetchCodeChefData(),
//                          fetchGFGData(),
//                          fetchHackerRankData()
//                     ]);

//                     setProfiles((prev) => ({
//                          ...prev,
//                          codeforces: codeforces || prev.codeforces,
//                          leetcode: leetcode || prev.leetcode,
//                          codechef: codechef || prev.codechef,
//                          gfg: gfg || prev.gfg,
//                          hackerrank: hackerrank || prev.hackerrank
//                     }));
//                } catch (error) {
//                     console.error("Error fetching coding profiles:", error);
//                }
//           };

//           fetchData();
//      }, []);

//      return (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
//                {profiles.codeforces && <CodingProfileCard platform="Codeforces" {...profiles.codeforces} />}
//                {profiles.leetcode && <CodingProfileCard platform="LeetCode" {...profiles.leetcode} />}
//                {profiles.codechef && <CodingProfileCard platform="CodeChef" {...profiles.codechef} />}
//                {profiles.gfg && <CodingProfileCard platform="GeeksforGeeks" {...profiles.gfg} />}
//                {profiles.hackerrank && <CodingProfileCard platform="HackerRank" {...profiles.hackerrank} />}
//           </div>
//      );
// };

// export default CodingProfiles;

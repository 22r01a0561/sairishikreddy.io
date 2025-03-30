export const platforms = {
     codeforces: "22r01a0561",
     leetcode: "22r01a0561",
     codechef: "r22r01a0561",
     gfg: "22r01a0561",
     hackerrank: "22r01a0561"
};

// Fetch Codeforces Data
export const fetchCodeforcesData = async () => {
     try {
          const response = await fetch(`https://codeforces.com/api/user.info?handles=${platforms.codeforces}`);
          const data = await response.json();

          if (data.status === "OK" && data.result.length > 0) {
               return {
                    rating: data.result[0].rating || "N/A",
                    problemsSolved: data.result[0].maxRank || "N/A",
                    globalRank: "N/A",
                    badges: "N/A"
               };
          }
     } catch (error) {
          console.error("Error fetching Codeforces data:", error);
     }
     return null;
};

// Fetch LeetCode Data
export const fetchLeetCodeData = async () => {
     try {
          const response = await fetch("https://leetcode.com/graphql", {
               method: "POST",
               headers: { "Content-Type": "application/json" },
               body: JSON.stringify({
                    query: `
                query getUserProfile($username: String!) {
                    matchedUser(username: $username) {
                        profile { ranking }
                        submitStats { acSubmissionNum { difficulty count } }
                    }
                }
            `,
                    variables: { username: platforms.leetcode }
               }),
          });

          const data = await response.json();
          if (data.data && data.data.matchedUser) {
               return {
                    rating: "N/A",
                    problemsSolved: data.data.matchedUser.submitStats.acSubmissionNum.reduce((sum: number, item: any) => sum + item.count, 0),
                    globalRank: data.data.matchedUser.profile.ranking || "N/A",
                    badges: "N/A"
               };
          }
     } catch (error) {
          console.error("Error fetching LeetCode data:", error);
     }
     return null;
};

// Fetch CodeChef Data
export const fetchCodeChefData = async () => {
     try {
          const response = await fetch(`https://www.codechef.com/users/${platforms.codechef}`);
          if (!response.ok) throw new Error("Failed to fetch CodeChef data");

          const html = await response.text();
          const ratingMatch = html.match(/"rating">(\d+)</);
          const globalRankMatch = html.match(/"global_rank">(\d+)</);

          return {
               rating: ratingMatch ? ratingMatch[1] : "N/A",
               problemsSolved: "N/A",
               globalRank: globalRankMatch ? globalRankMatch[1] : "N/A",
               badges: "N/A"
          };
     } catch (error) {
          console.error("Error fetching CodeChef data:", error);
     }
     return null;
};

// Fetch GeeksforGeeks Data
export const fetchGFGData = async () => {
     try {
          const response = await fetch(`https://auth.geeksforgeeks.org/user/${platforms.gfg}/practice/`);
          if (!response.ok) throw new Error("Failed to fetch GFG data");

          const html = await response.text();
          const problemsSolvedMatch = html.match(/"problems solved">(\d+)</);

          return {
               rating: "N/A",
               problemsSolved: problemsSolvedMatch ? problemsSolvedMatch[1] : "N/A",
               globalRank: "N/A",
               badges: "N/A"
          };
     } catch (error) {
          console.error("Error fetching GFG data:", error);
     }
     return null;
};

// Fetch HackerRank Data
export const fetchHackerRankData = async () => {
     try {
          const response = await fetch(`https://www.hackerrank.com/rest/hackers/${platforms.hackerrank}/profile`);
          const data = await response.json();

          if (data) {
               return {
                    rating: "N/A",
                    problemsSolved: "N/A",
                    globalRank: data.stars || "N/A",
                    badges: data.badges.length || "N/A"
               };
          }
     } catch (error) {
          console.error("Error fetching HackerRank data:", error);
     }
     return null;
};

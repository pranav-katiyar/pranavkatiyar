import { useEffect, useState } from "react";
import InformationSection from "../components/InformationSection";
import SectionHeading from "../components/SectionHeading";
import styles from "./Github.module.css";

type GithubUser = {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
  location?: string;
  blog?: string;
};

type Repo = {
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
};

function Github() {
  const [user, setUser] = useState<GithubUser | null>(null);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGithub() {
      setLoading(true);
      try {
        const userRes = await fetch("https://api.github.com/users/pranav-katiyar");
        const userData = await userRes.json();
        setUser(userData);

        const repoRes = await fetch("https://api.github.com/users/pranav-katiyar/repos?sort=updated&per_page=6");
        const repoData = await repoRes.json();
        setRepos(repoData);
      } catch (error) {
        setUser(null);
        setRepos([]);
      }
      setLoading(false);
    }
    fetchGithub();
  }, []);

  return (
    <InformationSection>
      <SectionHeading>GitHub Information</SectionHeading>
      {loading ? (
        <p>Loading...</p>
      ) : user ? (
        <div className={styles.githubContent}>
          {/* Profile Card */}
          <div className={styles.profileCard}>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              <img src={user.avatar_url} alt={user.login} className={styles.avatar} />
            </a>
            <h3 className={styles.profileName}>{user.name || user.login}</h3>
            <p className={styles.profileLogin}>@{user.login}</p>
            <p className={styles.profileBio}>{user.bio}</p>
            <div className={styles.profileStats}>
              <span>🌟 {user.public_repos} repos</span>
              <span>👥 {user.followers} followers</span>
              <span>🔗 {user.following} following</span>
            </div>
            {user.location && <div className={styles.profileLocation}>📍 {user.location}</div>}
            {user.blog && user.blog.startsWith("http") && (
              <a href={user.blog} target="_blank" rel="noopener noreferrer" className={styles.profileBlog}>
                {user.blog}
              </a>
            )}
          </div>
          {/* Recent Repos */}
          <div className={styles.reposSection}>
            <h4 className={styles.reposHeading}>Recent Public Repositories</h4>
            <div className={styles.repoList}>
              {repos.map(repo => (
                <a
                  key={repo.name}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.repoCard}
                >
                  <div className={styles.repoName}>{repo.name}</div>
                  <div className={styles.repoDesc}>{repo.description}</div>
                  <div className={styles.repoMeta}>
                    {repo.language && <span>🛠 {repo.language}</span>}
                    <span>⭐ {repo.stargazers_count}</span>
                    <span>🍴 {repo.forks_count}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <p>Could not load GitHub info.</p>
      )}
    </InformationSection>
  );
}

export default Github;
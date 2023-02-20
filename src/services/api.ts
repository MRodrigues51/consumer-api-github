import axios from 'axios';
import { langColors } from './config';

// const api = axios.create({
//   baseURL: process.env.REACT_APP_API_BASE_URL,
// });

// export default api;


export function getLangsFrom(repositories: any) {
  let stats = repositories
    .map((repository: any) => repository.language)
    .reduce(
      (data: any, language: any) => ({
        ...data,
        [language]: (data[language] || 0) + 1,
      }),
      []
    );

  delete stats.null;

  stats = Object.keys(stats)
    .map((language) => ({
      name: language,
      count: stats[language],
      color: langColors[language.toLowerCase()],
    }))
    .sort((a, b) => b.count - a.count);

  return stats;
};

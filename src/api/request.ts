import http from 'http';

export default function request(url: string) {
  return new Promise(resolve => {
    // Ceci est un exemple de requête http, par exemple pour récupérer
    // des données utilisateur à partir d'une API.
    // Ce module est simulé dans __mocks__/request.js
    http.get({path: url}, (response: any) => {
      let data = '';
      response.on('data', (_data: string) => (data += _data));
      response.on('end', () => resolve(data));
    });
  });
}
import A from 'axios';

const baseURL = 'https://api.twitch.tv/kraken/';

export const mkClient = clientId =>
  A.create({
    baseURL,
    headers: { 'Client-ID': clientId },
  });

export default mkClient;

//

export const videos = (id, client) =>
  client.get(
    'videos',
    { params: { id } },
  );

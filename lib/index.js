import A from 'axios';
import * as K from 'kefir';
import * as I from 'infestines';
import * as L from 'partial.lenses';

const baseURL = 'https://api.twitch.tv/helix/';

//

export const mkClient = clientId =>
  A.create({
    baseURL,
    headers: { 'Client-ID': clientId },
  });

export default mkClient;

//

const takeData = L.get('data');

//

const __doGet = (path, params, client) =>
  K.fromPromise(client.get(path, { params }));

// API calls

export const API = {
  videos: I.curry(function videos(id, client) {
    return __doGet('videos', { id }, client);
  }),
};

// Derived methods

export const videosFor = I.curry(function videoFor(id, client) {
  return API.videos(id, client).map(L.get(['data', 'data']));
});

export const videoFor = I.curry(function videoFor(id, client) {
  return API.videos(id, client).map(L.get(['data', 'data', L.first]));
});

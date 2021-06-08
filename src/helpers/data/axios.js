import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;
const apiURL = 'https://api.discogs.com/database';
const apiPriceUrl = 'https://api.discogs.com/releases';
const consumerKey = process.env.REACT_APP_DISCOGS_CONKEY;
const consumerSecret = process.env.REACT_APP_DISCOGS_SECKEY;

const getAlbums = () => new Promise((resolve, reject) => {
  axios.get(`${apiURL}/search?q=Taylor_Swift&key=${consumerKey}&secret=${consumerSecret}`)
    .then((response) => resolve(response.data.results))
    .catch((error) => reject(error));
});

const getArtist = () => new Promise((resolve, reject) => {
  axios.get(`${apiURL}/search?q=The_Beatles&type=artist&key=${consumerKey}&secret=${consumerSecret}`)
    .then((response) => resolve(response.data.results))
    .catch((error) => reject(error));
});

// const getCollection = (userObj) => new Promise((resolve, reject) => {
//   axios.get(`${dbURL}.json`, userObj)
//     .then((response) => resolve(Object.values(response.data)))
//     .catch((error) => reject(error));
// });

// const getAllCollection = () => new Promise((resolve, reject) => {
//   getCollection().then((albumArray) => {
//     const collectionList = albumArray.map((album) => getCollection(album));
//     Promise.all(collectionList).then((response) => resolve(response));
//   }).catch((error) => reject(error));
// });

const getCollectionReleases = (user) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/releases.json?orderBy="uid"&equalTo="${user.uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const getCollectionArtists = (user) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/artists.json?orderBy="uid"&equalTo="${user.uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const getCollectionLabels = (user) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/labels.json?orderBy="uid"&equalTo="${user.uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const getCollectionMasters = (user) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/masters.json?orderBy="uid"&equalTo="${user.uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const getPrice = (id) => new Promise((resolve, reject) => {
  axios.get(`${apiPriceUrl}/${id}`)
    .then((response) => resolve(response.data.lowest_price))
    .catch((error) => reject(error));
});

const addAlbum = (obj, user) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/releases.json`, obj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbURL}/releases/${response.data.name}.json`, body)
        .then(() => {
          getCollectionReleases(user).then((ReleasesArray) => resolve(ReleasesArray));
        });
    }).catch((error) => reject(error));
});

const addArtist = (obj, user) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/artists.json`, obj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbURL}/artists/${response.data.name}.json`, body)
        .then(() => {
          getCollectionArtists(user).then((ArtistsArray) => resolve(ArtistsArray));
        });
    }).catch((error) => reject(error));
});

const AddLabel = (obj, user) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/labels.json`, obj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbURL}/labels/${response.data.name}.json`, body)
        .then(() => {
          getCollectionLabels(user).then((LabelsArray) => resolve(LabelsArray));
        });
    }).catch((error) => reject(error));
});

const AddMaster = (obj, user) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/masters.json`, obj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbURL}/masters/${response.data.name}.json`, body)
        .then(() => {
          getCollectionMasters(user).then((MastersArray) => resolve(MastersArray));
        });
    }).catch((error) => reject(error));
});

const getSingleAlbum = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/releases/${firebaseKey}.json`)
    .then((album) => resolve(album.data))
    .catch((error) => reject(error));
});

export {
  getAlbums, addAlbum, getPrice, getSingleAlbum, getCollectionReleases, getCollectionArtists, getCollectionLabels, getCollectionMasters, getArtist, addArtist, AddLabel, AddMaster
};

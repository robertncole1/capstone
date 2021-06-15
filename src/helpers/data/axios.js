import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;
const apiURL = 'https://api.discogs.com/database';
const apiPriceUrl = 'https://api.discogs.com/releases';
const consumerKey = process.env.REACT_APP_DISCOGS_CONKEY;
const consumerSecret = process.env.REACT_APP_DISCOGS_SECKEY;

const getAlbums = (apiInput) => new Promise((resolve, reject) => {
  axios.get(`${apiURL}/search?q=${apiInput}&key=${consumerKey}&secret=${consumerSecret}`)
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

const getPublicReleases = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/releases.json?orderBy="publicCollection"&equalTo=true`)
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

const updateArtist = (artist, user) => new Promise((resolve, reject) => {
  axios.patch(`${dbURL}/artists/${artist.firebaseKey}.json`, artist)
    .then(() => getCollectionArtists(user).then(resolve))
    .catch((error) => reject(error));
});

const updateRelease = (release, user) => new Promise((resolve, reject) => {
  axios.patch(`${dbURL}/releases/${release.firebaseKey}.json`, release)
    .then(() => getCollectionReleases(user).then(resolve))
    .catch((error) => reject(error));
});

const updateLabel = (label, user) => new Promise((resolve, reject) => {
  axios.patch(`${dbURL}/labels/${label.firebaseKey}.json`, label)
    .then(() => getCollectionLabels(user).then(resolve))
    .catch((error) => reject(error));
});

const updateMaster = (master, user) => new Promise((resolve, reject) => {
  axios.patch(`${dbURL}/masters/${master.firebaseKey}.json`, master)
    .then(() => getCollectionMasters(user).then(resolve))
    .catch((error) => reject(error));
});

const deleteArtist = (firebaseKey, user) => new Promise((resolve, reject) => {
  axios.delete(`${dbURL}/artists/${firebaseKey}.json`)
    .then(() => getCollectionArtists(user).then(resolve))
    .catch((error) => reject(error));
});

const deleteLabel = (firebaseKey, user) => new Promise((resolve, reject) => {
  axios.delete(`${dbURL}/labels/${firebaseKey}.json`)
    .then(() => getCollectionLabels(user).then(resolve))
    .catch((error) => reject(error));
});

const deleteRelease = (firebaseKey, user) => new Promise((resolve, reject) => {
  axios.delete(`${dbURL}/releases/${firebaseKey}.json`)
    .then(() => getCollectionReleases(user).then(resolve))
    .catch((error) => reject(error));
});

const deleteMaster = (firebaseKey, user) => new Promise((resolve, reject) => {
  axios.delete(`${dbURL}/masters/${firebaseKey}.json`)
    .then(() => getCollectionMasters(user).then(resolve))
    .catch((error) => reject(error));
});

export {
  getAlbums,
  addAlbum,
  getPrice,
  getPublicReleases,
  getSingleAlbum,
  updateRelease,
  updateMaster,
  updateLabel,
  updateArtist,
  getCollectionReleases,
  getCollectionArtists,
  getCollectionLabels,
  getCollectionMasters,
  getArtist,
  addArtist,
  AddLabel,
  AddMaster,
  deleteArtist,
  deleteLabel,
  deleteRelease,
  deleteMaster
};

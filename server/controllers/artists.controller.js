import _ from 'lodash';
import Artist from '../models/artist.model';
import Media from '../models/media.model';
import auxs from '../helpers/auxs.helper';

/**
 * Get the list of recent artists
 * @returns {artists}
 */
function recent(req, res) {
  return Artist.find()
  .select('name')
  .limit(10)
  .sort('-createdAt')
  .then(artist => res.status(artist ? 200 : 404).send(artist || {}))
  .catch(e => res.status(500).send(e));
}

/**
 * Autocomplete artists name
 * @returns {artists}
 */
function complete(req, res) {
  return Artist
    .find({ name: { $regex: `.*${req.params.term.toLowerCase()}.*` } })
    .select('name')
    .limit(10)
    .then(artist => res.send(artist));
}

/**
 * Get the list of featured artists
 * @returns {artists}
 */
function featured(req, res) {
  return Artist.find()
  .select('name')
  .sort('-createdAt')
  .then(artist =>
    res
      .status(artist ? 200 : 404)
      .send(artist ? auxs.sortRandomArray(artist, 10) : {})
    )
  .catch(e => res.status(500).send(e));
}

/**
 * Get the selected user about infos
 * @returns {User}
 */
function about(req, res) {
  return res.send(_.pick(req.artist, ['_id', 'name', 'createdAt']));
}

/**
 * Get the selected artist medias
 * @returns {Artist}
 */
function medias(req, res) {
  console.log(global.userID, "global.userID");
  return Media
    .find({ active: true, artist: req.artist._id })
    .populate('owner', 'nickname picture _id about')
    .populate('comments.owner', 'nickname picture _id about')
    .populate('artist', 'name')
    .sort('-createdAt')
    .limit(20)
    .then(data => res.status(data[0] ? 200 : 404).send(data ? auxs.getMediaResponse(data) : {}))
    .catch(e => res.status(500).send(e));
}

/**
 * Follow the selected user
 * @returns {User}
 */
function follow(req, res) {
  return res.json({ hello: 'artists_follow' });
}

/**
 * Unfollow the selected user
 * @returns {User}
 */
function followDelete(req, res) {
  return res.json({ hello: 'artists_followDelete' });
}

export default { recent, complete, featured, about, medias, follow, followDelete };

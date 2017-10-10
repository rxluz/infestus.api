import _ from 'lodash';
import Artist from '../models/artist.model';
import Media from '../models/media.model';
import auxs from '../helpers/auxs.helper';

/**
 * Get the list of recent artists
 * @returns {artists}
 */
function recent(req, res) {
  return res.json({ hello: 'recent' });
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
  return res.json({ hello: 'artists_featured' });
}

/**
 * Get the selected user about infos
 * @returns {User}
 */
function about(req, res) {
  return res.send(_.pick(req.artist, ['_id', 'name', 'createdAt']));
}

/**
 * Get the selected user medias
 * @returns {User}
 */
function medias(req, res) {
  return Media
    .find({ active: true })
    .populate('owner', 'nickname picture _id about')
    .populate('comments.owner', 'nickname picture _id about')
    .populate('artist', 'name')
    .sort('-createdAt')
    .limit(20)
    .then(data => res.send(auxs.getMediaResponse(data)));
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

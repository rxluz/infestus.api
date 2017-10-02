import Media from '../models/media.model';
import Artist from '../models/artist.model';

const ObjectId = require('mongoose').Types.ObjectId;

/**
 * Get the featured medias
 * @returns {medias}
 */
function featured(req, res) {
  return res.json({ hello: 'media_featured' });
}

/**
 * Creates a new media
 * @returns {media}
 */
function create(req, res) {
  return (req.body.artist
    ? findOrCreateArtist(req.body.artist)
      .then(artistID => createFinish(req, res, artistID))
      .catch(e => res.status(500).send(e))
    : createFinish(req, res));
}

function findOrCreateArtist(name) {
  return Artist.findOne({ name: name.toLowerCase() }).then((artist) => {
    if (artist) {
      return Promise.resolve(artist._id);
    }

    const artistNew = new Artist({ name });

    return artistNew.save()
      .then(artnew => Promise.resolve(artnew.id))
      .catch(e => Promise.reject(e));
  });
}


function createFinish(req, res, artistID) {
  const body = {
    picture: req.body.picture,
    owner: req.user._id,
    artist: (req.body.artist ? artistID : undefined),
    title: (req.body.title ? req.body.title : undefined),
    place: {
      name: (req.body.place_name ? req.body.place_name : undefined),
      lat: (req.body.place_lat ? req.body.place_lat : undefined),
      lng: (req.body.place_lng ? req.body.place_lng : undefined)
    }
  };

  const media = new Media(body);

  return media
    .save()
    .then(() => res.send(media))
    .catch(e => res.status(400).send(e));
}

function updateFinish(req, res, artistID) {
  return Media
    .findOne({ _id: new ObjectId(req.params.mediaID), owner: req.user._id, active: true })
    .then((media) => {
      media.artist = artistID ? new ObjectId(artistID) : media.artist;
      media.title = req.body.title ? req.body.title : media.title;
      media.place.name = req.body.place_name ? req.body.place_name : media.place.name;
      media.place.lat = req.body.place_lat ? req.body.place_lat : media.place.lat;
      media.place.lng = req.body.place_lng ? req.body.place_lng : media.place.lng;

      return media
        .save()
        .then(() => res.send(media))
        .catch(e => res.status(401).send(e));
    })
    .catch(e => res.status(404).send(e));
}

/**
 * Update the selected media
 * @returns {media}
 */
function update(req, res) {
  return (
    req.body.artist
      ? findOrCreateArtist(req.body.artist)
        .then(artistID => updateFinish(req, res, artistID))
        .catch(e => res.status(500).send(e))
      : updateFinish(req, res)
  );
}

/**
 * Delete the selected media
 * @returns {media}
 */
function remove(req, res) {
  return Media
    .findOne({ _id: new ObjectId(req.params.mediaID), owner: req.user._id, active: true })
    .then((media) => {
      media.active = false;

      return media
        .save()
        .then(() => res.send())
        .catch(e => res.status(401).send(e));
    })
    .catch(e => res.status(404).send(e));
}

/**
 * Get the selected media infos
 * @returns {media}
 */
function get(req, res) {
  return Media
    .findOne({ _id: new ObjectId(req.params.mediaID), active: true })
    .populate('owner', 'nickname picture _id about')
    .populate('comments.owner', 'nickname picture _id about')
    .populate('artist', 'name')
    .then(media => (media ? res.send(media) : res.status(404).send()))
    .catch(e => res.status(404).send(e));
}

/**
 * Get the selected media comments
 * @returns {comments}
 */
function getComments(req, res) {
  return Media.findOne({ _id: req.params.mediaID, active: true })
    .populate('comments.owner', '_id nickname picture')
    .then(media => (media ? res.send(media.comments) : res.status(404).send({})))
    .catch(e => res.status(500).send(e));
}

/**
 * Post a comment in selected media
 * @returns {*}
 */
function createComment(req, res) {
  return Media.findOne({ _id: req.params.mediaID, active: true })
    .then(media => (
      media
        ? createCommentFinish(req, res)
        : res.status(404).send()
    ))
    .catch(e => res.status(404).send(e));
}

function createCommentFinish(req, res) {
  return Media.findByIdAndUpdate(
    req.params.mediaID,
    { $push:
      { comments: { content: req.body.content, owner: new ObjectId(req.user._id) } }
    },
    { safe: true, upsert: true },
    err => (err
      ? res.status(404)
      : getComments(req, res)
    )
  );
}

/**
 * Remove a comment in selected media
 * @returns {*}
 */
function removeComment(req, res) {
  console.log(req.params.commentID, req.params.mediaID);
  return Media.findOne({
    _id: req.params.mediaID,
    'comments._id': req.params.commentID,
    active: true
  })
    .then((media) => {
      if(!media) return res.status(403).send();

      const comment=media.comments.filter(c => c._id == req.params.commentID);

      if(media.owner !== req.user._id.toString() && comment[0].owner.toString()!==req.user._id.toString()) {
        return res.status(401).send();
      }

      media.comments.id(req.params.commentID).remove();

      return media.save()
      .then(() => res.send())
      .catch(e => res.status(500).send(e));
    })
    .catch(e => res.status(405).send(e));

  return res.json({ hello: 'media_removeComment' });
}


function removeCommentFinish(req, res) {
  return res.json({ hello: 'media_removeComment' });
}

/**
 * Post a flag in selected media
 * @returns {*}
 */
function createFlag(req, res) {
  return res.json({ hello: 'media_flag' });
}

/**
 * Remove flag in selected media
 * @returns {*}
 */
function removeFlag(req, res) {
  return res.json({ hello: 'media_removeFlag' });
}

/**
 * Post a flag in comment in selected media
 * @returns {*}
 */
function createCommentFlag(req, res) {
  return res.json({ hello: 'media_Commentflag' });
}

/**
 * Remove flag in a comment in selected media
 * @returns {*}
 */
function removeCommentFlag(req, res) {
  return res.json({ hello: 'media_CommentremoveFlag' });
}

/**
 * Get likes list in selected media
 * @returns {*}
 */
function getLike(req, res) {
  return res.json({ hello: 'media_getLike' });
}

/**
 * Post a like in selected media
 * @returns {*}
 */
function createLike(req, res) {
  return res.json({ hello: 'media_createLike' });
}

/**
 * Remove a like in selected media
 * @returns {*}
 */
function removeLike(req, res) {
  return res.json({ hello: 'media_removeLike' });
}

export default {
  featured,
  create,
  update,
  remove,
  get,
  getComments,
  createComment,
  removeComment,
  createFlag,
  removeFlag,
  createCommentFlag,
  removeCommentFlag,
  getLike,
  createLike,
  removeLike
};

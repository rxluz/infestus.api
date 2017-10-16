import Media from '../models/media.model';

const checkMediaID = (req, res, next) =>
  Media.findOne({ _id: req.params.mediaID, active: true })
    .then((media) => {
      if (!media) return res.status(404).send();
      req.media = media;
      return next();
    })
    .catch(() => res.status(404).send());

export default { checkMediaID };

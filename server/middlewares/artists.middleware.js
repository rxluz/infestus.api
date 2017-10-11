import Artist from '../models/artist.model';

const checkArtistID = (req, res, next) =>
  Artist.findOne({ _id: req.params.artistID, active: true })
    .then((artist) => {
      if (!artist) return res.status(404).send();
      req.artist = artist;
      return next();
    })
    .catch(() => res.status(404).send());

export default { checkArtistID };

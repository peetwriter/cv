import WorkPlace from '../models/workPlace';
import cuid from 'cuid';
import slug from 'slug';
import sanitizeHtml from 'sanitize-html';

export function getWorkPlaces(req, res) {
  WorkPlace.find().sort('-startDate').exec((err, workPlaces) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json({ workPlaces });
  });
}

export function addWorkPlace(req, res) {
  if (!req.body.workPlace.title || !req.body.workPlace.content || !req.body.workPlace.startDate) {
    return res.status(403).end();
  }

  const newWorkPlace = new WorkPlace(req.body.workPlace);

  // Let's sanitize inputs
  newWorkPlace.title = sanitizeHtml(newWorkPlace.title);
  newWorkPlace.companyUrl = sanitizeHtml(newWorkPlace.name);
  newWorkPlace.content = sanitizeHtml(newWorkPlace.content);

  newWorkPlace.slug = slug(newWorkPlace.title.toLowerCase(), { lowercase: true });
  newWorkPlace.cuid = cuid();
  newWorkPlace.save((err, saved) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.json({ workPlace: saved });
  });
}

export function getWorkPlace(req, res) {
  const newSlug = req.query.slug.split('-');
  const newCuid = newSlug[newSlug.length - 1];
  WorkPlace.findOne({ cuid: newCuid }).exec((err, workPlace) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json({ workPlace });
  });
}

export function deleteWorkPlace(req, res) {
  const workPlaceId = req.body.workPlaceId;
  WorkPlace.findById(workPlaceId).exec((err, workPlace) => {
    if (err) {
      return res.status(500).send(err);
    }

    workPlace.remove(() => {
      res.status(200).end();
    });
  });
}

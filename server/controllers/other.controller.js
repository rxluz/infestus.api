import _ from 'lodash';
import Feedback from '../models/feedback.model';


/**
 * Post the user feedback
 * @returns {*}
 */
function createFeedback(req, res) {
  const feedback = new Feedback(_.pick(req.body, ['name', 'email', 'message']));

  return feedback.save()
    .then(() => res.send())
    .catch(e => res.send(e));
}

export default { createFeedback };

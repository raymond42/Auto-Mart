import ads from '../models/ads';

const deletePosted = (req, res) => {
  const post = ads.find(p => p.id === parseInt(req.params.id, 10));

  if (!post) {
    res.status(400).json({
      status: 400,
      error: 'Car Ad not found',
    });
    return;
  }
  const index = ads.indexOf(post);
  ads.splice(index, 1);
  res.status(200).send({
    status: 200,
    data: 'Car Ad successfully deleted',
  });
};

export default deletePosted;

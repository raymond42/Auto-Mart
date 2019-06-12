import ads from '../../models/ads';

const deletePosted = (req, res) => {
  if (req.user.isAdmin !== 'true') {
    res.status(403).json({
      status: 403,
      message: 'Sorry, this service is strictly ',
    });
    return;
  }
  const post = ads.find(p => p.id === parseInt(req.params.id, 10));

  if (!post) {
    res.status(404).json({
      status: 404,
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

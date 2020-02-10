export default (req, res, next) => {
  // req の path によって変えるなど内容は自由に……
  res.setHeader("Cache-Control", "public, max-age=600, s-maxage=3000");
  next();
};

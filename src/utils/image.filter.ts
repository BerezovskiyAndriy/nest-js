export const imageFilter = (req, file, callback) => {
  if (!file.originalname.match(/\.(jpeg|png|jpg)$/)) {
    return callback(new Error('This format is not allowed'), false);
  }
  callback(null, true);
};

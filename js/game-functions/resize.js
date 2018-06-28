export const resize = (frame, given) => {
  let obj;
  const ratio = given.width / given.height;
  if (frame.width / ratio > frame.height) {
    obj = {
      width: frame.height * ratio,
      height: frame.height,
    };
  } else if (frame.width / ratio < frame.height) {
    obj = {
      width: frame.width,
      height: frame.width / ratio,
    };
  } else {
    obj = {
      width: frame.width,
      height: frame.height,
    };
  }
  return obj;
};

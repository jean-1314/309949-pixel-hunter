export const resize = (frame, given) => {
  const ratio = given.width / given.height;
  if (frame.width / ratio > frame.height) {
    return {
      width: frame.height * ratio,
      height: frame.height,
    };
  } else if (frame.width / ratio < frame.height) {
    return {
      width: frame.width,
      height: frame.width / ratio,
    };
  } else {
    return {
      width: frame.width,
      height: frame.height,
    };
  }
};

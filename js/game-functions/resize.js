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

export const resizeImages = (element) => {
  const gameOptions = element.querySelectorAll(`.game__option`);
  gameOptions.forEach((option) => {
    const frame = {
      width: option.clientWidth,
      height: option.clientHeight,
    };
    const imgElement = option.querySelector(`img`);
    const image = new Image();
    image.src = imgElement.src;
    image.onload = () => {
      const given = {
        width: image.width,
        height: image.height,
      };
      const newSizes = resize(frame, given);
      imgElement.width = newSizes.width;
      imgElement.height = newSizes.height;
    };
  });
};

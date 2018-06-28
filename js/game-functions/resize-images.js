import {resize} from './resize';

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
      const correctFrame = resize(frame, given);
      imgElement.width = correctFrame.width;
      imgElement.height = correctFrame.height;
    };
  });
};

export const validate = (value) => {
  if (value === '') {
    return true;
  }

  if (value) {
    const array = value.split(',');
    for (let i = 0; i < array.length; i += 1) {
      if (!Number.isFinite(+array[i])) {
        return false;
      }
    }

    if (array.length > 10) {
      return false;
    }
  }
  return true;
};

export const countBays = (boxes) => {
  if (!boxes) {
    return 0;
  }

  const array = boxes.split(',');
  for (let i = 0; i < array.length; i += 1) {
    array[i] = parseFloat(array[i]);
    if (Number.isNaN(array[i])) {
      array[i] = 0;
    }
  }

  const total = array.reduce((acc, current) => acc + current);

  return Math.ceil(total / 10);
};

const sortByTitle = (array) => {
  return array.sort((a, b) => {
    const titleA = a.title ? a.title.toLowerCase() : null;
    const titleB = b.title ? b.title.toLowerCase() : null;

    if (titleA === null && titleB === null) return 0;
    if (titleA === null) return 1;
    if (titleB === null) return -1;
    if (titleA < titleB) return -1;
    if (titleA > titleB) return 1;
    return 0;
  });
};

module.exports = { sortByTitle };

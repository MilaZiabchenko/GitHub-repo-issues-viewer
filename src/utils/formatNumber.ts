const formatNumber = (number: number) => {
  const stringifiedNumber = number.toString();

  if (number >= 1000) {
    return `${stringifiedNumber.slice(0, stringifiedNumber.length - 3)} K`;
  }

  return stringifiedNumber;
};

export { formatNumber };

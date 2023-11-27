export default formatMoney = (value) => {
  if (Number(value) > 1000 && Number(value) < 1000000) {
    return value.slice(0, -3);
  }
  if (Number(value) >= 1000000) {
    return value.slice(0, -3).slice(0, -3) + "." + value.slice(-6, -3);
  }
};

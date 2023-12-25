export default function formatNumberWithCommas(value) {
  // 숫자가 아닐경우 그대로 리턴
  if (isNaN(value)) {
    return value;
  }
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

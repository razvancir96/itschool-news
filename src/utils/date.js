// Functia primeste formatul de data de la The Guardian si generaza formatul dorit de noi.
export function getFormattedDate(dateString) {
  const currentDate = new Date(dateString);
  let month = currentDate.getMonth();
  month = month + 1;
  let day = currentDate.getDate();
  let year = currentDate.getFullYear();
  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }

  return `${day}/${month}/${year}`;
}

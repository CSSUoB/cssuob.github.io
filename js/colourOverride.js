/**
 * Attaches CSS classes to the "CSS" ASCII art depending on the day of the year
 *
 *            31st March: Trans Day of Visibility ("tdov")
 *         Month of June: Pride ("pride")
 *    13th-20th November: Transgender Visibility Week + Transgender Day of Remembrance ("tdov")
 * 18th December onwards: Christmas ("christmas")
 *
 * Classes are defined in:
 *  css/type.scss
 */
document.addEventListener("DOMContentLoaded", () => {
  let asciiElement = document.getElementsByClassName("ascii")[0];

  if (!asciiElement) {
    return;
  }

  const currentDate = new Date();

  // 31st March
  if (currentDate.getMonth() === 2 && currentDate.getDate() === 31) {
    asciiElement.classList.add("tdov");
  }

  // June
  if (currentDate.getMonth() === 5) {
    asciiElement.classList.add("pride");
  }

  // Transgender Visibility Week (13th-19th Nov) + Transgender Day of Remembrance (20th Nov)
  if (currentDate.getMonth() === 10 && currentDate.getDate() >= 13 && currentDate.getDate() <= 20) {
    asciiElement.classList.add("tdov");
  }

  // 18th December onwards
  if (currentDate.getMonth() === 11 && currentDate.getDate() >= 18) {
    asciiElement.classList.add("christmas");
  }
});

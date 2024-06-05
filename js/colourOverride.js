/**
 * Attaches CSS classes to the "CSS" ASCII art depending on the day of the year
 *
 *            31st March: Trans Day of Visibility ("tdov")
 *         Month of June: Pride ("pride")
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

  // 18th December onwards
  if (currentDate.getMonth() === 11 && currentDate.getDate() >= 18) {
    asciiElement.classList.add("christmas");
  }
});
const progressBar = document.getElementById("inner");

// progressBar.style.width = "50%";

i = 0;
function count() {
  do {
    i++;
  } while (i % 1e5 != 0);

  if (i < 1e7) {
    // console.log(i);
    console.log(`${(i / 1e7) * 100}%`);
    progressBar.style.width = `${(i / 1e7) * 100}%`;
    setTimeout(count, 100);
  }
}

count();

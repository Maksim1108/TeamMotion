window.onscroll = () => {stickyHeader()};

const header = document.getElementById("header");

const sticky = header.offsetTop;

const stickyHeader = () => {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
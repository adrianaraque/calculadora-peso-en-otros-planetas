/**
 * m = masa(se traduce a peso)
 * g = gravedad( tambien son constantes de cada planeta)
 *
 * constante de newtons 0,102
 *
 * m.g=(peso planeta) <-resultado en newtons se debe convertir en kilogramo
 *
 * se multiplica peso planeta por la constante en newtons
 *
 */
const peso = document.getElementById("peso"), //aqui masa =peso= masa
  result = document.getElementById("result"); // se muestra el peso

const cal = () => {
  showSlides(slideIndex);
};

const calcularPeso = (m, p) => {
  m = parseInt(peso.value);
  const newtons = 0.102,
    mercurio = 3.7,
    marte = 3.711,
    urano = 8.87,
    venus = 8.87,
    tierra = 9.807,
    saturno = 10.44,
    neptuno = 11.15,
    jupiter = 24.79;
  let convert;
  switch (p) {
    case 1:
      convert = m * mercurio;
      return Math.round(convert * newtons);
    case 2:
      convert = m * venus;
      return Math.round(convert * newtons);
    case 3:
      convert = m * tierra;
      return Math.round(convert * newtons);
    case 4:
      convert = m * marte;
      return Math.round(convert * newtons);
    case 5:
      convert = m * jupiter;
      return Math.round(convert * newtons);
    case 6:
      convert = m * saturno;
      return Math.round(convert * newtons);
    case 7:
      convert = m * urano;
      return Math.round(convert * newtons);
    case 8:
      convert = m * neptuno;
      return Math.round(convert * newtons);
    default:
      break;
  }
};
let slideIndex = 1;
function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlide");
  const dots = document.getElementsByClassName("dots");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  result.innerHTML = `${calcularPeso(peso.value, slideIndex)}`;
}
// Next/previous controls
function plusSlide(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

<template>
  <div>
    <div class="parallax">
    </div>
    <div class="container">
      <div class="row">
        <div class="container we-team">
          <div class="row">
            <img src="~/static/sello.png"
                 alt="logo">
            <h1>PROYECTO ASCENDERE</h1>
          </div>
        </div>
        <div class="container">
          <div class="section-text">
            <h2>Innovando Cambios</h2>
            <p>
              {{description}}
            </p>
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6">
              <figure class="column-img">
                <img src="https://firebasestorage.googleapis.com/v0/b/innovaciondocente-utpl.appspot.com/o/index%2FMI.jpg?alt=media&token=a7d1523d-a0f4-4f7e-bfb4-d07af5cb145c"
                     alt="img-avatar" />
                <figcaption>
                  <h5>Dirección de Innovación, Formación y Evaluación Docente</h5>
                  <h3>PhD. María Isabel Loaiza</h3>
                </figcaption>
              </figure>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <figure class="column-img">
                <img src="https://firebasestorage.googleapis.com/v0/b/innovaciondocente-utpl.appspot.com/o/acerca-nosotros%2FNuve.jpg?alt=media&token=04299d85-7d07-4858-8d54-204ff1ef5705"
                     alt="img-avatar" />
                <figcaption>
                  <h5>Formación Docente</h5>
                  <h3>Ing. Nuve Briceño</h3>
                </figcaption>
              </figure>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <figure class="column-img">
                <img src="https://firebasestorage.googleapis.com/v0/b/innovaciondocente-utpl.appspot.com/o/acerca-nosotros%2FAngela.jpg?alt=media&token=7a376226-ff6d-487f-9f14-c480ffe4fbb7"
                     alt="img-avatar" />
                <figcaption>
                  <h5>Innovación Docente</h5>
                  <h3>Mgtr. Angela Salazar</h3>
                </figcaption>
              </figure>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <figure class="column-img">
                <img src="https://firebasestorage.googleapis.com/v0/b/innovaciondocente-utpl.appspot.com/o/acerca-nosotros%2FLourdes.jpg?alt=media&token=0d6affea-bb7a-406c-b092-100cf67c4b8d"
                     alt="img-avatar" />
                <figcaption>
                  <h5>Evaluación Docente</h5>
                  <h3>Mgtr. Lourdes Cueva</h3>
                </figcaption>
              </figure>
            </div>
          </div>
          <div class="section-text">
            <h2>InDevelomenpt Company</h2>
            <p>
              Compañía de desarrollo de software fundada en 2018, por un grupo de estudiantes de la
              titulación de Ingeniería
              en Sistemas Informáticos y Computación de la UTPL. Tras la intervención en el
              proyecto
              Ascendere, nace el grupo con la visión de generar innovación mediante el uso de
              nuevas
              tecnologías, cuya misión es incentivar a otros jóvenes a participar en los diferentes
              proyectos
              y actividades generados por las universidades.
            </p>
          </div>
          <div>
            <figure class="column-img">
              <img src="https://images.unsplash.com/photo-1520127877998-122c33e8eb38?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7a45ca2052a4522614afac29c1d5ed5c&auto=format&fit=crop&w=749&q=80"
                   alt="Indev Team" />
              <figcaption>
                <h3>With
                  <a class="footer-heart"
                     href=""
                     title="With love by InDevelopmentCompany">
                    <i class="fas fa-heart" />
                  </a> by InDevelopmentCompany</h3>
              </figcaption>
              <a href="#"></a>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  asyncData() {
    return {
      description:
        '"Ascendere" evoca la consigna recuerda superarte siempre, para reafirmar el compromiso de la UTPL de contar con docentes que inspiren a sus alumnos, innovadores y vinculados con la práctica de su profesión y que se encuentren a la vanguardia de su disciplina. El Proyecto Ascendere es una iniciativa enmarcada en el Plan Estratégico de Desarrollo Institucional, que nace con el propósito de trabajar y agrupar aquellas iniciativas que potencien las competencias de los docentes a través de la innovación académica y la investigación en nuevas metodologías de educación y uso de las TIC.'
    };
  },
  head() {
    return {
      title: "Nuestro Equipo",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.description
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "assets/variables";
p {
  column-count: 2;
  column-gap: 2.25rem;
  line-height: 2.25;
}
.parallax {
  height: 70vh;
  background-image: url(https://firebasestorage.googleapis.com/v0/b/innovaciondocente-utpl.appspot.com/o/acerca-nosotros%2FIMG_7872.jpg?alt=media&token=05891cf4-6924-4584-b480-db4236f2fd1a);
}
.section-text {
  padding: 2rem 8rem 1rem 8rem;
  h2 {
    text-align: center;
  }
}
.we-team {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
  border-bottom: 1px #e1e4e8 solid;
  img {
    height: 100px;
    width: 100px;
  }
  h1 {
    font-size: 200%;
    margin: 0;
    padding: 1rem;
    border-left: 1px $color-secondary solid;
  }
}
.row {
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
  align-content: center;
  padding: 18px 18px 36px 18px;
}
figure.column-img {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 400px;
  color: $color-primary;
  text-align: center;
  -webkit-perspective: 50em;
  perspective: 50em;
  img {
    min-width: 100%;
    min-height: 100%;
    vertical-align: top;
    object-fit: cover;
  }
  figcaption {
    top: 50%;
    left: 20px;
    right: 20px;
    padding: 0.8rem;
    position: absolute;
    opacity: 0;
    z-index: 1;
  }
  h3,
  h5 {
    margin: 0;
  }
  h3 {
    font-weight: 600;
  }
  h5 {
    font-weight: 400;
  }
  &:after {
    background-color: #ffffff;
    position: absolute;
    content: "";
    display: block;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    -webkit-transform: rotateX(-90deg);
    transform: rotateX(-90deg);
    -webkit-transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    opacity: 0;
  }
  a {
    position: relative;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
  }
  &:hover figcaption {
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    opacity: 1;
    -webkit-transition-delay: 0.2s;
    transition-delay: 0.2s;
  }
  &:hover:after {
    -webkit-transform: rotateX(0);
    transform: rotateX(0);
    opacity: 0.9;
  }
}
@media (max-width: 992px) {
  p {
    column-count: 1;
  }
  .section-text {
    padding: 1rem 1rem 1rem 1rem;
  }
}
@media (min-width: 768px) {
  h1 {
    font-size: 200%;
    margin: 0;
    padding: 1rem;
    border-left: 1px #333 solid;
  }
}
</style>

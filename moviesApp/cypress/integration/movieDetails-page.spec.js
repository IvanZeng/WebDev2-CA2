let movieId = 335983; // The movie Venom
let movie;
let images;
// let reviews;

describe("Movie Details Page", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${Cypress.env(
        "TMDB_KEY"
      )}`
    )
      .its("body")
      .then((movieDetails) => {
        movie = movieDetails;
        return movieDetails.id;
      });
      cy.request(
        `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${Cypress.env(
          "TMDB_KEY"
        )}`
      )
        .its("body")
        .then((movieImages) => {
          images = movieImages;
          return movieImages.id;
        });
  });
  beforeEach(() => {
    cy.visit(`/movies/${movie.id}`);
  });
  describe("Base tests", () => {
    it("should display movie title in the page header", () => {
      cy.get("h3").contains(movie.title);
    });
    it("should display the movie's details", () => {
        cy.get("h3").contains("Overview");
        cy.get("h3").next().contains(movie.overview);
        cy.get("ul")
          .eq(1)
          .within(() => {
            const genreChips = movie.genres.map((g) => g.name);
            genreChips.unshift("Genres");
            cy.get("span").each(($card, index) => {
              cy.wrap($card).contains(genreChips[index]);
            });
          });
      });
      it("should display the movie posters on the left-hand side", () => {
        cy.get("ul")
          .eq(0)
          .within(() => {
            const imagesPath = images.posters.map((image) => image.file_path);
            cy.get("img").each(($img, index) => {
              cy.wrap($img).should('have.attr','src',"https://image.tmdb.org/t/p/w500/"+imagesPath[index]);
            });
          });
      });
      });
    });
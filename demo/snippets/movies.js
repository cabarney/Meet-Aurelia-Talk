export class Movies {
    heading = "My Movie List";
    movieList = [];
    movieText = "";

    addMovie() {
        this.movieList.push(this.movieText);
        this.movieText = "";
    }
}

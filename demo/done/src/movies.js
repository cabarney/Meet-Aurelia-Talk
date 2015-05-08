export class Movies {
    heading = "Some awesome movies..."
    movieList = [];
    movieText = "";
    rating = 0;

    addMovie() {
        this.movieList.push({title: this.movieText, rating: this.rating});
        this.movieText = "";
        this.rating = 0;
    }

    canDeactivate(){
        if(this.movieText === '') return true;

        return confirm('You have an uncommitted movie.  Are you sure?');
    }
}

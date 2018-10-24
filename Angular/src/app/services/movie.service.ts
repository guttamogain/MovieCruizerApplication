import { Injectable } from "@angular/core";
import { Headers, Http, Jsonp } from "@angular/http";
import "rxjs/Rx";
import { Movie } from "../movie";
import { MovieHttpClient } from "./moviehttpclient.service";
@Injectable()
export class MoviesService {

	private serviceUrl = "http://localhost:8080/api/v1/movieservice/";

	constructor(private http: MovieHttpClient) { }

	addToWatchListMovie(movieId: number, name: string, comments: string, poster_path: string,
		release_date: Date, vote_average: number, vote_count: number) {
		const url = this.serviceUrl + 'movie/';
		const json = {
			id: 1000,
			movieId: movieId,
			comments: comments,
			name: name,
			posterPath: poster_path,
			releaseDate: release_date,
			voteAverage: vote_average,
			voteCount: vote_count
		};
		return this.http.post(url, json).toPromise().catch(this.handleError);
	}

	getWatchList() {
		const url = this.serviceUrl + 'movies';
		return this.http.get(url).toPromise().then(res => res.json(),
			err => err.json());
	}

	checkWatchList(id: number) {
		const url = this.serviceUrl + 'movie/' + id;
		return this.http.get(url).toPromise().then(res => (res ? res.json() : null))
			.catch(this.handleError);
	}

	updateMovieComments(id: number, comments: string) {
		const url = this.serviceUrl + 'movie/';
		const uri = `${url}${id}`;
		const data = { comments: comments };
		return this.http.put(uri, data).toPromise().catch(this.handleError);
	}

	removeMovieFromWatchList(movieId: number) {
		const url = this.serviceUrl + 'movie/';
		const uri = `${url}${movieId}`;
		console.log(movieId);
		console.log('Remove movie', uri);
		return this.http.delete(uri).toPromise().catch(this.handleError);
	}

	private handleError(error: any) {
		console.error('An error occurred', error); // for demo purposes only
	}
}
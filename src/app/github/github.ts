import {Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Repository, toRepository} from './repository';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Github {

  private apiUrl = 'https://api.github.com/graphql';

  constructor(private http: HttpClient) {
  }

  getData(): Observable<Repository[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${environment.token}`,
    });

    const body = {
      query: `{
        viewer {
          login
          pinnedItems(first: 6, types: REPOSITORY) {
            nodes {
              ... on Repository {
                name
                description
                homepageUrl
                url
                isFork
                languages(first: 3, orderBy: {field: SIZE, direction: DESC}) {
                  nodes {
                    name
                    color
                  }
                }
              }
            }
          }
        }
      }`
    };

    return this.http.post<any>(this.apiUrl, body, {headers})
      .pipe(map(r => toRepository(r)));
  }
}

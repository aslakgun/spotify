import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-spotify-service',
  templateUrl: './spotify-service.component.html',
  styleUrls: ['./spotify-service.component.css']
})

@Injectable()
export class SpotifyServiceComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  


  /* Create an HTTP server to handle responses */

//   http.createServer(=>(req: any, res: any) {
//     res.writeHead(200, {"Content-Type": "text/plain"});
//     res.write("Hello World");
//     res.end();
//   }).listen(8888));
 }

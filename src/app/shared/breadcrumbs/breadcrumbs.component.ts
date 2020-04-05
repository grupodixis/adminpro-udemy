import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ],
})
export class BreadcrumbsComponent implements OnInit {
  titulo: string;
  constructor(private router: Router, private title: Title, private meta: Meta ) {

    this.getDataRoute().subscribe(data => {
      console.log(data);
      this.titulo = data.titulo;
      this.title.setTitle(data.titulo);
      const metaTag: MetaDefinition = {
          name: 'description',
          content: this.titulo
      };

      this.meta.updateTag(metaTag);
    });
   }

  ngOnInit(): void {
  }

  getDataRoute(): Observable<any>{
    return this.router.events.pipe(
      filter(e => e instanceof ActivationEnd),
      filter((e: ActivationEnd) => e.snapshot.firstChild === null),
      map((e: ActivationEnd) => e.snapshot.data)

    );
  }

}

import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router'
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy{

  public titulo: string;
  public tituloSubs$: Subscription;
  constructor(
    private router: Router
  ) {
    this.tituloSubs$ = this.getTitulo()
                           .subscribe(({ titulo }) => {
                           this.titulo = titulo;
                           document.title = `Acomerced - ${titulo}`;
    });
  }

  // para que no dispare error cuando cierre sesion
  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

  getTitulo() {
    return this.router.events
      .pipe(
        filter(event => event instanceof ActivationEnd),
        filter((event: ActivationEnd) => event.snapshot.firstChild === null),
        map((event: ActivationEnd) => event.snapshot.data)
      );
  }
}

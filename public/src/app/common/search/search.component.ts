import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchKeyword = '';

  // private/public access modifiers will explicitly be accessible throughout this class, otherwise means it is only accessible in the contructor
  constructor(private router: Router, activatedRoute: ActivatedRoute) {
    // subscribe - call function on the changes in the params
    activatedRoute.params.subscribe((params) => { // params should be the same keyword to the routemodule
      if (params['keyword']) this.searchKeyword = params['keyword'];
    });
  }

  ngOnInit(): void {

  }

  search(keyword: string): void {
    if (!keyword) {
      this.router.navigate(['/']);
      return;
    }

    this.router.navigateByUrl(`/search/${keyword}`);
  }
}

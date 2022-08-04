import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { LineOfBusinessService } from '../lineOfBusiness.service';

import { LineOfBusiness } from '../LineOfBusiness';
import { InsuranceQuote } from '../insuranceQuote';

@Component({
  selector: 'app-popular-insurance-quotes',
  templateUrl: './popular-insurance-quotes.component.html',
  styleUrls: ['./popular-insurance-quotes.component.css']
})
export class PopularInsuranceQuotesComponent implements OnInit {

  popularLines$: Observable<any[]>;

  constructor(private lineOfBusinessService: LineOfBusinessService) {
    const lines$ = this.lineOfBusinessService.getLinesOfBusiness();
    const quotes$ = this.lineOfBusinessService.getAllQuotes();

    this.popularLines$ = combineLatest([lines$, quotes$]).pipe(
      map(([lines, quotes]) => {
        return lines
          .map(line => {
            const count = quotes.filter(q => q.lineOfBusiness === line.id).length;
            return { line, count };
          })
          .sort((a, b) => b.count - a.count)
          .slice(0, 2)
      })
    );
  }

  ngOnInit(): void {

  }

}

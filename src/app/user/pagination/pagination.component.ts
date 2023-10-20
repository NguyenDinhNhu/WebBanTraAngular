import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges{
    
    
    @Input() currentPage: number = 1;
    @Input() totalItem: number = 0;
    @Input() pageSize: number = 20;
    @Output() changePage = new EventEmitter<number>();

    pages: number[] = [];

    ngOnInit(): void {
        
    }

    ngOnChanges(changes: SimpleChanges): void {
        const pagesCount = Math.ceil(this.totalItem/this.pageSize);
        this.pages = this.range(1, pagesCount);
    }

    range(start: number, end: number): number[] {
        return [...Array(end).keys()].map(el => el+start);
    }
}
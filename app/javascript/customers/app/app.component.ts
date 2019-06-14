import {Component, OnInit} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "customers/app/customer";
import {map} from "rxjs/internal/operators";

var RESULTS = [
    {
        first_name: "Pat",
        last_name: "Smith",
        username: "psmith",
        email: "pat.smith@somewhere.net",
        created_at: "2016-02-05",
    },
    {
        first_name: "Patrick",
        last_name: "Jones",
        username: "pjpj",
        email: "jones.p@business.net",
        created_at: "2014-03-05",
    },
    {
        first_name: "Patricia",
        last_name: "Benjamin",
        username: "pattyb",
        email: "benjie@aol.info",
        created_at: "2016-01-02",
    },
    {
        first_name: "Patty",
        last_name: "Patrickson",
        username: "ppat",
        email: "pppp@freemail.computer",
        created_at: "2016-02-05",
    },
    {
        first_name: "Jane",
        last_name: "Patrick",
        username: "janesays",
        email: "janep@company.net",
        created_at: "2013-01-05",
    },
];



@Component({
    selector: 'shine-customers-app',
    template: '\
<header> \
  <h1 class="h2">Customer Search</h1> \
</header> \
<section class="search-form"> \
  <form> \
    <div class="input-group input-group-lg"> \
      <label for="keywords" class="sr-only">Keywords></label> \
      <input type="text" id="keywords" name="keywords" \
             placeholder="First Name, Last Name, or Email Address"\
             class="form-control input-lg" \
             bindon-ngModel="keywords"> \
      <span class="input-group-btn"> \
        <input type="submit" value="Find Customers"\
         class="btn btn-primary btn-lg" \
         on-click="search()"> \
      </span> \
    </div> \
  </form> \
</section> \
<section class="search-results"> \
  <header> \
    <h1 class="h3">Results</h1> \
  </header> \
  <ol class="list-group"> \
    <li *ngFor="let customer of customers" \
      class="list-group-item clearfix"> \
      <h3 class="pull-right"> \
        <small class="text-uppercase">Joined</small> \
        {{customer.created_at}} \
      </h3> \
      <h2 class="h3"> \
        {{customer.first_name}} {{customer.last_name}} \
        <small>{{customer.username}}</small> \
      </h2> \
      <h4>{{customer.email}}</h4> \
    </li> \
  </ol> \
</section>'
})
export class AppComponent implements OnInit {
    customers = [];
    keywords = "";
    customersUrl = "/customers.json?keywords=";

    constructor(private http: HttpClient) {
    }

    ngOnInit(): void {
    }

    search(): void{
        this.getCustomers().subscribe((response) => {
                this.customers = response;
            }
        );
        if(this.keywords == "josh"){
            this.customers = RESULTS;
        } else {
            this.customers = [];
        }
    }

    /** GET heroes from the server */
    getCustomers(): Observable<Customer[]> {
        return this.http.get<Customer[]>(this.customersUrl + this.keywords);
    }
}


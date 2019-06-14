export class Customer {
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    created_at: string;

    constructor(first_name, last_name, username, email, created_at) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.username = username;
        this.email = email;
        this.created_at = created_at;
    }

}
export class BlogsModel {
    blogger: string;
    title: string;
    description: string;
    published : boolean = false;

    constructor(blogger: string, title: string, description: string) {
        this.blogger = blogger;
        this.title = title;
        this.description = description;
    }
}
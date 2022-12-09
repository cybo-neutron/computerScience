class myURL{
    protocol: string;
    hostname: string;
    port: string;
    path_param: string;
    query_param: string;
    constructor() {
        this.protocol = "";
        this.hostname = "";
        this.port = "";
        this.path_param = "";
        this.query_param = "";
    }

    setProtocol(protocol: string) {
        this.protocol = protocol;
    }

    setHostname(hostname: string) {
        this.hostname = hostname;
    }

    setPort(port: string) {
        this.port = port;
    }

    setPathParam(path_param: string)
    {
        this.path_param = path_param;
    }

    setQueryParam(query_param: string)
    {
        this.query_param = query_param;
    }

    showURL()
    {
        console.log(`${this.protocol}://${this.hostname}:${this.port}/${this.path_param}?${this.query_param}`); 
    }

}

class URLBuilder{
    url: myURL;

    public constructor() {
        this.url = new myURL();
    }

    setProtocol(protocol: string) {
        this.url.protocol = protocol;
        return this;
    }

    setHostname(hostname: string) {
        this.url.hostname = hostname;
        return this;
    }

    setPort(port: string) {
        this.url.port = port;
        return this;
    }

    setPathParam(path_param: string){
        this.url.path_param = path_param;
        return this;
    }

    setQueryParam(query_param: string){
        this.url.query_param = query_param;
        return this;
    }

    build(): myURL{
        return this.url;
    }
}

let uBuilder = new URLBuilder();
let url = uBuilder.setProtocol("https").setHostname("www.google.com").build();

url.showURL();
url.setHostname("darwin")
url.showURL();



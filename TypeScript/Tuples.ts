


//replicating useState for string data type
const useState = (initial: string): [ ()=>string, (value:string) => void] => {
    let str: string = initial;
    return [
        () => {
            return str;
        },
        (value:string) => {
            str = value;
        }
    ]
}

const [nameGetter, nameSetter] = useState("John");
console.log(nameGetter())

nameSetter("Naruto")

console.log(nameGetter())

const useState2 = <T>(initial: T): [ ()=>T, (value:T) => void] => {
    let str: T = initial;
    return [
        () => {
            return str;
        },
        (value:T) => {
            str = value;
        }
    ]
}

const [getter, setter] = useState2(4)
console.log(getter())
setter(100)
console.log(getter())



//Example 2

function Ranker<T>(items: T[], ranking: (v: T) => number) :T[]{
    
    
    const rankedItems = items.map((item) => ({
        item,
        rank: ranking(item)
    }));

    rankedItems.sort((a, b) => b.rank - a.rank);

    return rankedItems.map((item) => item.item)
}

const students = [
    {
        name: 'Sasuke',
        hp: 76,
        power:90 
    },
    {
        name: 'Naruto',
        hp: 89,
        power:85 
    }
]

const ranked = Ranker(students, (student) => student.hp + student.power);

console.log(ranked)

// link : https://gist.github.com/jherr/cd442b46070b39e99dd8bedc9eecff5c

const houses = [
  { "name": "Atreides", "planets": "Calladan" },
  { "name": "Corrino", "planets": ["Kaitan", "Salusa Secundus"] },
  { "name": "Harkonnen", "planets": ["Giedi Prime", "Arrakis"] }
]

interface House {
    name: string,
    planets:string[]|string,
}

interface HouseWithID extends House{
    id:number
}

function findHouses(houses: string): HouseWithID[];
function findHouses(
  houses: string,
  filter: (house: House) => boolean
): HouseWithID[];
function findHouses(houses: House[]): HouseWithID[];
function findHouses(houses: House[], filter: (house: House) => boolean): HouseWithID[];
function findHouses(input: House[] | string, filter?: (house: House) => boolean): HouseWithID[] {
    
    const houses:House[] = typeof input === "string" ? JSON.parse(input) : input;

    return (filter ? houses.filter(filter) : houses).map((house:House) => {
        return {
            ...house,
            id: houses.indexOf(house)
        }
    });


}

console.log(
  findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides")
);

console.log(findHouses(houses, ({ name }) => name === "Harkonnen"));
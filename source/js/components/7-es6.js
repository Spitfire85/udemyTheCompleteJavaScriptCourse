/////////////////////////////////
// CODING CHALLENGE

/*
Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets
It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.
At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal
All the report data should be printed to the console.
HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.
*/
const es6 = {
  init() {
    console.log('es6');

    class TownFeature {
      constructor(name, yearBuilt) {
        this.name = name;
        this.yearBuilt = yearBuilt;
      }
    }

    class Park extends TownFeature {
      constructor(name, yearBuilt, size, trees) {
        super(name, yearBuilt);
        this.size = size;
        this.trees = trees;
      }

      //Tree density
      treeDensity() {
        const density = this.trees / this.size;
        console.log(`This park: ${this.name} has a tree density of ${parseInt(density)} per KM2`)
      }
    }

    class Street extends TownFeature {
      constructor(name, yearBuilt, length, size = 3) {
        super(name, yearBuilt);
        this.length = length;
        this.size = size;
      }

      streetType() {
        const type = new Map();
        type.set(1, 'tiny');
        type.set(2, 'small');
        type.set(3, 'normal');
        type.set(4, 'big');
        type.set(5, 'huge');
        console.log(`${this.name}, build in ${this.yearBuilt}, is a ${type.get(this.size)} street.`);
      }
    }

    const calc = (arr) => {
      const total = arr.reduce((prevValue, currentValue) => {
        return prevValue + currentValue;        
      }, 0);
      return [total, total / arr.length];
    }

    const allParks = [
      new Park('Green Park', 1987, 0.2, 215),
      new Park('National Park', 1894, 2.9, 3541),
      new Park('Oak Park', 1953, 0.4, 949)
    ];

    const allStreets = [
      new Street('Ocean Avenue', 1999, 1.1, 4),
      new Street('Evergreen Street', 2008, 2.7, 2),
      new Street('4th Street', 2015, 0.8),
      new Street('Sunset Boulevard', 1982, 2.5, 5)
    ];

    const parkReport = (parks) => {
      console.log('-----PARKS REPORT-----');

      //Average age
      const parkAges = parks.map(park => new Date().getFullYear() - park.yearBuilt);
      const [totalAge, averageAge] = calc(parkAges);
      console.log(`Our ${parks.length} parks have an average age of ${parseInt(averageAge)} years`);     

      // Density
      parks.forEach(el => el.treeDensity());

      //More than 1000 trees
      const index = parks.map(el => el.trees).findIndex(el => el >= 1000);
      console.log(`${allParks[index].name} has more than 1000 trees.`);
    };

    const streetReport = (streets) => {
      console.log('-----STREET REPORT-----');

      //Total and average length of the town's streets
      const [totalLength, avgLength] = calc(streets.map(el => el.length));
      console.log(`Our ${streets.length} streets have a total length of ${parseInt(totalLength)} km, with an average of ${parseInt(avgLength)} km.`);
      
      // CLassify sizes
      streets.forEach(el => el.streetType());
    };

    parkReport(allParks);
    streetReport(allStreets);
  }
};

export default es6;
class Trip
{
    constructor(name, date, kilometers)
    {
        this.name = name;
        this.date = date;
        this.kilometers = kilometers;
    }
}

class Car
{
    static newID = 0;
    constructor(company, model)
    {
        this.id = ++Car.newID;
        this.company = company;
        this.model = model;
        this.available = Math.floor(Math.random() * 2)
        this.totalMeileage = Math.floor(Math.random() * 200000) + 1;                           
        this.trips = [];
        this.link = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLRqU51JYtjrrbJqrWRNMm6x4ZGWUJ6i9pSw&s";
    }

    addTrip(trip)
    {
        this.trips.push(trip);
        this.totalMeileage += trip.kilometers;
    }

    getMileage()
    {
        return this.trips.reduce((total, trip) => total + trip.kilometers, 0);
    }
}


class Company {
    constructor(company) {
        this.company = company;
        this.allCars = [];
    }

    AddCar(car)
    {
        this.allCars.push(car);
    }

    MostCarMileage()
    {
        let mostCar;
        let most = 0;
        let mostCarsMileage = [];
        //return this.allCars.reduce((mostCarMileage, car) => mostCarMileage = (mostCarMileage < car.totalMeileage ? car.totalMeileage : mostCarMileage), 0);
        this.allCars.forEach(car => {
            if(car.totalMeileage > most)
            {
                most = car.totalMeileage;
                mostCar = car;
            }

        })

        mostCarsMileage.push(mostCar);

        this.allCars.forEach(car => {
            if(car.totalMeileage == mostCar.totalMeileage && car.model != mostCar.model)
                mostCarsMileage.push(car);
        })

        return mostCarsMileage;
    }

    AvailableCars()
    {
        return this.allCars.filter(car => car.available);
    }

    Mileage()
    {
        return this.allCars.forEach(car => console.log(`${car.model} - ${car.totalMeileage}`));
    }

    addNewTrip(updateCar, trip)
    {
        this.allCars.forEach(car =>
        {
            if(car.id == updateCar.id)
            {
                car.addTrip(trip);
            }
        }
        );
    }
}



let cars = [
  // 1?6 (???????)
  new Car("Gett", "Mazda 3"),
  new Car("Yango", "Toyota Corolla"),
  new Car("Gett", "Hyundai Elantra"),
  new Car("Bolt", "Kia Cerato"),
  new Car("Avis", "BMW 320i"),
  new Car("Hertz", "Mercedes C200"),

  // 7?12
  new Car("Gett", "Mazda 6"),
  new Car("Yango", "Toyota Camry"),
  new Car("Gett", "Hyundai Sonata"),
  new Car("Bolt", "Kia Sportage"),
  new Car("Avis", "BMW 520i"),
  new Car("Hertz", "Mercedes E200"),

  // 13?18
  new Car("Gett", "Mazda CX-5"),
  new Car("Yango", "Toyota Yaris"),
  new Car("Gett", "Hyundai Tucson"),
  new Car("Bolt", "Kia Picanto"),
  new Car("Avis", "BMW X3"),
  new Car("Hertz", "Mercedes GLC"),

  // 19?24
  new Car("Gett", "Mazda 2"),
  new Car("Yango", "Toyota RAV4"),
  new Car("Gett", "Hyundai i10"),
  new Car("Bolt", "Kia Sorento"),
  new Car("Avis", "BMW X5"),
  new Car("Hertz", "Mercedes A200"),

  // 25?30
  new Car("Gett", "Mazda 3 Hatchback"),
  new Car("Yango", "Toyota Prius"),
  new Car("Gett", "Hyundai Kona"),
  new Car("Bolt", "Kia Stonic"),
  new Car("Avis", "BMW 330i"),
  new Car("Hertz", "Mercedes CLA"),

  // 31?36
  new Car("Gett", "Mazda 6 Wagon"),
  new Car("Yango", "Toyota Hilux"),
  new Car("Gett", "Hyundai Santa Fe"),
  new Car("Bolt", "Kia Carnival"),
  new Car("Avis", "BMW 740i"),
  new Car("Hertz", "Mercedes S500"),

  // 37?42
  new Car("Gett", "Mazda MX-5"),
  new Car("Yango", "Toyota Land Cruiser"),
  new Car("Gett", "Hyundai Palisade"),
  new Car("Bolt", "Kia EV6"),
  new Car("Avis", "BMW i4"),
  new Car("Hertz", "Mercedes EQE"),

  // 43?50
  new Car("Gett", "Mazda CX-30"),
  new Car("Yango", "Toyota C-HR"),
  new Car("Gett", "Hyundai Venue"),
  new Car("Bolt", "Kia Niro"),
  new Car("Avis", "BMW iX"),
  new Car("Hertz", "Mercedes EQS"),
  new Car("Gett", "Mazda CX-9"),
  new Car("Yango", "Toyota Avensis")
];


function AddOneElement(car)
{
        let placeholdDiv = document.getElementById('place-holder-container-id');
        let mainDiv = document.createElement('div');
        let imgDiv = document.createElement('div');
        let companyDiv = document.createElement('div');
        let modelDiv = document.createElement('div');
        let availableDiv = document.createElement('div');
        let totalMeileageDiv = document.createElement('div');
        let totalTriptsDiv = document.createElement('div');


        /** @type {HTMLImageElement} */
        let imgElement              = document.createElement('img');
        let companyParagrah         = document.createElement('p');
        let modelParagrah           = document.createElement('p');
        let availableParagrah       = document.createElement('p');
        let totalMeileageParagrah   = document.createElement('p');
        let totalTriptsParagrah     = document.createElement('p');


        mainDiv.setAttribute('class', 'mainDiv-sytle');
        imgDiv.setAttribute('class', 'imgDiv-style')
        companyDiv.setAttribute('class', 'companyDiv-style');
        modelDiv.setAttribute('class', 'modelDiv-style');
        availableDiv.setAttribute('class', 'availableDiv-style');
        totalMeileageDiv.setAttribute('class', 'totalMeileageDiv-style');
        totalTriptsDiv.setAttribute('class', 'totalTriptsDiv-style');

        imgElement.setAttribute('class', 'imgElement-style');
        companyParagrah.setAttribute('class', 'companyParagrah-style'); 
        modelParagrah.setAttribute('class', 'modelParagrah-style');        
        availableParagrah.setAttribute('class', 'availableParagrah-style');    
        totalMeileageParagrah.setAttribute('class', 'totalMeileageParagrah-style');
        totalTriptsParagrah.setAttribute('class', 'totalTriptsParagrah-style'); 


        imgElement.src = car.link;//"https://placehold.co/300x300";
        companyParagrah.textContent = `Rent Company : ${car.company}`;
        modelParagrah.textContent = `Model : ${car.model}`;
        availableParagrah.textContent = `Status : ${(car.available) ? 'available' : 'Not available'}`;
        totalMeileageParagrah.textContent = `Kilometers : ${car.totalMeileage}`;
        totalTriptsParagrah.textContent = `Total Trips : ${car.trips.length}`;


        availableParagrah.style.backgroundColor = `${(car.available) ? 'green' : 'red'}`;
        availableParagrah.style.color = `${(car.available) ? 'white' : 'white'}`;
        
        imgDiv.appendChild(imgElement);        
        companyDiv.appendChild(companyParagrah);
        modelDiv.appendChild(modelParagrah);       
        availableDiv.appendChild(availableParagrah);
        totalMeileageDiv.appendChild(totalMeileageParagrah);
        totalTriptsDiv.appendChild(totalTriptsParagrah);

        mainDiv.appendChild(imgDiv);
        mainDiv.appendChild(companyDiv);
        mainDiv.appendChild(modelDiv);
        mainDiv.appendChild(totalMeileageParagrah);
        mainDiv.appendChild(totalTriptsDiv);
        mainDiv.appendChild(availableDiv);

        placeholdDiv.appendChild(mainDiv);
}

let rents = new Company("CarRents");

cars.forEach(car => rents.AddCar(car));
console.log(rents.allCars);
console.log(rents.AvailableCars());
rents.Mileage();
console.log(rents.MostCarMileage());

rents.addNewTrip(rents.allCars[0], new Trip("Kalied", "1-10-2024", 10));
rents.addNewTrip(rents.allCars[0], new Trip("Ahmad" , "29-3-2025", 10));
console.log(rents.allCars[0]);
console.log(rents.allCars[0].trips);

console.log("##########")
console.log(rents.allCars[0].getMileage());


function AvalibleCars()
{
    let placeholdDiv = document.getElementById('place-holder-container-id');
    placeholdDiv.innerHTML = "";
    rents.allCars.forEach(car => {

        if(car.available)
        {
            AddOneElement(car);
        }
    });
}
function PrintAllCars()
{
    let placeholdDiv = document.getElementById('place-holder-container-id');
    placeholdDiv.innerHTML = "";
    rents.allCars.forEach(car =>
    {
        AddOneElement(car);
    });
}


PrintAllCars();

const textInput = document.getElementById('Search-bar-id');
let timer;

textInput.addEventListener('input', () => {
    
    clearTimeout(timer);

    timer = setTimeout(() => {
        let text = textInput.value;
        let placeholdDiv = document.getElementById('place-holder-container-id');
        placeholdDiv.innerHTML = "";

        if(text.length > 0)
        {
            rents.allCars.forEach(car =>
            {
                if(String(car.company).trim().toLocaleLowerCase() === String(text).trim().toLocaleLowerCase())
                {
                    AddOneElement(car);
                }
            }
            );
        }
        else
        {
            PrintAllCars();
        
        }
    }, 500);
});
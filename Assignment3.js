const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    color: "Blue",
    price: 25000,
  
    honk: function() {
      console.log("Tuut tuut");
      this.displayDetails();
    },
  
    displayDetails: function() {
      console.log(`Brand: ${this.brand}`);
      console.log(`Model: ${this.model}`);
      console.log(`Year: ${this.year}`);
      console.log(`Color: ${this.color}`);
      console.log(`Price: ${this.price}`);
    }
  };
  
  
  car.honk();
  
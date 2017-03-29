// Class to represent a row in the seat reservations grid
function SeatReservation(name, initialMeal) {
    let self = this;
    self.name = name;
    self.meal = ko.observable(initialMeal);
}

// Overall viewmodel for this screen, along with initial state
function ReservationsViewModel() {
    let self = this;

    // Non-editable catalog data - would come from the server
    self.availableMeals = [
        { mealName: "Standard (sandwich)", price: 0 },
        { mealName: "Premium (lobster)", price: 34.95 },
        { mealName: "Ultimate (whole zebra)", price: 290 }
    ];    

    // Editable data
    self.seats = ko.observableArray([
        new SeatReservation("Sally", self.availableMeals[0]),
        new SeatReservation("Steve", self.availableMeals[1]),
        new SeatReservation("Bert", self.availableMeals[2])
    ]);

    // Operations
    self.addSeat = () => {
        self.seats.push(new SeatReservation("Joey", self.availableMeals[1]));
    };

}

ko.applyBindings(new ReservationsViewModel());
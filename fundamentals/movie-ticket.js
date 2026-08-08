/*
Function Name Must be: bookTicket
In a cinema booking app, by default, each booking assumes 1 seat and 300 Taka per ticket if the user does not specify otherwise. Your task is to build this system using ES6 Default Parameters.

Input
The Function will accept three parameters — movie (String), seats (Number, default 1), pricePerSeat (Number, default 300)

Output / Rules
Total must be calculated as seats × pricePerSeat
Must return: "<movie>: <seats> seat(s), Total ৳<total>"
*/





function bookTicket(movie, seat = 1, pricePerSeat = 300){

    let total = 0;

    if (movie.length > 0 && typeof movie === "string" && typeof seat === "number" && typeof pricePerSeat === "number" && Number.isFinite(seat) && Number.isFinite(pricePerSeat) && seat % 1 === 0 && pricePerSeat % 1 === 0 && seat > 0 && pricePerSeat > 0) {

        total = seat * pricePerSeat;

        return `${movie}: ${seat} seat(s), Total: ${total} Tk`;

    } else {

        return "Invalid";
    }
}
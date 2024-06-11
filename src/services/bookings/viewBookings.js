import bookingData from '../../data/bookings.json' assert { type: 'json' }

const viewBookings = (userId, propertyId) => {
let bookings = bookingData["bookings"];

if (userId) {
    bookings = bookings.filter(booking => booking.userId === userId);
 }

 if (propertyId) {
    bookings = bookings.filter(booking => booking.propertyId === propertyId);
 }

    return bookings;
};

export default viewBookings;
import bookingData from '../../data/bookings.json' assert { type: 'json' }

const viewBookings = () => {
    return bookingData["bookings"];
};

export default viewBookings;
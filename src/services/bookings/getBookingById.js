import bookingData from '../../data/bookings.json' assert { type: 'json' }

const getBookingById = (id) => {
    const booking = bookingData.bookings.find(booking => booking.id === id);

    if (!booking) {
        throw new Error(`booking was not defined`);
    }

    return booking
}

export default getBookingById;
export const defaultAvailability = [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
]

export function updateTimes(state, action) {
    switch (action.type) {
        case 'add-times':
            return [...state, ...action.times];
        case 'remove-times':
            return state.filter((value) => !action.times.includes(value));
        case 'new-times':
            return action.times;
        case 'date-times':
            return action.times;
        default:
            return state;
    }
}

export function initializeTimes(init) {
    return defaultAvailability;
}
export default function formatDates(a, b, toPresent) {
    a = new Date(a)
    b = new Date(b)
    let startDateText = ""
    let endDateText = ""
    if (b && !a) {
        [a, b] = [b, a]
    } else if (!a && !b) {
        throw new Error("Neither date is defined.")
    } else if (a > b) {
        [b, a] = [a, b];
    }

    startDateText = formatDate(a);
    if (!b) {
        if (toPresent) {
            endDateText = "present"
        } else {
            endDateText = "";
        }
    } else {
        endDateText = formatDate(b) + (b > new Date() ? " (ancitipated)" : "");
    }

    return startDateText + (endDateText ? " - " + endDateText : '');
}

function formatDate(date) {
    if (!(date instanceof Date)) {
        date = new Date(date);
    }
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]

    return months[date.getMonth()] + " " + date.getFullYear();
}
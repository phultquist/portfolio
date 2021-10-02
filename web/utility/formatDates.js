export default function formatDates(a, b) {
    let startDateText = "";
    let endDateText = "";

    if (b && !a) {
        [a, b] = [b, a];
    } else if (!a && !b) {
        throw new Error("Neither date is defined.");
    } else if (a > b) {
        [b, a] = [a, b];
    }

    if (a) {
        startDateText = formatDate(a);
    } else {
        startDateText = "Ambiguous beginnings";
    }

    if (b) {
        let b_date = new Date(b);
        endDateText = formatDate(b_date) + (b_date > new Date() ? " (anticipated)" : "");
    } else {
        endDateText = "Present";
    }

    return startDateText + " - " + endDateText;
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
        'December',
    ];

    return months[date.getMonth()] + " " + date.getFullYear();
}

function checkLength (string, length) {
    if (string.length <= length) {
        return true
    };

    return false;
};

function checkPolyndrom (string) {
    let start = string.replaceAll(' ', '').toLowerCase();
    let stop = '';

    for (let i = start.length - 1; i >= 0; i--) {
        stop += start[i];
    };

    if (start !== stop) {
        return false;
    };

    return true;
};

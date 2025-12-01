// Utility functions for SuperTelegram

function formatData(data) {
    if (typeof data === 'string') {
        return data.trim().toUpperCase();
    }
    return data;
}

function validateInput(value) {
    if (value === null || value === undefined) {
        throw new Error('Value cannot be null');
    }
    return true;
}

// Update 4
function newFunction4() {
    return 4;
}

module.exports = { formatData, validateInput };

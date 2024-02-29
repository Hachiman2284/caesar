module.exports = function caesar(string, key) {
    //key 
    return string.toUpperCase().replace(/[A-Z]/g, c => String.fromCharCode((c.charCodeAt(0) - 65 + key) % 26 + 65));
};

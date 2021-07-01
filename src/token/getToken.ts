export function getToken() {
    const urlHash = window.location.hash
    const parsedHash = new URLSearchParams(urlHash.substr(1))
    return parsedHash;
}
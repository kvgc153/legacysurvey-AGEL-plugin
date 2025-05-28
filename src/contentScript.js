// Load an external script dynamically
const script = document.createElement('script');
script.src = "";
script.onload = function() {
    console.log("Script loaded successfully.");
    // You can call functions from the loaded script here if needed
}
document.head.appendChild(script);
script.onerror = function() {
    console.error("Failed to load the script.");
};
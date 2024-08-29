var search_page = document.getElementById('search-page');
var download_page = document.getElementById('download-page');
var logo_download_page = document.getElementById('logo-download-page');
var qrcode_circle_background =document.getElementById('qrcode-circle-background');
var qrcode_square_background =document.getElementById('qrcode-square-background');

var qrcode = new QRCode(document.getElementById("qrcode"), {
	width: 240,
	height: 240,
	colorDark : "#111729",
	colorLight : "#ffffff",
});
var input = document.getElementById('input-url');
var button = document.getElementById('generate-button');

button.addEventListener('click', function() {
    var inputValue = input.value.trim(); // Remove leading and trailing spaces
    if (inputValue === "") {
        console.error("Input cannot be empty");
        alert("Please enter a valid URL.");
        return; // Stop execution if the input is empty
    }
    console.log(inputValue); 
    qrcode.clear();
    qrcode.makeCode(inputValue);
    search_page.style.display = "none";
    download_page.style.display = "grid";
    logo_download_page.style.display = "block";
    qrcode_circle_background.style.display = "block";
    qrcode_square_background.style.display = "block";
    

});


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
var qr_button = document.getElementById('generate-button');
var download_button = document.getElementById('download-button');
var download_link = document.getElementById('download')
var share_button = document.getElementById('share-button');

qr_button.addEventListener('click', function() {
    var inputValue = input.value.trim();
    if (inputValue === "") {
        console.error("Input cannot be empty");
        alert("Please enter a valid URL.");
        return;
    }
    qrcode.clear();
    qrcode.makeCode(inputValue);
    search_page.style.display = "none";
    download_page.style.display = "grid";
    logo_download_page.style.display = "block";
    qrcode_circle_background.style.display = "block";
    qrcode_square_background.style.display = "block";
    

});
download_button.addEventListener("click", setUpDownload);
function setUpDownload() {
    // Find the image inside the #qrcode div
    var image = document.getElementById("qrcode").getElementsByTagName("img");

    // Get the src attribute of the image, which is the data-encoded QR code
    var qr = image[0].src;

    // Copy that to the download link
    download_link.href = qr;
}

share_button.addEventListener("click", copyPicture);
async function copyPicture() {
    // Find the image inside the #qrcode div
    var image = document.getElementById("qrcode").getElementsByTagName("img");

    // Get the src attribute of the image, which is the data-encoded QR code
    var qr = image[0].src;

    try {
      const response = await fetch(qr);
      const blob = await response.blob();
      await navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob
        })
      ]);
      console.log('Image copied.');
    } catch (err) {
      console.error(err.name, err.message);
    }
  };

  logo_download_page.addEventListener('click', function() {
    location.reload(); 
});

//your JS code here. If required.
 function displayBrowserInfo() {
    // Get the div element with id 'browser-info'
    var browserInfoElement = document.getElementById("browser-info");

    // Get browser information from the navigator object
    var browserName = navigator.appName;
    var browserVersion = navigator.appVersion;

    // Display the information in the div element
    browserInfoElement.innerHTML = "You are using " + browserName + " version " + browserVersion;
  }

  // Call the displayBrowserInfo function when the page loads
  window.onload = displayBrowserInfo;
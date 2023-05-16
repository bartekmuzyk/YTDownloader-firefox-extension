function saveOptions(e) {
    e.preventDefault();
    browser.storage.sync.set({
      autoclose: document.querySelector("#autoclose").checked
    });
  }
  
  function restoreOptions() {
    function setCurrentChoice(result) {
      document.querySelector("#autoclose").checked = result.autoclose || false;
    }
  
    function onError(error) {
      console.log(`Error: ${error}`);
    }
  
    let getting = browser.storage.sync.get("autoclose");
    getting.then(setCurrentChoice, onError);
  }
  
  document.addEventListener("DOMContentLoaded", restoreOptions);
  document.querySelector("form").addEventListener("submit", saveOptions);
  
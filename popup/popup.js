browser.tabs.query({currentWindow: true, active: true}).then((tabs) => {
    const { url } = tabs[0]; // Safe to assume there will only be one result

    if (url.includes("https://www.youtube.com/watch?v=")) {
        browser.storage.sync.get("autoclose")
            .then(item => {
                browser.tabs.create({
                    url: `/downloader.html?url=${encodeURIComponent(url)}&autoclose=${(item.autoclose ?? false) ? "1" : "0"}`
                });
            });
    } else {
        document.getElementsByTagName("p")[0].innerText = "Pobieranie filmów działa tylko na stronie YouTube.";
    }
});

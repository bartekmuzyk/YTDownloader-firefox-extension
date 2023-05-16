const qs = new URLSearchParams(location.search);
window.open(`ytdl:${qs.get("url")}`, "_self");

if (qs.get("autoclose") === "1") setTimeout(() => window.close(), 1000);
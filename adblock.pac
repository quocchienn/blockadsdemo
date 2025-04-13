function FindProxyForURL(url, host) {
    var blacklist = [
        "*.doubleclick.net",
        "*.ads.google.com",
        "*.googlesyndication.com",
        "*.facebookads.com",
        "*.adnxs.com",
        "*.taboola.com",
        "*.zedo.com",
        "*.banners.ad"
    ];

    for (var i = 0; i < blacklist.length; i++) {
        if (shExpMatch(host, blacklist[i])) {
            return "PROXY 127.0.0.1:8080";
        }
    }
    return "DIRECT";
}

(function() {
    // Setup the scripts
    window.hnuBase = 'https://github.com/mrspeaker/HackemUp/raw/master/';
    var head = document.getElementsByTagName('head')[0],
        hackemScript = document.createElement('script'),
        hnuBaseScript = document.createElement('script');
    hackemScript.type = hnuBaseScript.type = 'text/javascript';
    // hnuBaseScript is needed to make hnuBase available to the loaded scripts
    hnuBaseScript.innerText = 'window.hnuBase = \'' + hnuBase + '\'';
    hackemScript.src = hnuBase + 'hackem.js?' + Math.floor(Math.random() * 99999);
    // Inject
    head.appendChild(hnuBaseScript);
    head.appendChild(hackemScript);
    
    // Bind all links in the main content to open in a new tab. Have to use this
    // (somewhat weird) live click event handler as HackemUp replaces the page
    // content each time it refreshes
    $('tbody tr:eq(3) a').live('click', function(){
        $(this).attr('target', '_blank');
    });
})();

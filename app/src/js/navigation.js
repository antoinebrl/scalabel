var projectTitle = document.getElementById('project-title');
projectTitle.onclick = function goBack(){
    // Find browser history offset
    var history_offset = 0
    if (document.referrer) {
        // firefox, chrome, etc..
        // new tab panels are present in the history.
        history_offset = 2;
    } else {
        // under IE
        history_offset = 1;
    }

    // If empty history or referrer is not from the same domain
    if(history.length <= history_offset || document.referrer.indexOf(window.location.host) === -1){
        window.location = './vendor?project_name=' + projectName;
    } else {
        history.back();
    }
};

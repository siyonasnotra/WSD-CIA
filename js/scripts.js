// XHR to fetch data from GitHub
function loadGitHubData() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.github.com/repos/username/reposihttps://siyonasnotra.github.io/WSD-CIA/", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var commits = JSON.parse(xhr.responseText);
            var output = '<ul>';
            commits.forEach(function(commit) {
                output += '<li>' + commit.commit.message + ' by ' + commit.commit.author.name + '</li>';
            });
            output += '</ul>';
            document.getElementById('github-data').innerHTML = output;
        }
    };
    xhr.send();
}

// Call the function when the window loads
window.onload = loadGitHubData;

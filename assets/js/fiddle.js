window.onload = function () {
    const api_url = "https://lze585tezf.execute-api.us-west-2.amazonaws.com/Prod/"

    var resultDiv = document.getElementById("outputUrlLink")
    resultDiv.innerHTML = "Waiting for button ..."

    function create_entries_html(entry_url_string) {
        var c1="<div class='sl_output'>Link: <a href='" + entry_url_string +"'>Click to launch stack</a></div>"
        var c2="<div class='sl_output'>URL: " + entry_url_string.replace(/&/g,"&amp;") + "</div>"
        var c3="<div class='sl_output'>MD: [Launch Stack](" + entry_url_string.replace(/&/g,"&amp;") + ")</div>"
        return(c1+c2+c3)
    }

    var button = document.getElementById("createLinks")
    button.innerHTML = "Rebuild"
    button.onclick = function() {
        var template_url = document.getElementById("templateUrl").value
        var template_enc = encodeURI(template_url)
        console.log("template url " + template_url + " protected as " + template_enc)

        if (template_url) {
            stackloader_url = api_url + "?templateUrl=" + template_enc
            var resultDiv2 = document.getElementById("outputUrlLink")
            resultDiv2.innerHTML = create_entries_html(stackloader_url)

            var params_url = document.getElementById("paramFileUrl").value
            console.log("params url" + params_url)
            fetch(params_url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    data.forEach(element => {
                        var appendString = "param_" + encodeURIComponent(element.ParameterKey) + "=" + encodeURIComponent(element.ParameterValue)
                        console.log(appendString)
                        stackloader_url += "&" + appendString
                        resultDiv2.innerHTML = create_entries_html(stackloader_url)
                    })
                })
        }
    }
}
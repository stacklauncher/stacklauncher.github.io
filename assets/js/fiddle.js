window.onload = function () {
    const api_url = "https://api.stacklauncher.cloud"

    var resultDiv = document.getElementById("outputUrlLink")
    resultDiv.innerHTML = "Waiting for button ..."

    function create_entries_html(entry_url_string) {
        const asset_path="https://www.stacklauncher.cloud/assets/icons/"
        const img1 = "button-aws-18.png"
        const img2 = "button-aws-36.png"
        const img3 = "button-aws-72.png"
        // var html1 = "<a href='" + entry_url_string +"'><img src='" + img1 + "' style='height: 2em' /></a>" 
        var html1 = "<a href='" + entry_url_string +"'><img src='" + asset_path + img1 + "' /></a>" 
        var html2 = "<a href='" + entry_url_string +"'><img src='" + asset_path + img2 + "' /></a>" 
        var html3 = "<a href='" + entry_url_string +"'><img src='" + asset_path + img3 + "' /></a>" 
        var c01 = 
        "<div class='sl_output'>" +
        "<div class='sl_label sl_monospace'>" + he.encode(img1) + "</div>" +
        "<div class='sl_content'>" +
        html1 +
        "</div>" +
        "</div>"
        var c02 = 
        "<div class='sl_output'>" +
        "<div class='sl_label sl_monospace'>" + he.encode(img2) + "</div>" +
        "<div class='sl_content'>" +
        html2 +
        "</div>" +
        "</div>"
        var c03 = 
        "<div class='sl_output'>" +
        "<div class='sl_label sl_monospace'>" + he.encode(img3) + "</div>" +
        "<div class='sl_content'>" +
        html3 +
        "</div>" +
        "</div>"
        var c1 = 
        "<div class='sl_output'>" +
        "<div class='sl_label'>HTML embed code</div>" +
        "<div class='sl_content sl_monospace sl_small'>" +
        he.encode(html1) +
        "</div>" +
        "</div>"
        var md1 = "[![Launch Stack in AWS](" + asset_path + img1 + ")](" + entry_url_string + ")"
        var c2 = 
        "<div class='sl_output'>" +
        "<h3 class='sl_label'>Markdown embed text</h3>" +
        "Copy the output below into your markdown document, e.g. README.md"
        "<div class='sl_content sl_monospace sl_small'>" +
        he.encode(md1) +
        "</div>" +
        "</div>"
        return(c2+c1+c01+c02+c03)
    }

    var button = document.getElementById("createLinks")
    button.innerHTML = "Create Links"
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
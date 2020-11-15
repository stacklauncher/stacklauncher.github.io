window.onload = function () {
    const api_url = "https://api.stacklauncher.cloud"

    var resultDiv = document.getElementById("outputUrlLink")
    resultDiv.innerHTML = "Waiting for button ..."

    var optRegion = document.getElementById("optRegion")
    console.log("Element" + optRegion)

    // Populate this from AWS service call - can we move this to site variables
    // aws ec2 describe-regions --all-regions --query 'Regions[*].RegionName'
    const aws_regions = [
        "af-south-1",
        "eu-north-1",
        "ap-south-1",
        "eu-west-3",
        "eu-west-2",
        "eu-south-1",
        "eu-west-1",
        "ap-northeast-2",
        "me-south-1",
        "ap-northeast-1",
        "sa-east-1",
        "ca-central-1",
        "ap-east-1",
        "ap-southeast-1",
        "ap-southeast-2",
        "eu-central-1",
        "us-east-1",
        "us-east-2",
        "us-west-1",
        "us-west-2"
    ]
    aws_regions.sort().reverse().forEach(element => {
      var option = document.createElement("option")
      option.text = element
      optRegion.add(option)
    })

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
        "<h3 class='sl_label'>Change button size</h3>" +
        "There are currently three different button sizes available. The default is " + he.encode(img1) + ":" +
        "<div class='sl_content'>" +
        html1 +
        "</div>" +
        "To use a larger button, replace the button name " + he.encode(img1) + " in the strings above with " + he.encode(img2) + ":" +
        "<div class='sl_content'>" +
        html2 +
        "</div>" +
        "or with " + he.encode(img3) + ":" +
        "<div class='sl_content'>" +
        html3 +
        "</div>" +
        "</div>"
        var c1 = 
        "<div class='sl_output'>" +
        "<h3 class='sl_label'>HTML embed code</h3>" +
        "Copy the output below into a HTML document to create a 'Launch in AWS' button" +
        "<div class='sl_content sl_monospace sl_small'>" +
        he.encode(html1) +
        "</div>" +
        "</div>"
        var md1 = "[![Launch Stack in AWS](" + asset_path + img1 + ")](" + entry_url_string + ")"
        var c2 = 
        "<div class='sl_output'>" +
        "<h3 class='sl_label'>Markdown embed text</h3>" +
        "Copy the output below into your markdown document, e.g. README.md, to create a 'Launch in AWS' button" +
        "<div class='sl_content sl_monospace sl_small'>" +
        he.encode(md1) +
        "</div>" +
        "</div>"
        return(c2+c1+c01)
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

            var opt_region = document.getElementById("optRegion").value
            console.log("opt region: " + opt_region)
            if (opt_region !== "Not Selected") {
                var append_region = "stackRegion=" + opt_region
                console.log("Append region " + append_region)
                stackloader_url += "&" + append_region
                resultDiv2.innerHTML = create_entries_html(stackloader_url)
    }

            var params_url = document.getElementById("paramFileUrl").value
            console.log("params url:" + params_url)
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
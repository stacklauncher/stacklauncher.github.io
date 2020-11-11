const api_url = "https://lze585tezf.execute-api.us-west-2.amazonaws.com/Prod/"

var resultDiv = document.getElementById("outputUrlLink")
resultDiv.innerHTML = "Waiting for button ..."

var button = document.getElementById("createLinks")
button.innerHTML = "Rebuild"
button.onclick = function() {
  var template_url = document.getElementById("templateUrl").value
  console.log("template " + template_url)
  var template_enc = encodeURI(template_url)
  var resultDiv2 = document.getElementById("outputUrlLink")
  resultDiv2.innerHTML = api_url + "?" + template_enc
  
  var params_url = document.getElementById("paramFileUrl").value
  console.log("params " + params_url)
	fetch(params_url)
		.then(response => response.json())
    .then(data => {
    	console.log(data)
      data.forEach(element => {
        console.log("param_" + element.ParameterKey + "=" + element.ParameterValue)
        })
    })
}
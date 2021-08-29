const elements = {
    paragraphs: {
        responseMessage: "responseMessage"
    }                        
};

const getApiStatus = () => {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    let request = new Request("/health/getApiHealthStatus", {
        method: "GET",
        headers
    });
    fetch(request)
    .then(response => {        
        return response.json();
    })
    .then(json => {
        if(json.status)
            document.getElementById(elements.paragraphs.responseMessage).innerHTML = json.message;
    });
};

window.onload = function() {
    getApiStatus();
};
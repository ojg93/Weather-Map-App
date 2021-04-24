function makeHtml(){
    return `
    <!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>MOCK HTML</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="mock.css">
    </head>
    <body>
        <div class ="my-team">
            <h2> My Team</h2>
        </div>

        ${makeCards()}
        
        <script src="" async defer></script>
    </body>
</html>`
};

function makeCards(){
    return`
<div id="card">
    <div class="card-head">
    <h4></h4>
     <h5></h5>   
    </div>
    <div class="card" style="width: 18rem;">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
        </ul>
      </div>
</div>`
}


module.exports = {
    makeHtml,
    makeCards
}

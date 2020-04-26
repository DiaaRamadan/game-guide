const guideList = document.querySelector('.guides');
const setupGuides = (data) => {
    guideList.innerHTML = "<div class='center'><img class='image-responsive' src='img/ajax-loader.gif' alt='Loader'></div>";
    if (data.length) {
        let html = "";
        data.forEach(doc => {
            const guide = doc.data();
            const li = `
            <li>
                <div class="collapsible-header grey lighten-4">${guide.title}</div>
                <div class="collapsible-body white">${guide.content}</div>
            </li>
       `;
            html += li;
        });
        guideList.innerHTML = html;
    }else{
        guideList.innerHTML = "<h4 class='center'>Login to view guides</h4>";
    }
};

// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);

});
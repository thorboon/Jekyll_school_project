/**
 * Created by jenshuysman on 14/12/16.
 */
;
(function() {

    function Restorestje() {

        // URL of the Search API
        this.API_URL = 'https://api.myjson.com/bins/18jp17?callback=json_callback';

        // The results within the JSON-object
        this._restoResults;

        // Initialize App
        this.init = function() {
            console.log('1. Initialize the app');
            // Call the function loadData
            this.loadData();
        }

        // Load the data from Ghent Data API
        this.loadData = function() {
            // Hack --> Closure
            var that = this;
            console.log('2. Load the Data');

            var xhr = new XMLHttpRequest();
            xhr.open('get', this.API_URL, true);
            xhr.responseType = 'json';
            xhr.onload = function() {
                if (xhr.status == 200) {
                    var data = (!xhr.responseType) ? JSON.parse(xhr.response) : xhr.response;
                    that._restoResults = data;
                    that.updateUI();
                } else {
                    console.log(xhr.status);
                }
            }
            xhr.onerror = function() {
                console.log(Error('Network Error!'));
            }
            xhr.send();

        };

        // Update the User Interface (UI)
        this.updateUI = function() {
            console.log('3. Update UI');

            // Call function generateTableUI
            this.generateTableUI();
        };

        // Generate the albums as a table with rows
        this.generateTableUI = function() {
            console.log('4. Generate UI with table-element');
            var tempStr = '';

            for (var i = 0; i < this._restoResults.length; i++) {

                var resto = this._restoResults[i];
                console.log(resto);
                tempStr += '<div class="div-restorestjes grid__column grid__column-bp1-6 grid__column-bp2-4 grid__column-bp3-2 grid__column-bp4-2 grid__column-bp5-2">';
                tempStr += '<img class="img-recepten" src="' + resto.IMG + '"  />';
                tempStr += '</div>';
                tempStr += '<div class="div-restorestjes grid__column grid__column-bp1-6 grid__column-bp2-8 grid__column-bp3-4 grid__column-bp4-4 grid__column-bp5-4">';
                tempStr += '<ul>';
                tempStr += '<li>"'+ resto.NAAM + '"</li>';
                tempStr += '<li> Adres: ' + resto.STRAAT  + " " + resto.HUISNR + '</li>';
                tempStr += '<li> Gemeente: ' + resto.DEELGEMEENTE + '</li>';
                tempStr += '<li> Tel/Gsm: ' + resto.TEL + '</li>';
                tempStr += '</ul>';
                tempStr += '</div>';
            };
            document.querySelector('.resto-results').innerHTML = tempStr;
        };


    };

    function Recepten() {

        // URL of the Search API
        this.API_URL = 'https://api.myjson.com/bins/lkbdl?callback=json_callback';

        // The results within the JSON-object
        this._receptResults;

        // Initialize App
        this.init = function() {
            console.log('1. Initialize the app');
            // Call the function loadData
            this.loadData();

            //console.log('1. Initialize the app');
            //
            //// Hack
            //var that = this;
            //
            //// Search Textfield
            //this.txtSearchElement = document.querySelector('#search-text');
            //
            //// Search Button Listener
            //this.btnSearchElement = document.querySelector('#search-button');
            //this.btnSearchElement.addEventListener('click', function() {
            //    that.loadData(that.txtSearchElement.value);
            //}, false);
        }



        // Load the data from Ghent Data API
        this.loadData = function() {
            // Hack --> Closure
            var that = this;
            console.log('2. Load the Data');

            var xhr = new XMLHttpRequest();
            xhr.open('get', this.API_URL, true);
            xhr.responseType = 'json';
            xhr.onload = function() {
                if (xhr.status == 200) {
                    var data = (!xhr.responseType) ? JSON.parse(xhr.response) : xhr.response;
                    that._receptResults = data.Recepten;
                    that.updateUI();
                } else {
                    console.log(xhr.status);
                }
            }
            xhr.onerror = function() {
                console.log(Error('Network Error!'));
            }
            xhr.send();

        };

        // Update the User Interface (UI)
        this.updateUI = function() {
            console.log('3. Update UI');

            // Call function generateTableUI
            this.generateTableUI();
        };

        // Generate the albums as a table with rows
        this.generateTableUI = function() {
            console.log('4. Generate UI with table-element');
            var tempStr = '';

            //tempStr += '<select>';
            //for (var j = 0; j < this._receptResults.length; j++) {
            //    var resto1 = this._receptResults[j];
            //    tempStr+= '<option value="'+ resto1 +'">' + resto1.Categorie + '</option>';
            //};
            //tempStr += '</select>';
            for (var i = 0; i < this._receptResults.length; i++) {

                var resto2 = this._receptResults[i];
                console.log(resto2);
                tempStr += '<div class="div-recepten grid__column grid__column-bp1-12 grid__column-bp2-12 grid__column-bp3-6 grid__column-bp4-6 grid__column-bp5-6">';
                tempStr += '<img class="img-recepten" src="' + resto2.Afbeelding + '"  />';
                tempStr += '<a  class="name-recepten" href="">'+ resto2.Naam +'</a>';
                tempStr += '</div>';
            };
            document.querySelector('.recepten-results').innerHTML = tempStr;
        };


    };

    // Make an instance of the Functions
    var app = new Restorestje();
    var app2 = new Recepten();
    // Initialize the app
    app.init();
    app2.init();

})();
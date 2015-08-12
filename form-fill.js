(function () {
    var $ =  function (query) {
        var self = this,
            result,
            queryObject = document.querySelectorAll(query);


        switch (queryObject.length) {
            case 0:
                queryObject = undefined;
            break;
            case 1:
                queryObject = queryObject[0];
            break;
            default:
                queryObject = Array.prototype.slice.call(queryObject);
        }

        result = queryObject || {};

        result.val = function (val) {
            if (queryObject === undefined) {
                return self;
            }

            if (Object.prototype.toString.call(queryObject) === '[object Array]') {
                queryObject.forEach(function (input) {
                    input.value = val;
                });
                return self;
            }

            if (typeof queryObject === 'object') {
                queryObject.value = val;
                return self;
            }

            return self;
        };

        return result;
    };

    $('input[name="Company"]').val('Milestones GmbH');
    $('input[name="Name"]').val('Milestones.com');
    $('input[name="Slogan"]').val('Harder than a rock');

    $('input[name="FirstName"]').val('Max');
    $('input[name="LastName"]').val('Mustermann');
    $('input[name="Street"]').val('Heinrich-Heine-Str. 1');
    $('input[name="Zipcode"]').val('07749');
    $('input[name="City"]').val('Jena');
    $('select[name="CountryID"]').val('276');
    $('input[name="EMail"]').val('mmustermann@epages.de');
    $('input[name="Phone"]').val('12345/54321');
    $('input[name="Fax"]').val('12345/54322');
}());

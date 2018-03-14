$(document).ready(function () {

    $('form').on('click', "input[type=button]", function () {
        var number = $('input[name=number]').val();
        output = [];
        if (number === "") {
            alert("Field can't be empty");
        }
        if (number > 9999){
            alert("Can't be higher than 9999!")
        }
        else {
            function romanNum(number) {
                function base10(num, single, five, ten) {
                    if (num == 0) {
                        return "";
                    }
                    if (num == 1) {
                        return single;
                    }
                    if (num == 2) {
                        return single + single;
                    }
                    if (num == 3) {
                        return single + single + single;
                    }
                    if (num == 4) {
                        return single + five;
                    }
                    if (num == 5) {
                        return five;
                    }
                    if (num == 6) {
                        return five + single;
                    }
                    if (num == 7) {
                        return five + single + single;
                    }
                    if (num == 8) {
                        return five + single + single + single;
                    }
                    if (num == 9) {
                        return single + ten;
                    }
                }
                var thou = Math.floor((number / 1000) % 10);
                var hun = Math.floor((number / 100) % 10);
                var ten = Math.floor((number / 10) % 10);
                var one = Math.floor(number % 10);
                output.push(base10(thou, "M", "V", "L"));
                output.push(base10(hun, "C", "D", "M"));
                output.push(base10(ten, "X", "L", "C"));
                output.push(base10(one, "I", "V", "X"));
                $('h3').remove();
                $('#wrapper').append("<h3> Output Roman Numeral is: " + output.join("") +"</h3>");
                $('form').trigger('reset');
                
            }
        romanNum(number);   
        //console.log(output.join(""));    
        }
    });

});
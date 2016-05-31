if (Meteor.isClient) {

    //Resume Templates
    Template.resume.helpers({
        'job': function () {
            return Resume.find({}, {sort: {jobNum: 1}})
        },
        'accomps': function () {
            return this.accomplishments;
        }
    });

    //Generator Templates
    Template.generator.events({
        'click #generate': function () {
            Meteor.call('make_title', 3 + Math.floor(3 * Math.random()), function (error, result) {
                Session.set('generatedTitle', result)
            });
        }
    });

    Template.generator.helpers({
        'generated_title': function () {
            return Session.get('generatedTitle')
        }
    });

    //Calculator Templates
    Template.calc.events({
        'change #jp': function (event) {
            event.preventDefault();
            // console.log($(event.currentTarget).context.value);
            jp_Val = Session.set('jpVal', $(event.currentTarget).context.value);
            console.log(jp_Val);
        },
        'click #btn1': function (event) {
            event.preventDefault();
            console.log("click");

            var $measurements = 0;
            var $bodyFat1 = 0;

            var $age = +$('#age').val();
            var $chest = +$('#chest').val();
            var $abdominal = +$('#abdominal').val();
            var $thigh = +$('#thigh').val();
            var $subscap = +$('#subscap').val();
            var $tricep = +$('#tricep').val();
            var $suprail = +$('#suprail').val();
            var $midaxil = +$('#midaxil').val();

            if ($('#mf').context.value === "male") { //MALE
                if ($('#jp').context.value === "JP7") { //JP7
                    //using measurements 10,10,10,10,10,10,10, with age 20 and weight 100; results bf%:8.89 fm:8.98lbs
                    $measurements = $chest + $abdominal + $thigh + $subscap + $tricep + $suprail + $midaxil;
                    $bodyFat1 = Math.round((4.95 / (1.112 - (0.00043499 * $measurements) + (0.00000055 * (Math.pow($measurements, 2)) - (0.00028826 * $age))) - 4.5) * 10000) / 100;
                    $('.results').append("<div class='bf'><p>Body Fat: " + $bodyFat1 + "%</p></div>");
                } else { //JP3
                    //using measurements 10,10,10, with age 20 and weight 100; results bf%:7.96 fm:7.96lbs
                    $measurements = $chest + $abdominal + $thigh;
                    $bodyFat1 = Math.round((4.95 / (1.10938 - (0.0008267 * $measurements) + (0.0000016 * (Math.pow($measurements, 2)) - (0.0002574 * $age))) - 4.5) * 10000) / 100;
                    $('.results').append("<div class='bf'><p>Body Fat: " + $bodyFat1 + "%</p></div>");
                }
            } else { //FEMALE
                if ($('#jp').context.value === "JP7") { //JP7
                    //using measurements 10,10,10,10,10,10,10, with age 20 and weight 100; results bf%:15.09 fm:15.09lbs
                    $measurements = $chest + $abdominal + $thigh + $subscap + $tricep + $suprail + $midaxil;
                    $bodyFat1 = Math.round((4.95 / (1.097 - (0.00046971 * $measurements) + (0.00000056 * (Math.pow($measurements, 2)) - (0.00012828 * $age))) - 4.5) * 10000) / 100;
                    $('.results').append("<div class='bf'><p>Body Fat: " + $bodyFat1 + "%</p></div>");
                } else { //JP3
                    //using measurements 10,10,10, with age 20 and weight 100; results bf%:13.05 fm:13.05lbs
                    $measurements = $chest + $abdominal + $thigh;
                    $bodyFat1 = Math.round((4.95 / (1.0994921 - (0.0009929 * $measurements) + (0.0000023 * (Math.pow($measurements, 2)) - (0.0001392 * $age))) - 4.5) * 10000) / 100;
                    $('.results').append("<div class='bf'><p>Body Fat: " + $bodyFat1 + "%</p></div>");
                }
            }
            console.log(('#jp').context.value)


        },
        'click #btn2': function (event) {
            event.preventDefault();
            $('.bf').remove();
            $('svg g').remove();
            $('svg svg').remove();
        }
    });

    Template.calc.helpers({
        'jp_Val': function () {
            return Session.get('jpVal')
        }
    });
}
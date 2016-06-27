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
    
    //Timeline Templates
    Template.timeline.helpers({
        'job': function () {
            return Resume.find({}, {sort: {jobNum: 1}})
        },
        'accomps': function () {
            return this.accomplishments;
        }
    });

    Template.timeline.events({
        'click #collapse0': function(event) {
            event.preventDefault();
            $('.collapse0').toggle("slow", "swing");        }
    });

    //Prioritizer Templates
    Template.prio.events({
        'change #1': function () {
            Session.set('p1', $('#1').val());
        },
        'change #2': function () {
            Session.set('p2', $('#2').val());
        },
        'change #3': function () {
            Session.set('p3', $('#3').val());
        }
    });

    Template.prio.helpers({
        'p1': function () {
            return Session.get('p1')
        },
        'p2': function () {
            return Session.get('p2')
        },
        'p3': function () {
            return Session.get('p3')
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
        'click #btn1': function (event) {
            console.log("click");
            event.preventDefault();

            $('.bf').remove();
            $('svg g').remove();
            $('svg svg').remove();

            Session.set('mfVal', $('#mf').val());
            Session.set('jpVal', $('#jp').val());

            var measurements = 0;
            var bodyFat1 = 0;
            var age = +$('#age').val();
            var weight = +$('#weight').val();
            var chest = +$('#chest').val();
            var abdominal = +$('#abdominal').val();
            var thigh = +$('#thigh').val();
            var subscap = +$('#subscap').val();
            var tricep = +$('#tricep').val();
            var suprail = +$('#suprail').val();
            var midaxil = +$('#midaxil').val();

            function barChrt() {
                console.log("chart");
                var barHeight = 50;
                var zults = [{
                    "FM": Math.round((weight * bodyFat1), 0) / 100,
                    "LM": Math.round((weight - (weight * bodyFat1) / 100) * 100) / 100
                }];
                var x = d3.scale.linear().domain([0, (zults[0].LM + zults[0].FM)]).range([0, $('.results').width()]);
                var chart = d3.select(".chartBar").attr("width", $('.results').width()).attr("height", barHeight + 20);
                var groups = chart.selectAll("g").data(zults).enter().append("g");
                var Frects = groups.append("rect");
                var Lrects = groups.append("rect");
                var Ftext = groups.append("text");
                var Ltext = groups.append("text");

                Frects.attr("y", 0).attr("x", 0).attr("width", 0).attr("height", barHeight).attr("fill", "#60117D")
                    .transition().attr("width", function () {
                    return x(zults[0].FM);
                }).duration(750).delay(100);
                Lrects.attr("y", 0).attr("x", 0).attr("width", 0).attr("height", barHeight).attr("fill", "#FF6500")
                    .transition().attr("width", function () {
                    return x(zults[0].LM);
                }).attr("x", function () {
                    return x(zults[0].FM) + 1;
                }).duration(750).delay(100);
                Ftext.attr("x", 5).attr("y", (barHeight / 2) + 35).text("FM: " + zults[0].FM + "lbs").attr("dy", ".35em");
                Ltext.attr("x", $('.results').width() - 90).attr("y", (barHeight / 2) + 35).text("LM: " + zults[0].LM + "lbs").attr("dy", ".35em").attr("id", "lm");
            }


            if (Session.get('mfVal') === "male") { //MALE
                if (Session.get('jpVal') === "JP7") { //JP7
                    //(Male, JP7) using measurements 10,10,10,10,10,10,10, with age 20 and weight 100; results bf%:8.98 fm:8.98lbs
                    measurements = chest + abdominal + thigh + subscap + tricep + suprail + midaxil;
                    bodyFat1 = Math.round((4.95 / (1.112 - (0.00043499 * measurements) + (0.00000055 * (Math.pow(measurements, 2)) - (0.00028826 * age))) - 4.5) * 10000) / 100;
                    $('.results').append("<div class='bf'><p>Body Fat: " + bodyFat1 + "%</p></div>");
                    barChrt();
                } else { //JP3
                    //(Male, JP3) using measurements 10,10,10, with age 20 and weight 100; results bf%:7.96 fm:7.96lbs
                    measurements = chest + abdominal + thigh;
                    bodyFat1 = Math.round((4.95 / (1.10938 - (0.0008267 * measurements) + (0.0000016 * (Math.pow(measurements, 2)) - (0.0002574 * age))) - 4.5) * 10000) / 100;
                    $('.results').append("<div class='bf'><p>Body Fat: " + bodyFat1 + "%</p></div>");
                    barChrt();
                }
            } else { //FEMALE
                if (Session.get('jpVal') === "JP7") { //JP7
                    //(Female, JP7) using measurements 10,10,10,10,10,10,10, with age 20 and weight 100; results bf%:15.09 fm:15.09lbs
                    measurements = chest + abdominal + thigh + subscap + tricep + suprail + midaxil;
                    bodyFat1 = Math.round((4.95 / (1.097 - (0.00046971 * measurements) + (0.00000056 * (Math.pow(measurements, 2)) - (0.00012828 * age))) - 4.5) * 10000) / 100;
                    $('.results').append("<div class='bf'><p>Body Fat: " + bodyFat1 + "%</p></div>");
                    barChrt();
                } else { //JP3
                    //(Female, JP3) using measurements 10,10,10, with age 20 and weight 100; results bf%:13.05 fm:13.05lbs
                    measurements = chest + abdominal + thigh;
                    bodyFat1 = Math.round((4.95 / (1.0994921 - (0.0009929 * measurements) + (0.0000023 * (Math.pow(measurements, 2)) - (0.0001392 * age))) - 4.5) * 10000) / 100;
                    $('.results').append("<div class='bf'><p>Body Fat: " + bodyFat1 + "%</p></div>");
                    barChrt();
                }
            }
        },
        'click #btn2': function (event) {
            event.preventDefault();
            $('.bf').remove();
            $('svg g').remove();
            $('svg svg').remove();
            console.log("cleared");
        },
        'change #jp': function (event) {
            event.preventDefault();
            $('.jp7').toggle("slow", "swing");
            console.log("toggled");
        }

    });

    Template.calc.helpers({});
}
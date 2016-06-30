Router.configure({
    layoutTemplate: 'main'
});
Router.route('/resume');
Router.route('/prio');
Router.route('/calc');
Router.route('/dash');
Router.route('/generator');
Router.route('/', {
    name: 'home',
    template: 'home'
});
Meteor.methods({
    //Resume methods
    'insertResume': function () {
        for (var i = 0; i < resumeData.length; i++) {
            Resume.insert(resumeData[i]);
        }
    },
    'resetResume': function () {
        Resume.remove({});
    },
    //Generator methods
    'make_title': function (min_length) {

        var terminals = {};
        var startwords = [];
        var wordstats = {};

        var titles = [];

        for (var i = 0; i < buls.length; i++) {
            titles.push(buls[i]);
        }

        for (var o = 0; o < titles.length; o++) {
            var words = titles[o].split(' ');
            terminals[words[words.length - 1]] = true;
            startwords.push(words[0]);
            for (var j = 0; j < words.length - 1; j++) {
                if (wordstats.hasOwnProperty(words[j])) {
                    wordstats[words[j]].push(words[j + 1]);
                } else {
                    wordstats[words[j]] = [words[j + 1]];
                }
            }
        }

        var choice = function (a) {
            var i = Math.floor(a.length * Math.random());
            return a[i];
        };

        word = choice(startwords);

        var title = [word];

        while (wordstats.hasOwnProperty(word)) {
            var next_words = wordstats[word];
            word = choice(next_words);
            title.push(word);
            if (title.length > min_length && terminals.hasOwnProperty(word)) break;
        }

        if (title.length < min_length) return Meteor.call('make_title', min_length);
        //if (title.length < min_length) return make_title(min_length);

       return title.join(' ');

    }
});
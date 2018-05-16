function search(pattern, text) {
        var M = pattern.length;
        var N = text.length;
        for (var i = 0; i <= N - M; ++i) {
            var matched = true;
            for (var j = 0; j < M; ++j) {
                if (text.charAt(i + j) != pattern.charAt(j)) {
                    matched = false;
                    break;
                }
            }
            if (matched) {
                return "Correct Value found at element: " + (i+1);
            }
        }
        return "Text was not found";
    }

var readline = require('readline-sync');

var text = readline.question("Please enter your text: ");

var keyword = readline.question("Please enter your keyword: ");

console.log(search(keyword,text));
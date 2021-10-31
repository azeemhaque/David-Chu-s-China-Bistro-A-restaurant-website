
(function () {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        var firstLetter = name.charAt(0).toLowerCase();

        if (firstLetter === 'j') {
            byeSpeaker.speak(name);
        } else {
            helloSpeaker.speak(name);
        }
    }
})();
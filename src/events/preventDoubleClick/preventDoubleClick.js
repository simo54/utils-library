var HTMLTagEventsCustom;
(function (HTMLTagEventsCustom) {
    HTMLTagEventsCustom["BUTTON"] = "button";
})(HTMLTagEventsCustom || (HTMLTagEventsCustom = {}));
function preventDoubleClickOnTag(el) {
    var element = document.getElementsByTagName(el);
    // https://stackoverflow.com/questions/54704099/typescript-how-to-iterate-over-a-htmlcollection
    for (var _i = 0, _a = Array.from(element); _i < _a.length; _i++) {
        var tag = _a[_i];
        tag.addEventListener('dblclick', function (event) {
            /** To be removed */
            alert('Double-click disabled!');
            /** To be removed */
            event.preventDefault();
            event.stopPropagation();
        }, true);
    }
}
preventDoubleClickOnTag(HTMLTagEventsCustom.BUTTON);

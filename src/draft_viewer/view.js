(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
class Viewer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            React.createElement("div", null, 
                React.createElement(MtgCard, {imageUrl: "https://img.scryfall.com/cards/large/en/vma/271.jpg?1496998234"}), 
                React.createElement(MtgCard, {imageUrl: "https://img.scryfall.com/cards/large/en/mm2/223.jpg?1517813031"})
            )
        );
    }
}

ReactDOM.render(
    React.createElement(Viewer, null),
    document.getElementById("root")
);

},{}]},{},[1]);

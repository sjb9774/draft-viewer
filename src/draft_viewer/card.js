import React from 'react';

function MtgCard(props) {
    return (
        React.createElement("div", {class: "card-wrapper"},
            React.createElement("img", {src: props.imageUrl})
        )
    );
};

export default MtgCard;
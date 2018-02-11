import React from 'react';
import Scryfall from '../scryfall/api.js'

class MtgCard extends React.Component {
    constructor(props) {
        super(props);
        this.setState({imageUrl: ""});
        this.loadImage();
    }

    loadImage() {
        var s = new Scryfall();
        var self = this;
        s.getCard({name: this.props.name, set: this.props.set})
         .then((r) => r.json())
         .then((json) => {
             self.setState({imageUrl: json.image_uris.large});
         });
    }

    render() {
        return (
            <div class="card-wrapper">
                <img src={this.state.imageUrl} />
            </div>
        );
    }
}


export default MtgCard;

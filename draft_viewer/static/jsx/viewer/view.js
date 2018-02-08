class Viewer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <MtgCard imageUrl="https://img.scryfall.com/cards/large/en/vma/271.jpg?1496998234" />
                <MtgCard imageUrl="https://img.scryfall.com/cards/large/en/mm2/223.jpg?1517813031" />
            </div>
        );
    }
}

ReactDOM.render(
    <Viewer />,
    document.getElementById("root")
);


import React from "react";

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            spans: 0
        };
        this.ImgRef = React.createRef();
    }

    componentDidMount = () => {
        this.ImgRef.current.addEventListener('load',this.adjustSpan);
    }

    adjustSpan = () => {
        const height = this.ImgRef.current.clientHeight;
        const spans = Math.ceil(height/10);
        this.setState({
            spans:spans
        });
    }

    render() {
        return (
            <div style= {{ gridRowEnd:`span ${this.state.spans}` }}>
                <img ref={this.ImgRef} alt={this.props.image.description} src={this.props.image.urls.regular}/>
            </div>
        );
    }
}

export default ImageCard;
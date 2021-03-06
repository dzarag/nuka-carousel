import Carousel from '../src/index';
import React from 'react';
import ReactDom from 'react-dom';

const colors = ['7732bb', '047cc0', '00884b', 'e3bc13', 'db7c00', 'aa231f'];

class App extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      slideIndex: 0,
      length: 6,
      wrapAround: false,
      underlineHeader: false,
      slidesToShow: 1.0,
      cellAlign: 'left',
      transitionMode: 'scroll'
    };

    this.handleImageClick = this.handleImageClick.bind(this);
  }

  handleImageClick() {
    this.setState({ underlineHeader: !this.state.underlineHeader });
  }

  render() {
    return (
      <div style={{ width: '50%', margin: 'auto' }}>
        <div style={{ height: '100vh' }}>
          <Carousel
            transitionMode={this.state.transitionMode}
            cellAlign={this.state.cellAlign}
            slidesToShow={this.state.slidesToShow}
            wrapAround={this.state.wrapAround}
            slideIndex={this.state.slideIndex}
            fullScreen
            renderTopCenterControls={({ currentSlide }) => (
              <div
                style={{
                  fontFamily: 'Helvetica',
                  color: '#fff',
                  textDecoration: this.state.underlineHeader
                    ? 'underline'
                    : 'none'
                }}
              >
                Nuka Carousel: Slide {currentSlide + 1}
              </div>
            )}
          >
            {colors.slice(0, this.state.length).map((color, index) => (
              <img
                src={`http://placehold.it/1000x400/${color}/ffffff/&text=slide${index +
                  1}`}
                key={color}
                onClick={this.handleImageClick}
              />
            ))}
          </Carousel>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <button onClick={() => this.setState({ slideIndex: 0 })}>1</button>
            <button onClick={() => this.setState({ slideIndex: 1 })}>2</button>
            <button onClick={() => this.setState({ slideIndex: 2 })}>3</button>
            <button onClick={() => this.setState({ slideIndex: 3 })}>4</button>
            <button onClick={() => this.setState({ slideIndex: 4 })}>5</button>
            <button onClick={() => this.setState({ slideIndex: 5 })}>6</button>
          </div>
          <div>
            <button
              onClick={() =>
                this.setState({
                  length: 2
                })
              }
            >
              2 Slides Only
            </button>
            <button
              onClick={() =>
                this.setState({
                  transitionMode:
                    this.state.transitionMode === 'fade' ? 'scroll' : 'fade'
                })
              }
            >
              Toggle Fade {this.state.transitionMode === 'fade' ? 'Off' : 'On'}
            </button>
            <button
              onClick={() =>
                this.setState(prevState => ({
                  wrapAround: !prevState.wrapAround
                }))
              }
            >
              Toggle Wrap Around
            </button>
          </div>
        </div>
        {this.state.transitionMode !== 'fade' && (
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {this.state.slidesToShow > 1.0 && (
              <div>
                <button onClick={() => this.setState({ cellAlign: 'left' })}>
                  Left
                </button>
                <button onClick={() => this.setState({ cellAlign: 'center' })}>
                  Center
                </button>
                <button onClick={() => this.setState({ cellAlign: 'right' })}>
                  Right
                </button>
              </div>
            )}
            <div style={{ marginLeft: 'auto' }}>
              <button
                onClick={() =>
                  this.setState({
                    slidesToShow: this.state.slidesToShow > 1.0 ? 1.0 : 1.25
                  })
                }
              >
                Toggle Partially Visible Slides
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('content'));

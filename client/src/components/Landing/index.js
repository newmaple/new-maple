import React from 'react';
import Header from './components/Header';

require('./index.css');

class Landing extends React.Component {
    render() {
        return (
            <div>
                <Header />
            </div>
        );
    }
}

export default Landing;
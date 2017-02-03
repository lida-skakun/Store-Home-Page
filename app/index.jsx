import React from 'react';
import {render} from 'react-dom';
import Header from './components/header'
import Catalog from './components/catalog'
import Footer from './components/footer'
import styles from '../styles.css'

class App extends React.Component {
    render () {
        return <div>
            <Header />
            <Catalog />
            <Footer />
        </div>;
    }
}

render(<App/>, document.getElementById('app'));
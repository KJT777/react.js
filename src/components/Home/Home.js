import React from 'react';
import styles from './Home.scss';
import PropTypes from 'prop-types';
import ListLink from '../ListLink/ListLink.js';
//import {pageContents, listData} from '../../data/dataStore';

class Home extends React.Component {  // dziedziczy ona z klasy React.Component
  render() {
    const {lists, title, subtitle} = this.props; // chcemy aby treść była pobierana z propsów komponentu
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2> 
        {lists.map(listData => (
          <ListLink key={listData.id} {...listData} />
        ))}
        {/*<List {...listData} /> */} 
      </main>
    );
  }
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
  }
}

// <List {...listData} /> spread operator, który pozwala na rozpakowanie obiektu lub tablicy.
export default Home;
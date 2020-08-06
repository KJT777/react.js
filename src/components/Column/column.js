import React from 'react'; // import biblioteki React
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Creator from '../Creator/Creator.js';
import { settings } from '../../data/dataStore';
import Icon from '../Icon/Icon.js';

class Column extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    cards: PropTypes.array,
    icon: PropTypes.node,
    addCard: PropTypes.func,
    id: PropTypes.string,
  };

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  };

  render() {
    const {title, icon, cards, addCard} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon name={icon} />
          </span>    
          {title}
        </h3> 

        {cards.map((cardData) => (
          <Card key={cardData.id} {...cardData} />
        ))}

        <div>
          <Creator text={settings.cardCreatorText} action={addCard} />
        </div>
      </section>
    );
  }
}

export default Column;
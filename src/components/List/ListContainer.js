import {connect} from 'react-redux';
import List from './List';
import { getColumnsForList } from '../../redux/columnsRedux.js';
import { createActionAddColumn } from '../../redux/columnsRedux.js';

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  const filteredLists = state.lists.filter(list => list.id == id);
  const listParams = filteredLists[0] || {};

  return {
    ...listParams,
    columns: getColumnsForList(state, id),
  };
};

// mapDispatchToProps to funkcja, która nadaje komponentowi propsy, w których znajdą się funkcje wysyłające akcje do magazynu.Akcja jest zgłoszeniem chęci zmiany stanu aplikacji.
const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createActionAddColumn({
    listId: props.match.params.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
import React from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends React.Component {
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }

  renderList() {
    return this.props.books.map(book => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      )
    });
  }
}

//Anything returned from this function will end up as props on the booklist container
function mapStateToProps(state) {
  //Whatever is returned will show up as props
  //inside of book
  return {
    books: state.books
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectBook: selectBook}, dispatch)
}

//Promote BookList from a component to a container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

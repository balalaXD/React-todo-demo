import React, { Component } from 'react';
import propTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './TodoItem.css';

class RenderTodoItems extends Component {
  shouldComponentUpdate(nextProps, nextStates) {
    if (nextProps.items !== this.props.items)
      return true

    return false
  }

  render() {
    const itemsList = this.props.items.map((item, index) => {
      return (
        <CSSTransition
          key={item}
          timeout={{enter: 500, exit: 0}}
          classNames="fade"
          unmountOnExit>
          <li
            onClick={() => this.props.onClick(index)}
            dangerouslySetInnerHTML={{__html: item}}>
          </li>
        </CSSTransition>
      )
    })

    return (
      <ul>
        <TransitionGroup>
          {itemsList}
        </TransitionGroup>
      </ul>
    )
  }
}

RenderTodoItems.propTypes = {
  items: propTypes.array.isRequired,
  onClick: propTypes.func.isRequired
}

// When you not provide some props to the component, the default take effect
// For more detail, visit https://reactjs.org/docs/typechecking-with-proptypes.html
RenderTodoItems.defaultProps = {
  items: ['Wake up at 5:30', 'Working hard until 7:00pm', 'Go to study']
}

export default RenderTodoItems;

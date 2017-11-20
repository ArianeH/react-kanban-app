import React from 'react';
import uuid from 'uuid';
import Notes from './Notes';

// const notes = [
//   {
//     id: uuid.v4(),
//     task: 'Learn React'
//   },
//   {
//     id: uuid.v4(),
//     task: 'Do laundry'
//   }
// ];

// export default () => (
//   <div>
//     <button onClick={() => console.log('add note')}>+</button>
//     <Notes notes={notes} />
//   </div>
// );

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Learn React'
        },
        {
          id: uuid.v4(),
          task: 'Do laundry'
        }
      ]
    };
  }
  render() {
    const {notes} = this.state;

    return (
      <div>
        <button onClick={this.addNote}>+</button>
        <Notes notes={notes} onDelete={this.deleteNote} />
      </div>
    );
  }
  addNote = () => {
    // It would be possible to write this in an imperative style.
    // I.e., through `this.state.notes.push` and then
    // `this.setState({notes: this.state.notes})` to commit.

    this.setState({
      notes: this.state.notes.concat([{
        id: uuid.v4(),
        task: 'New task'
      }])
    });
  }

  deleteNote = (id, e) => {
    e.stopPropagation();

    this.setState({
      notes: this.state.notes.filter(note => note.id !== id)
    });
  }

}

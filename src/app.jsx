import React, { Component } from "react";
import "./App.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    // 얕은 복사이기 때문에 배열 안의 객체의 주소값은 동일
    // const _habits = [...this.state.habits];
    // const index = _habits.indexOf(habit);
    // _habits[index].count += 1;
    // _habits[index].count += 1;
    const _habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    this.setState({ habits: _habits });
  };

  handleDecrement = (habit) => {
    // const _habits = [...this.state.habits];
    // const index = _habits.indexOf(habit);
    // const count = _habits[index].count - 1;
    // _habits[index].count = count < 0 ? 0 : count;
    const _habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });
    this.setState({ habits: _habits });
  };

  handleDelete = (habit) => {
    const _habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits: _habits });
  };

  handleAdd = (habit) => {
    const habits = [
      ...this.state.habits,
      { id: Date.now(), name: habit, count: 0 },
    ];
    this.setState({ habits });
  };

  handleReset = () => {
    const habits = this.state.habits.map((habit) => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });
    this.setState({ habits });
  };

  render() {
    return (
      <div>
        <Navbar
          totalCount={
            this.state.habits.filter((habit) => habit.count !== 0).length
          }
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </div>
    );
  }
}

export default App;

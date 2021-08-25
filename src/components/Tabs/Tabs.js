import React, { PureComponent } from 'react';

export default class Tabs extends PureComponent {
  state = {
    activeTabInx: 0,
  };

  //   shouldComponentUpdate(nextProps, nextState) {
  //     return nextState.activeTabInx !== this.state.activeTabInx;
  //   }

  setActiveTabIdx = idx => {
    this.setState({ activeTabInx: idx });
  };

  render() {
    console.log(`Re-render @ ${Date.now()}`);

    const { activeTabInx } = this.state;
    const { items } = this.props;
    const activeTab = items[activeTabInx];

    return (
      <>
        <div>
          {items.map((item, idx) => (
            <button
              type="button"
              key={item.label}
              onClick={() => this.setActiveTabIdx(idx)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div>
          <h1>{activeTab.label}</h1>
          <p> {activeTab.content} </p>
        </div>
      </>
    );
  }
}

import { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import Intro from "./components/Intro/Intro/Intro";
import Search from "./components/Search/Search";
import Chat from "./components/Chat/Chat";

import styles from "./App.module.css";

const questionAnswersList = [
  {
    q: "what is a mutual fund",
    a: "A mutual fund pools money from investors to buy stocks, bonds, and other investments, offering diversification, professional management, and easier investing with less money.",
  },
  {
    q: "How does compound interest work",
    a: "Compound interest is like earning interest on your interest. Imagine it as a snowball rolling downhill - it starts small but gains momentum as it picks up more snow. In simpler terms, compound interest is when you earn interest on both your initial investment (principal) and the interest that accumulates over time. This can significantly grow your savings over the long term",
  },
  {
    q: "explain the difference between stocks and bonds",
    a: "Stocks represent ownership in a company (you own a piece of the pie). They can grow in value but come with risk and no guaranteed returns. Bonds are IOUs from companies or governments. You get a fixed interest payment but limited growth potential.",
  },
];

class App extends Component {
  state = { historyList: [] };

  onSuccessFullQuery = (inputValue, obj) => {
    //console.log('rama')
    const { historyList } = this.state;
    const newObj = {
      q: inputValue,
      a: obj[0].a,
      id: uuidv4(),
    };
    //console.log(newObj)
    //console.log(newObj,obj,inputValue)
    this.setState((prevState) => ({
      historyList: [...prevState.historyList, newObj],
    }));
  };

  render() {
    const { historyList } = this.state;
    return (
      <div className={styles.mainContainer}>
        {historyList.length == 0 && <Intro />}
        {!historyList.length == 0 && <Chat chatList={historyList} />}
        <Search
          dataList={questionAnswersList}
          onQuery={this.onSuccessFullQuery}
        />
      </div>
    );
  }
}

export default App;

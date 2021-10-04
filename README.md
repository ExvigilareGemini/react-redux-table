# React-redux-table

---

---

A modular table made with [React], [Redux] and [React-Redux].

## Installation

---

```sh
npm i react-redux-table
or
yarn add react-redux-table
```

## Prerequisite

---

You must install and configure [React], [Redux] and [React-Redux] in your project.

## Redux state & configuration

---

### *State*

React-redux-table state must be present in the store inside the object `rrtable`.

### *Configuration*

You must add `rrtableReducer` to your project using [combineReducers] (or in your [configureStore] if you are using [@reduxjs/toolkit]) in the name of `rrtable`.

#### - combineReducers

```sh
import { rrtableReducer } from "react-redux-table";

export const rootReducer = combineReducers({
  yourReducer: yourReducer,
  rrtable: rrtableReducer,
});

```

#### - configureStore

```sh
import { rrtableReducer } from "./lib/redux/reducer/rrtable-reducer";

const store = configureStore({
  reducer:  { yourReducers : yourReducers, rrtable: rrtableReducer },
});
```

## Usage

---

```sh
import React from 'react';
import Table from 'react-redux-table';

class Component extends React.Component {
    render {
        <>
            <Table
              headersArray={headersArray}
              rowsContent={rowsContent}
              title="Your title"
              filter={true}
              entriesSelector={entriesSelector}
              showEntries={true}
              hideButtons={false}
            />
        </>
    }
}
```

### Props

- `headersArray` {[object]} : the content of column headers - 
```sh
headersArray = [...{title: "your title", category: "yourCategory"},]
```
- `rowsContent` {[[object]]} : the content of rows
```sh
rowsContent = [
    ...[
           ...{cellValue: "value", category: "yourCorrespondingCategory"},
       ],
]
```
- `title` {string} [optional] : the title of the table
- `filter` {bool} [optional] : wether the filtering functionality is present
- `entriesSelector` {[string]} [optional] : the selector of displayed rows by page
- `showEntries` {bool} [optional] : wether the actual status along pages is displayed
- `hideButtons` {bool} [optional] : true to hide buttons

## Example 1
```sh
import { Table } from "react-redux-table";

const headArray = [
  { title: "First Name", category: "firstName" },
  { title: "Last Name", category: "lastName" },
];

const rowsArray = [
  [
    { cellValue: "Nicolas", category: "firstName" },
    { cellValue: "Tesla", category: "lastName" },
  ],
  [
    { cellValue: "Leonardo", category: "firstName" },
    { cellValue: "Da Vinci", category: "lastName" },
  ],
  [
    { cellValue: "Sherlock", category: "firstName" },
    { cellValue: "Holmes", category: "lastName" },
  ],
];

function App() {
  return (
    <>
      <Table headersArray={headArray} rowsContent={rowsArray} />
    </>
  );
}
```

![alt text](https://raw.githubusercontent.com/ExvigilareGemini/srcImage/main/img/rrtable-neutral.PNG)

---

## Example 2
```sh
import { Table } from "react-redux-table";

const headArray = [
  { title: "First Name", category: "firstName" },
  { title: "Last Name", category: "lastName" },
];

const rowsArray = [
  [
    { cellValue: "Nicolas", category: "firstName" },
    { cellValue: "Tesla", category: "lastName" },
  ],
  [
    { cellValue: "Leonardo", category: "firstName" },
    { cellValue: "Da Vinci", category: "lastName" },
  ],
  [
    { cellValue: "Sherlock", category: "firstName" },
    { cellValue: "Holmes", category: "lastName" },
  ],
];

function App() {
  return (
    <>
      <Table
        headersArray={headArray}
        rowsContent={rowsArray}
        title="Famous people"
        filter={true}
        entriesSelector={[10, 100]}
        showEntries={true}
        hideButtons={true}
      />
    </>
  );
}
```
![alt text](https://raw.githubusercontent.com/ExvigilareGemini/srcImage/main/img/rrtable-full-params.PNG)

[react-redux]: https://github.com/reactjs/react-redux
[react]: https://github.com/facebook/react
[redux]: https://github.com/reactjs/redux
[combinereducers]: https://redux.js.org/api/combinereducers
[configurestore]: https://redux.js.org/usage/configuring-your-store#the-solution-configurestore
[@reduxjs/toolkit]: https://redux.js.org/introduction/getting-started

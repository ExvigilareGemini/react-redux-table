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

## Redux configuration of react-redux-table

---

You must add `rrtableReducer` to your project using [combineReducers] (or in your [configureStore] if you are using [@reduxjs/toolkit]) in the name of `rrtable`.

### combineReducers

```sh

```

### configureStore

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

[react-redux]: https://github.com/reactjs/react-redux
[react]: https://github.com/facebook/react
[redux]: https://github.com/reactjs/redux
[combinereducers]: https://redux.js.org/api/combinereducers
[configurestore]: https://redux.js.org/usage/configuring-your-store#the-solution-configurestore
[@reduxjs/toolkit]: https://redux.js.org/introduction/getting-started
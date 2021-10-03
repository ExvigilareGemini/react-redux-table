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

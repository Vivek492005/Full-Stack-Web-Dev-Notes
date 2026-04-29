/*
========================================================================================================================================================================
                                                                    REACT JS COMPLETE NOTES - COMPONENTS, HOOKS, AND STATE
========================================================================================================================================================================

/*
React is a JavaScript library for building user interfaces. It is component-based, 
meaning you build small, reusable pieces of UI and combine them into a full application.

Key Concepts:
- JSX (JavaScript XML): Allows you to write HTML-like code inside JavaScript.
- Components: The building blocks of React (Functional or Class-based).
- Props (Properties): Read-only data passed from parent to child.
- State: Data managed within a component that can change over time.
- Virtual DOM: A lightweight copy of the real DOM used for performance optimization.
*/

import React, { useState, useEffect, createContext, useContext } from 'react';

// --------------------FUNCTIONAL COMPONENTS & JSX-----------------------
/* 
Components must start with a capital letter.
JSX must return a single root element (or a Fragment <></>).
*/
const Header = () => {
    return (
        <header>
            <h1>Welcome to React</h1>
        </header>
    );
};

// --------------------PROPS (PROPERTIES)-----------------------
/*
Props are used to pass data from one component to another.
*/
const Greeting = (props) => {
    return <h2>Hello, {props.name}!</h2>;
};

// --------------------STATE (USESTATE HOOK)-----------------------
/*
State allows components to track and update data. When state changes, React re-renders.
*/
const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

// --------------------SIDE EFFECTS (USEEFFECT HOOK)-----------------------
/*
useEffect handles side effects like API calls, timers, or subscriptions.
Dependencies array []:
- empty: runs only once on mount.
- [var]: runs whenever 'var' changes.
- none: runs on every render.
*/
const DataFetcher = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Simulating API call
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(json => setData(json));
            
        // Optional Cleanup Function
        return () => console.log('Component Unmounted');
    }, []);

    return <div>Data: {data.title}</div>;
};

// --------------------LISTS & KEYS-----------------------
const FruitList = () => {
    const fruits = ['Apple', 'Banana', 'Mango'];
    return (
        <ul>
            {fruits.map((fruit, index) => (
                <li key={index}>{fruit}</li> /* Always provide a unique 'key' */
            ))}
        </ul>
    );
};

// --------------------CONTEXT API-----------------------
/*
Used for "Prop Drilling" solutions (passing data deep without props).
*/
const ThemeContext = createContext('light');

const ThemeApp = () => {
    return (
        <ThemeContext.Provider value="dark">
            <ThemedButton />
        </ThemeContext.Provider>
    );
};

const ThemedButton = () => {
    const theme = useContext(ThemeContext);
    return <button className={theme}>I am {theme} themed!</button>;
};

// --------------------OTHER COMMON HOOKS-----------------------
/*
- useRef: Access DOM elements directly or persist values without re-rendering.
- useMemo: Memoize expensive calculations.
- useCallback: Memoize functions to prevent unnecessary re-renders.
*/

// --------------------REACT SUMMARY TABLE-----------------------
/*
| Feature          | Description                                      |
| ---------------- | ------------------------------------------------ |
| JSX              | JavaScript XML for describing UI                 |
| Props            | Immutable data passed to components              |
| State            | Mutable data managed inside components           |
| useState         | Hook for managing state                          |
| useEffect        | Hook for side effects and lifecycle              |
| useContext       | Hook for accessing Context                       |
| Virtual DOM      | Performance optimization layer                   |
---------------------------------------------------------------------- */

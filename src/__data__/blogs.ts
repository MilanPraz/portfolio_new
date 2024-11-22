export const blogPosts = [
  {
    id: 1,
    slug: "react-guide-for-beginners",
    date: "15, Nov, 2024",
    title: "Getting Started with React: A Beginner's Guide",
    excerpt:
      "Explore the fundamentals of React, including components, state, and props. Learn how to build interactive user interfaces and start your journey with React development.",
    body: `
      <h2 style="font-size: 2rem; font-weight: bold; margin-top: 20px; margin-bottom: 15px;">What is React?</h2>
      <p style="margin-top: 10px; margin-bottom: 20px;">React is a JavaScript library developed by Facebook for building fast and interactive user interfaces. It's based on reusable components and a declarative approach, making it easier to manage dynamic content.</p>
      
      <h3 style="font-size: 1.75rem; font-weight: bold; margin-top: 20px; margin-bottom: 15px;">Key Concepts of React</h3>
      <ol style="margin-top: 10px; margin-bottom: 20px;">
        <li style="margin-bottom: 10px;"><strong>Components</strong> — The building blocks of React applications. There are two types of components:
          <ul>
            <li><em>Class Components</em> (older style)</li>
            <li><em>Functional Components</em> (recommended style)</li>
          </ul>
        </li>
        <li style="margin-bottom: 10px;"><strong>State</strong> — State represents the dynamic data in a component. It allows components to maintain and modify their data over time.</li>
        <li style="margin-bottom: 10px;"><strong>Props</strong> — Props are short for "properties." These are read-only data passed from a parent component to a child component.</li>
      </ol>

      <h3 style="font-size: 1.75rem; font-weight: bold; margin-top: 20px; margin-bottom: 15px;">A Simple React Example</h3>
      <pre style="background-color: #f5f5f5; padding: 15px; border-radius: 8px; font-family: 'Courier New', Courier, monospace; overflow: auto;">
        <code>
          import React, { useState } from 'react';

          const Counter = () => {
            const [count, setCount] = useState(0);

            const increment = () => setCount(count + 1);

            return (
              <div>
                <h1>Counter: {count}</h1>
                <button onClick={increment}>Increment</button>
              </div>
            );
          };

          export default Counter;
        </code>
      </pre>

      <p style="margin-top: 10px; margin-bottom: 20px;">This is a simple <code>Counter</code> component that uses React’s <code>useState</code> hook to manage its internal state. Every time the button is clicked, the state (<code>count</code>) increments, and the component re-renders.</p>

      <div style="margin-top: 40px;"></div>
    `,
  },
  {
    id: 2,
    slug: "css-flexbox",
    date: "30, Oct, 2024",
    title: "Understanding CSS Flexbox for Responsive Layouts",
    excerpt:
      "Master the power of CSS Flexbox to create responsive and flexible layouts. This guide walks you through key properties and best practices for modern web design.",
    body: `
      <h2 style="font-size: 2rem; font-weight: bold; margin-top: 20px; margin-bottom: 15px;">What is CSS Flexbox?</h2>
      <p style="margin-top: 10px; margin-bottom: 20px;">CSS Flexbox is a layout module that allows you to design complex layouts using simple, flexible boxes. It helps in distributing space dynamically across elements in a container.</p>

      <h3 style="font-size: 1.75rem; font-weight: bold; margin-top: 20px; margin-bottom: 15px;">Key Flexbox Properties</h3>
      <ul style="margin-top: 10px; margin-bottom: 20px;">
        <li style="margin-bottom: 10px;"><strong><code>display: flex;</code></strong> — This makes the container a flex container.</li>
        <li style="margin-bottom: 10px;"><strong><code>flex-direction</code></strong> — Defines the direction of the flex items.
          <ul>
            <li><code>row</code> (default) — Items align horizontally.</li>
            <li><code>column</code> — Items align vertically.</li>
          </ul>
        </li>
        <li style="margin-bottom: 10px;"><strong><code>justify-content</code></strong> — Aligns items along the main axis (horizontal by default).
          <ul>
            <li><code>flex-start</code>, <code>center</code>, <code>space-between</code>, <code>space-around</code>, <code>space-evenly</code></li>
          </ul>
        </li>
        <li style="margin-bottom: 10px;"><strong><code>align-items</code></strong> — Aligns items along the cross axis (vertical).
          <ul>
            <li><code>stretch</code>, <code>flex-start</code>, <code>center</code>, <code>flex-end</code></li>
          </ul>
        </li>
      </ul>

      <h3 style="font-size: 1.75rem; font-weight: bold; margin-top: 20px; margin-bottom: 15px;">Example of Flexbox Layout</h3>
      <pre style="background-color: #f5f5f5; padding: 15px; border-radius: 8px; font-family: 'Courier New', Courier, monospace; overflow: auto;">
        <code>
          .container {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            height: 100vh;
          }

          .item {
            width: 30%;
            height: 100px;
            background-color: lightblue;
            text-align: center;
            line-height: 100px;
          }
        </code>
      </pre>

      <pre style="background-color: #f5f5f5; padding: 15px; border-radius: 8px; font-family: 'Courier New', Courier, monospace; overflow: auto;">
        <code>
    &lt;div class="container"&gt;
      &lt;div class="item"&gt;Item 1&lt;/div&gt;
      &lt;div class="item"&gt;Item 2&lt;/div&gt;
      &lt;div class="item"&gt;Item 3&lt;/div&gt;
    &lt;/div&gt;
  </code>

      </pre>

      <p style="margin-top: 10px; margin-bottom: 20px;">This example creates a simple flex container with three items that are evenly spaced and aligned.</p>

      <div style="margin-top: 40px;"></div>
    `,
  },
  {
    id: 3,
    slug: "basics-about-github",
    date: "10, Sep, 2024",
    title: "A Guide to Version Control with Git and GitHub",
    excerpt:
      "Learn the basics of version control using Git and GitHub. Understand how to manage your codebase, collaborate with teams, and keep track of project changes effectively.",
    body: `
      <h2 style="font-size: 2rem; font-weight: bold; margin-top: 20px; margin-bottom: 15px;">What is Version Control?</h2>
      <p style="margin-top: 10px; margin-bottom: 20px;">Version control allows developers to track and manage changes to their codebase over time. Git is a distributed version control system that enables multiple developers to work on the same project simultaneously.</p>

      <h3 style="font-size: 1.75rem; font-weight: bold; margin-top: 20px; margin-bottom: 15px;">Git Basics</h3>
      <ol style="margin-top: 10px; margin-bottom: 20px;">
        <li style="margin-bottom: 10px;"><strong><code>git init</code></strong> — Initializes a new Git repository in the current directory.</li>
        <li style="margin-bottom: 10px;"><strong><code>git clone</code></strong> — Clones an existing repository from GitHub to your local machine.</li>
        <li style="margin-bottom: 10px;"><strong><code>git status</code></strong> — Shows the current status of your working directory.</li>
        <li style="margin-bottom: 10px;"><strong><code>git add</code></strong> — Stages files for commit.</li>
        <li style="margin-bottom: 10px;"><strong><code>git commit</code></strong> — Commits your staged changes.</li>
        <li style="margin-bottom: 10px;"><strong><code>git push</code></strong> — Pushes your local changes to the remote repository.</li>
      </ol>

      <h3 style="font-size: 1.75rem; font-weight: bold; margin-top: 20px; margin-bottom: 15px;">Example Git Workflow</h3>
      <pre style="background-color: #f5f5f5; padding: 15px; border-radius: 8px; font-family: 'Courier New', Courier, monospace; overflow: auto;">
        <code>
          git init
          git add .
          git commit -m "Initial commit"
          git push origin main
        </code>
      </pre>

      <p style="margin-top: 10px; margin-bottom: 20px;">These commands will initialize your Git repository, add your changes, commit them with a message, and then push them to your GitHub repository.</p>

      <div style="margin-top: 40px;"></div>
    `,
  },
];

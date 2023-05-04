import Footer from "../Footer/Footer";
import NavigationBar from "../NavigationBar/NavigationBar";
// import React from "react";
// import ReactPDF from "@react-pdf/renderer";
// const ref = React.createRef();
const Blog = () => {
  return (
    <div className="container mx-auto px-4 bg-slate-100">
      <NavigationBar></NavigationBar>
      <div>
        {/* <div>
          <ReactPDF targetRef={ref} filename="div-blue.pdf">
            {({ toPdf }) => <button onClick={toPdf}>Generate pdf</button>}
          </ReactPDF>
        </div> */}
        <div className="flex justify-between items-center my-4">
          <h1 className="text-3xl font-semibold">Some Question and Answer</h1>
          <button className="btn">Download PDF</button>
        </div>
        <div className="pb-8">
          <div>
            <h1 className=" text-2xl font-bold my-4">
              Q-1: What is the differences between uncontrolled and controlled
              components?
            </h1>
            <p>
              <span className=" text-xl font-bold underline me-2">Ans:</span>
              <br />
              <span>
                Uncontrolled Components:
                <br /> Uncontrolled Components are the components that are not
                controlled by the React state and are handled by the DOM
                (Document Object Model). So in order to access any value that
                has been entered we take the help of refs.
                <br />
                For instance, if we want to add a file as an input, this cannot
                be controlled as this depends on the browser so this is an
                example of an uncontrolled input.
              </span>
              <br />
              <br />
              <span>
                Controlled Components: <br /> In React, Controlled Components
                are those in which form’s data is handled by the component’s
                state. It takes its current value through props and makes
                changes through callbacks like onClick, onChange, etc. A parent
                component manages its own state and passes the new values as
                props to the controlled component.
              </span>
              <div className="overflow-x-auto my-4">
                <table className="table w-full">
                  {/* head*/}
                  <thead>
                    <tr className="active text-center">
                      <th>Controlled Component</th>
                      <th>Uncontrolled Component</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <td>
                        The component is under control of the component’s state.
                      </td>
                      <td>
                        Are Uncontrolled because during the life cycle methods
                        the data may loss
                      </td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                      <td>Internal state is not maintained</td>
                      <td>Internal state is maintained</td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                      <td>Internal state is maintained</td>
                      <td>We access the values using refs</td>
                    </tr>
                    {/* row 4 */}
                    <tr>
                      <td>Does not maintain its internal state.</td>
                      <td>Maintains its internal state.</td>
                    </tr>
                    {/* row 5 */}
                    <tr>
                      <td>Controlled by the parent component.</td>
                      <td>Controlled by the DOM itself.</td>
                    </tr>
                    {/* row 6 */}
                    <tr>
                      <td>Have better control on the form data and values</td>
                      <td>
                        Has very limited control over form values and data
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </p>
          </div>
          <div>
            <h1 className=" text-2xl font-bold my-4">
              Q-2: How to validate React props using PropTypes?
            </h1>
            <p>
              <span className=" text-xl font-bold underline me-2">Ans:</span>
              <br />
              Props and PropTypes are important mechanisms for passing read-only
              attributes between React components. <br />
              We can use React props, short for properties, to send data from
              one component to another. If a component receives the wrong type
              of props, it can cause bugs and unexpected errors in your app.{" "}
              <br />
              Since JavaScript doesn’t have a built-in type checking solution,
              many developers use extensions like TypeScript and Flow. However,
              React has an internal mechanism for props validation called
              PropTypes. <br />
              <br />
              Below are the validators for the basic data types: <br />
              <br />
              PropTypes.any: The prop can be of any data type <br />
              PropTypes.bool: The prop should be a Boolean <br />
              PropTypes.number: The prop should be a number <br />
              PropTypes.string: The prop should be a string <br />
              PropTypes.func: The prop should be a function <br />
              PropTypes.array: The prop should be an array <br />
              PropTypes.object: The prop should be an object <br />
              PropTypes.symbol: The prop should be a symbol <br />
              <br />
              <br />
              We can also create custom validation by using this.
            </p>
          </div>
          <div>
            <h1 className=" text-2xl font-bold my-4">
              Q-3: What is the differences between nodejs and express js?
            </h1>
            <p>
              <span className=" text-xl font-bold underline me-2">Ans:</span>
              <br />
              Node.js: <br />
              Node.js is an open source and cross-platform runtime environment
              for executing JavaScript code outside of a browser. You need to
              remember that NodeJS is not a framework and it’s not a programming
              language. Most of the people are confused and understand it’s a
              framework or a programming language. We often use Node.js for
              building back-end services like APIs like Web App or Mobile App.
              It’s used in production by large companies such as Paypal, Uber,
              Netflix, Walmart and so on. <br />
              <br />
              Express.js: <br />
              Express is a small framework that sits on top of Node.js’s web
              server functionality to simplify its APIs and add helpful new
              features. It makes it easier to organize your application’s
              functionality with middle ware and routing. It adds helpful
              utilities to Node.js’s HTTP objects. It facilitates the rendering
              of dynamic HTTP objects.
              <br />
              <br />
              Difference between Node.js and Express.js: <br />
              1) Node.js is a platform for building the i/o applications which
              are server-side event-driven and made using JavaScript. <br />
              2) Express.js is a framework based on Node.js which is used for
              building web-application using approaches and principles of
              Node.js event-driven architecture.
            </p>
          </div>
          <div>
            <h1 className=" text-2xl font-bold my-4">
              Q-4: What is a custom hook, and why will we create a custom hook?
            </h1>
            <p>
              <span className=" text-xl font-bold underline me-2">Ans:</span>
              <br />
              Custom React JS hooks are reusable functions that a React JS
              software developer can use to add special and unique functionality
              to the React applications. Usually, if there is a requirement to
              add a feature, one can install a third-party library and solve the
              problem. But what if there is no such library with hooks that can
              be used? This problem is solved by using custom React JS hooks.{" "}
              <br />
              Why we create custom hook: <br />
              Custom React JS hooks can help developers save time, are reliable,
              reusable, and make the code clean. Creating custom React JS hooks
              is relatively easy, and you can search for many open sources where
              you can get some custom hooks from the library already created by
              developers.
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Blog;

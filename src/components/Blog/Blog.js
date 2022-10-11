import React from 'react';

const Blog = () => {
    return (
        <div>
            <section className="bg-gray-100 mt-8 p-8 ">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <h2 className="mb-12 text-emerald-700 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                    <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline text-3xl sm:text-2xl font-semibold">What is the purpose of React Router?</summary>
                            <div className="px-4 pb-4 text-justify">
                                <p>Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications.React Router plays an important role to display multiple views in a single page application. Without React Router, it is not possible to display multiple views in React applications. Most of the social media websites like Facebook, Instagram uses React Router for rendering multiple views.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline text-3xl sm:text-2xl font-semibold">How does Context API works?</summary>
                            <div className="px-4 pb-4">
                                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline text-3xl sm:text-2xl font-semibold">Write something about UseRef Hook.</summary>
                            <div className="px-4 pb-4 space-y-2">
                                <p>The useRef Hook is a function that returns a mutable ref object whose .current property is initialized with the passed argument initialValue. The returned object will persist for the full lifetime of the component. The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause re-render when updated. It can be used to access a DOM element directly.</p>
                            </div>
                        </details>
                    </div>
                </div >
            </section >
        </div >
    );
};

export default Blog;
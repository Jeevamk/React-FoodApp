# FOOD APP 🍟
-functional component 

# props
-properties
-Argument to the function

# food app
/**
 * Header
 * -Logo
 * -Nav Items
 *
 * Body
 * -Search
 * -Restaurant Container
 *  -Restaurant Card
 *     -image
 *     -Name , star rating , cuisine,delivery time
 *
 * Footer
 * -Copyright
 * -Links
 * -Address
 * -Contact
 */


# Two types of export/import
-default export--export one file at a time
--export default component;
--import component from "path"

-named export--export more than one file at a time
--export const compoenent;
--import {component} from "path";

# React Hooks
(Normal Js utility functions)
-useState()
-useEffect()

# Reconcilation algorithms
-Virtual DOM:It is a representation of actual DOM

# shimmer
-show a loading state to our app until the API is getting.

# re-render
whenever state variables update, react triggers reconciliation (re-render the component)

# useEffect()
-2 Arguments:
-- callback function
--dependencies
*if no dependencies - useEffect will called evey rendering
*if empty dependencies - useEffect will calleds just once.initial rendering
*if we put something in dependencies array - it will called evey time when the statevariable is updated.

# outlet
-The React Router <Outlet/> component (from react-router-dom ) is used within the parent route element to indicate where a child route element should be rendered. 

# 2 types of routing
-client side routing
-server side routing

# life cycle
-parent constructor
-parent render
-child constructor
-child render
-child componentDidMount
-parent componentDidMount

# life cycle with 2 child routes
-parent constructor
-parent render
-first child constructor
-first child render
-second child constructor
-second child render
-first child componentDidMount
-second child componentDidMount
-parent componentDidMount

# custom hooks
-single responsibility principle
-the code can resuable,maintanable and testable 

# Bundling
-Bundling is the process of following imported files and merging them into a single file

# code splitting/chunking
-create multiple bundles that can be dynamically loaded at runtime.

# Lazy 
-Lazy is an function from react by named exporting
-Lazy takes a callback function
-In this callback function return a funcion import with path of component as argument
  -----------------------------------------------------------------------
  eg:- const Grocery = lazy(()=> import ('../components/Grocery'))
  -----------------------------------------------------------------------
-Regularly in our app all the scripts are bundled in a single bundle 
-In case of large applications there are somany scripts are included so that file need big storage space and take too time to load
-That time this lazy loading is make small multiple bundles for that 
-when we render that component that time only the lazy script work

# suspense
The lazy component should then be rendered inside a Suspense component, which allows us to show some fallback content (such as a loading indicator) while we’re waiting for the lazy component to load.


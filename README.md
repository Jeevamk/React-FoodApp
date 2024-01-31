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

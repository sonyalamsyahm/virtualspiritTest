## virtualspiritTest

1. Why did you choose React-Native?
answer :
Because React-native is a framework which is can run both on android and ios, have big community, and was build by facebook team. It's also used by big company as facebook, skype, etc

2. From 1 - 10 how's your confident about your react-native development?
answer :
7.5

3. How many lifecycles did you know in react-native? please explain!
answer :
Grup :
   - Mounting
    -Constructor() : this method is running first before all method 
		- render() : this method will running code in class component and running after constructor
		- ComponentDidMount() : this method will be running after render, and this method usually used for fetch data from API
  - Updating
		- ComponentDidUpdate() : This method will be run if state or props change
		- ShouldComponentUpdate() : The task is to determine whether the component will be rendered again or not. This method will return a true & false boolean value, if true then the component will be rendered again.
  - Unmounting
		- ComponentWillUnMount() : In this phase there is only one method that will be executed, namely the componentWillUnmount, which is run before a component is removed from the DOM



4. What is different between Component compare to PureComponent And ScrollView compare to Flatlist?
answer : 
  - (Component vs pureComponent) No specific difference between Component and pureComponent, but pureComponent indirectly runs the shouldComponentUpdate function and return false. so class component with pureComponent will not render again if State or Props change
  - ScrollView will load items immediately after component loading, and that data will mount into RAM, so if we use big data to scrollView, it will make our application have low perfomance. but flatlist will mount 10 items to screen, so if user scroll view, so other items will mount. that is the advantage of using flatlist, so we can use big data to it.

5. Do you know what is a functional component and class component? please explain!
answer:
	- functional component are basic javascript functions. These are typically arrow functions but can also be created with the regular function keyword. with functional component, we cannot use state inside or Stateless, but can use props.
   	in functional component also cannot use react lifecycle such as componentDidMount.
   	- Class components make use of ES6 class and extend the Component class in React. we can implement state and lifecycle such as constructor or componentDidMount. and also need render() method to run code into screen.


6. Do you know redux? please explain!
answer: Redux is library from javascript for managing application state. so we can store state into a global state. the advantage of using redux is we can make state globally and can use it on any screen as we want


7. Is there any framework/library/package that you usually used in your project? please list!
answer: 
	a) react-native-elements
	b) react-navigations
	c) react-native-vector-icons
	d) native-base
	e) react-redux (redux-thunk as middleware)
	f) axios
	g) react-native-modal
	h) react-native-indicators
	i) @react-native-community/async-storage

8. Do you know "Ignite boilerplate"? did you use that?
answer: Yes, ignite boilerplat is kit for RN including redux, react-navigation, etc. but i never use it




#### Bonus

1. what is different between “if (variable == 1)” and “if(variable === 1)” ?
answer: 
if (==) does not see the data type of the state being compared, while (===) sees the data type being compared. for example if (1 == '1') it returns true, whereas if using if (1 === "1") returns false


2. what is different between common function  and arrow function?
  a. common function:
  functionName() {
    // write some code here
  }

  b. arrow function:
  functionName = () => {
    // write some code here
  }
answer:
globally there is no different. But we cannot create constructor function using arrow function. It's also no 'this' method in arrow function
  
  
  
3. what is different between:
  a. let array = oldArray
  b. let array = […oldArray]
answer: 
there is no difference. a) is copying oldArray into array. but b) is copying value of oldArray into new array using []. it very usefully when using spread operator as parameters in function
  
4. create a function that simulates API request using your own approach!
answer:
Axios.get(`end point here`).then(data => res.data).catch(error => error) //promise-base

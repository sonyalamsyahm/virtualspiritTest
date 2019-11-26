# virtualspiritTest

### 1. Why did you choose React-Native?
### answer : Because React-native is a framework which is can run both on android and ios, have big community, and was build by facebook team. It's also used by big company as facebook, skype, etc

### 2. From 1 - 10 how's your confident about your react-native development?
### answer : 7.5


### 3. How many lifecycles did you know in react-native? please explain!
### answer :
### Grup :
  - Mounting
    -Constructor() : this method is running first before all method 
		- render() : this method will running code in class component and running after constructor
		- ComponentDidMount() : this method will be running after render, and this method usually used for fetch data from API
  - Updating
		- ComponentDidUpdate() : This method will be run if state or props change
		- ShouldComponentUpdate() : The task is to determine whether the component will be rendered again or not. This method will return a true & false boolean value, if true then the component will be rendered again.
  - Unmounting
		- ComponentWillUnMount() : In this phase there is only one method that will be executed, namely the componentWillUnmount, which is run before a component is removed from the DOM



### 4. What is different between Component compare to PureComponent And ScrollView compare to Flatlist?
### answer : 
  - (Component vs pureComponent) No specific difference between Component and pureComponent, but pureComponent indirectly runs the shouldComponentUpdate function and return false. so class component with pureComponent will not render again if State or Props change
  - ScrollView will load items immediately after component loading, and that data will mount into RAM, so if we use big data to scrollView, it will make our application have low perfomance. but flatlist will mount 10 items to screen, so if user scroll view, so other items will mount. that is the advantage of using flatlist, so we can use big data to it.

5. Do you know what is a functional component and class component? please explain!
6. Do you know redux? please explain!
7. Is there any framework/library/package that you usually used in your project? please list!
8. Do you know "Ignite boilerplate"? did you use that?

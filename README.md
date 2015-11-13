# Handy Chrome Console Commands and Chrome//

### Console Commands

Chrome has some useful commands which can be used  directly  from a  js file.

* Assert
* count
* Error
* Group
* Time
* Trace
* Table

For instance:

```javascript

// group
var var1={a:1,b:2};
var var2="Hello";
console.clear();
console.group("Information of the method");
console.group("This");
console.info(this);
console.groupEnd();
console.info(var1);
console.info(var2);
console.groupEnd();
//time 
console.clear();
console.time("Test for");
for(var cont=0;cont<700;cont++){
	console.info(cont);
}
console.timeEnd("Test for");

```

### Chrome//

Other features of chrome which are not available in the menu  can be  useful as well.

* chrome://flags
* chrome://dns
* chrome://memory
* chrome://net-internals
* chrome://quota-internals
* chrome://about



### Links:

 * [Using the Console](https://developer.chrome.com/devtools/docs/console)
 * [Command Line API](https://developer.chrome.com/devtools/docs/commandline-api)
 * [chrome:// Commands](http://www.thegeekstuff.com/2011/10/google-chrome-commands/)
 * [devtools-cheatsheet](http://anti-code.com/devtools-cheatsheet/)

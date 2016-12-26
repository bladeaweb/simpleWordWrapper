# simpleWordWrapper by Alexander Sharkov
v.1.0

### What is it?
>It's a little jQuery module developed to help for website developers, when 
they need to wrap each word or divided the words to some groups. For example 
in menu, when you need divided link's text in two group but you couldn't  
do this in back-end of your CMS.

### 1.Getting Started
* Download source or clone repository
###### If you use Bower
```
    bower install simpleWordWrapper -save
```
###### If you use NPM
```
    npm install simpleWordWrapper
```
* Load jQuery(1.7+) 
* Include source files simpleWordWrapper.min.js or simpleWordWrapper.js 
of simpleWordWrapper into your project
* And read this manual to start work the script in your project.

###### Html before close body
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="your path/simpleWordWrapper.min.js"></script>
```
### 2.Call the plugin
Now call the simpleWordWrapper initialize function for your selector 
and after that you could see that text in your selector wrapped.

###### JavaScript default call
```javascript
$("#some-id").simpleWordWrapper();
```
###### JavaScript call with options (in this case I show you what is default values for options)
```javascript
$("#some-id").simpleWordWrapper({
    separator: " ",
    parts: 2,
    wrapperTag: "span",
    wrapperClass: "simpleWordWrapper",
    eachWord: false
});
```
### 3.Options list
Option | Type | Default | Description |
------ | ---- | ------- | ----------- |
separator | string | " " | That option give you chance to select, what a symbol will be a separator to groups. The default value is space **(" ")**. |
parts | number | 2 | That option need for select on how many groups you need to divide the selected text. |
wrapperTag | string | "span" | In this option you can determine tag name for wrapper. |
wrapperClass | string | "simpleWordWrapper" | In this option you can determine class name for wrapper. |
eachWord | boolean | false | If you change value this option from **false** to **true** you disabled option ***parts***, and each words or group of words, divided ***separator***, will wrap in a ***wrapperTag*** with a ***wrapperClass***. | 
# FAQ-card


#### What i need to know before starting...

*****************RESPONSIVE IMAGES*************************************

<picture> element to define different pictures for different window sizes, EXAMPLE:

```html
	 <picture>
  		<source srcset="img_smallflower.jpg" media="(max-width: 600px)">
  		<source srcset="img_flowers.jpg" media="(max-width: 1500px)">
  		<source srcset="flowers.jpg">
  		<img src="img_smallflower.jpg" alt="Flowers">
	</picture> 

```

**************************************************************************

*********************RESPONSIVE TEXT SIZES*********************************

text sizes can be set with `vw` which means viewport width.
1vw === 1% f the viewport width

**************************************************************************

*********************MEDIA QUERIES***************************************

The @media rule is used in media queries to apply different styles for different media types/devices.

```CSS

@media not|only mediatype and (mediafeature and|or|not mediafeature) {
  CSS-Code;
}

```

**************************************************************************


******************GRID VIEW***********************************************

many web page use responsive grid views, which means the page is devided into columns. grid view makes inserting elements very easy in fact a webpage with frid view consists of  12 columns and total width of 
100% in order to make a page with responsive grid view you have to set `box-sizing` of all elements in the page to `border-box` to make padding and border include in total width and height,

each column in grid view must have 8.33% width(of the viewport) and must have class `col-`. EXAMPLE BELOW:

```CSS
	.col-1 {width: 8.33%;}
	.col-2 {width: 16.66%;}
	.col-3 {width: 25%;}
	.col-4 {width: 33.33%;}
	.col-5 {width: 41.66%;}
	.col-6 {width: 50%;}
	.col-7 {width: 58.33%;}
	.col-8 {width: 66.66%;}
	.col-9 {width: 75%;}
	.col-10 {width: 83.33%;}
	.col-11 {width: 91.66%;}
	.col-12 {width: 100%;}
```

all these columns must float to the left so :

```CSS

	[class*="col-"] {
  	float: left;
  	padding: 15px;
  	border: 1px solid red;
	}

```

each row should be wrapped in a `<div class="row></div>` and the number of columns in a row should always add up to 12.

then we should clear the flow after rows.EXAMPLE:

```CSS	

.row::after {
  content: "";
  clear: both;
  display: table;
}

```

Given that we have this ability to position create lines from named areas and areas from named lines it is worth taking a little bit of time to plan your naming strategy when 
starting out creating your grid layout.  By selecting names that will make sense to you and your team you will help everyone to use the layouts you create more easily.


WAHT I LEARNT DURING THIS PROJECT  *********************

it's better to put <picture> and <img> tags inside a <div> if i want to use grid layout.

using 'object-fit: cover' i can crop exessive parts of an image and fit it to it's container.

in order for my images to fit into thier grid areas and crop exessive parts :

````CSS

.bg-pattern img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
}

```` 

i can use :

```CSS 
transform: translate(x, y);
```

to move elements right, left, up and down according to their position.


i can use :

```CSS
transform: scale()
```

in order to change scale of an element.

**************************NOTES***********************************

**i could't test for both conditions in an if statement in "'javascript.js' line 6 " in one expression so instead i made two nested conditions.
if an element passes first one(meaning it is not the question) it have to pass the second one(is it an img or not ?) 


**i could create hover status using js instead i accomplished the same result using css.

**in this project i used grid layout. it was a bit difficult to get the grasp on the basics but i did it finally!!!!

**i first tried to position illustrations using a combination of grid layout( for the whole document) and fixed positionings(for illustrations) 
but i wasn't able to do that because it would be very complicated. (not in a good way!!!)
instead what i did was i positioned elements using line placements of grid layout and then positioned them using CSS `transform: translate()` and scaled them
to appropriate size using CSS 'transform: scale()'.

** if user clicks on the question itself instead of arrow it is still possible to see the asnwer and the arrow will rotate as well.

**this website is responsive for both mobile and desktop i tried to design it in a way so that if users change their viewport 
width or height still have the same experience as much as possible(i tried my best!!!!).


**************************written by AMIR2170*************************

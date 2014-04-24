
* quick intro about me
* Sketching with CSS book cover
** about the book
** doing research for this book
** what's preventing people from designing in the browser?
** biggest problem ...

* CSS sucks at layout
** pause for laughs
** seriously
** weird stuff with floats, negativemargins, inline-block.
** 10,000 different grid systems
** have you ever tried to center something vertically?
** we're a long way from spacer.gif, but far from intuitive
** I think the current paradigms limit us
** so, one of the first things I wrote about was ...

* flexbox
** we're going to do a quick overview then dive into the spec but in essence
** this is a major upgrade in how we do layout in the browser
** you will be using this a lot, if not now, very soon.

* display: flex
* display: block
* display: inline-block

* container
** main axis and cross-axis
** items flow from left to right on the main axis
** and top to bottom on the cross axis

* flex container
** (boxes move left to right, rotate cross-axis, grow, shrink, holy grail layout, re-order)

* justify-content
** flex-start
** flex-end
** center
** space-around
** space-between

* align-items
** flex-start
** flex-end
** center
** stretch
** baseline

* now we mess everything up
** probably wondering "why so complicated? Why not just "left, right, top, bottom"
** because you can rotate the axes

* flex-direction
** row (default)
** row-reverse
** column
** column-reverse
** it means that when you look at a flex container, you can't just think "left, right" etc. you have to visualize where the main axis and cross-axis are and what direction items flow and then set align-items and justify-content.

(mention cheat sheet)

* flex-wrap
** no-wrap (they squish)
** wrap (go into rows)
** wrap-reverse

*align-content
** flex-start
** flex-end
** center
** space-around
** space-between

* flex conatiner versus child elements

* flex-grow, flex-shrink, flex-basis
** gonna fly through this, just give you the idea. it's the most complicated. usually takes some fudging to get it right. 

* flex-shrink
** container squashing

* flex-basis
** auto
** show with flex: 0 0 auto and a very long piece of content in the middle
** show with flex: 1 1 auto, space evenly distributed.
** show with flex: 1 1 0, middle thing now overflows.

* sticky footer

* html
* css
* result

* holy grail
* html
* css
* result

* tips for using it today


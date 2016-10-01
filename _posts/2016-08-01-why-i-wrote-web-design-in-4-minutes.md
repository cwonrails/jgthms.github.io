---
layout: post
title: Why I wrote "Web Design in 4 minutes"
introduction: A visual feedback loop.
category: Thoughts
recommended: true
---

<figure>
  <img alt="M. C. Escher − Drawing Hands, 1948" src="/images/post/drawing-hands.jpg"><br>
  <figcaption>
    <a href="//en.wikipedia.org/wiki/File:DrawingHands.jpg" title="Fair use">M. C. Escher − Drawing Hands, 1948</a>
  </figcaption>
</figure>

For a while I had in mind a self-referential tutorial that would teach a few concepts of web design and CSS while applying those concepts upon the content that explained them in the first place.
So basically **a tutorial that is the output of the input it teaches**.

I called this tutorial [Web Design in 4 minutes](http://jgthms.com/web-design-in-4-minutes/).

<figure>
  <a href="http://jgthms.com/web-design-in-4-minutes/">
    <img alt="Web Design in 4 minutes" src="/images/post/web-design-in-4-minutes.png">
  </a>
</figure>

## Design for content

The most important idea I am trying to convey is actually one that is easy to overlook, as it's the first one I mention:

> "The purpose of design is to enhance the presentation of the content it's applied to."

In my experience, the web projects I have seen fail had a common flaw: **no content**.
Or content as an afterthought.
Or content written while the design process already started.

Why is content so important? Because the _raison d'être_ of a website is to satisfy the user:

* an editorial website needs to provide information and entertainment
* a social website needs to dispatch a user's updates to and from their network
* a corporate website needs to showcase its products and services
* a restaurant website needs to display opening hours, location, and the menu
* a web app needs to allow content CRUD

In any case, a website needs to deliver content, _no matter how it's presented_.

The _only_ thing design can do is **facilitate** the access, consumption, or interaction of that content. **Design is simply a function with content as an input.**

## The 4 minutes arbitrary limit

> "Sort of reminds me of what Bob Ross from the Joy of Painting does in a couple of strokes... :)"

[This comment](https://news.ycombinator.com/item?id=12167308) on Hacker News made me smile because inherently the purpose of my tutorial on web design mirrors Bob Ross' intent with painting: tell the reader/viewer _"It's very simple"_.

If I can show you how much you can achieve in 4 min, imagine what you could achieve in 4 hours. Or 4 days. Or 4 months.

Funnily enough, I initially had in mind a 4 min limit simply to keep it under 5. After finishing the content, I ran the whole page through [Read-o-meter](http://niram.org/read/) which announced an estimated reading time of `3min 59sec`, just shy of 800 words (which would have been the exact limit).

<figure>
  <img alt="Web Design in 3min 59sec" src="/images/post/web-design-reading-time.png"><br>
  <figcaption>Phew, that was close</figcaption>
</figure>

Ultimately, my criteria for the tutorial's success is not the amount of minutes spent but the number of CSS rules written. But for a user the key metric is reading time, not lines written.

CSS does not even scratch the surface of what computers can achieve, or the complexity of modern technologies. It's not even programming. It's just styling. But it's a first step into _instructing_ a computer to perform some tasks for you via a common _language_.

## What you can do, not necessarily what you should

By enforcing the rule to keep an arbitrary limit of 4 minutes to teach something, it's easy to misread my intent. The product of my tutorial is not a "Holy Grail" design that will work in _any_ context for _any_ content. **It's a kick starter for learning how to design a webpage**.

For example, the optimal number of characters per line is between 40 and 70.
I chose `50em`.
[I don't even recommended using `em` as a unit](/in-css-use-pixels-not-em.html). But I'd rather limit myself to a single CSS rule than spend more lines explaining the subtlety of using `px` over `em`.

I also went from `#000` to `#555`, which spawned a few critics, including [this one](https://github.com/jgthms/web-design-in-4-minutes/issues/1):

> "Sabotaging contrast like this does not help readers at all."

Did I draw thousands of people to the dark path of bad contrast and poor accessibility, and will be held accountable for flaming user feedback for every website designed in the wake of my 4 min introduction?

I picked `#555` half-randomly. I set it, thought it looked good enough, and moved on. I realized afterwards that any other value would have been less useful. I needed:

* something light enough for the change to be noticeable
* somethind dark enough for the text to remain readable

**The quick pace that the tutorial sets needs distinct enough values to convey my point.**

<figure>
  <img alt="French highway signs" src="/images/post/highway-signs.png"><br>
  <figcaption>When time is scarce, make it bold</figcaption>
</figure>

Adding all the little variations and cautions would deviate from the primary purpose of my tutorial: the succinctness of both the message _content_ and the message _delivery_.

<p>
<span class="top-highlight">It's not:<br>
"Here's your <em>end product</em> in 4 minutes."<br>
It's:<br>
"Here's <em>how much</em> of an impact you can have in 4 minutes."</span>
</p>

Every design is open to further alterations, subtle corrections, or complete rewrites, simply because design never ends.

My only hope is for any reader of my tutorial to understand how design is an **iterative** process, where small incremental changes slowly lead to a polished product, that nevertheless remains as malleable as its inception was sudden.

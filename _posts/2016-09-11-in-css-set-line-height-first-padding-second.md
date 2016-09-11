---
layout: post
title: In CSS, set line-height first, padding second
introduction: Style for one and multiple lines.
category: Code
published: true
---

While browsing Hacker News, I came across [this article](https://zapier.com/blog/productive-remote-work/) on the Zapier blog.

I couldn't help but notice a problem with the **menu**.

<figure>
  <img alt="Zapier blog menu" src="/images/zapier-blog-menu.png" height="530" width="368"><br>
  <figcaption>
    <a href="https://zapier.com/blog/productive-remote-work/" title="Zapier blog">
      Menu from the Zapier blog
    </a>
  </figcaption>
</figure>

## What's the problem?

The problem? The **"Click Dead Zone"**.

<figure>
  <img alt="Zapier blog menu" src="/images/zapier-click.gif" height="80" width="300"><br>
  <figcaption>
    The famous "Click Dead Zone"
  </figcaption>
</figure>

It's not unusual to come across this problem across the Web, so I thought I'd give a simple advice!

## Why does it happen?

It happens because the `line-height` is set to **space out** the list items, although it shouldn't be used for that purpose.

{% highlight css %}
.blog .content ol {
  font-size: 18px;
  line-height: 2em;
}
{% endhighlight %}

It's that `line-height: 2em`!  
Works well for a _single_ line, but quite unreadable (and unclickable) for _multiple_ lines.

## How do you fix that?

Glad you asked! Here's the **simple rule**:

* `line-height` should be used for **readibility**
* `padding` should be used to **space out** the list items

Let's say you want to keep each list item's **height** to `2em`.

First set the **line-height** to `1.2em` which is readable for list items.

{% highlight css %}
.blog .content ol {
  line-height: 1.2em;
}
{% endhighlight %}

This amounts to a `1.2em` **height** for a _single_ line.  
We're missing `0.8em`.

Let's split this amount equally among the **padding** to keep the content vertically centered.

{% highlight css %}
.blog .content ol li {
  padding: 0.4em;
}
{% endhighlight %}

And _voilà_ !

<figure>
  <img alt="Zapier fixed menu" src="/images/zapier-fixed-menu.png" height="471" width="330"><br>
  <figcaption>
    Same height for 1 line<br>Improved readibility for multiple lines<br>No "Click Dead Zone"
  </figcaption>
</figure>

---
layout: post
title: Firefox's wrong textarea resizing
category: Interface
---

We, as web designers, tend to dread styling textareas (I know I do). The line-height adjustments can be tricky, the font-family is never inherited, the scrollbar has to be taken into account and padding can mess things up as well. Furthermore, making a textarea graphically appealing can be challenging, considering the sometimes tricky background styling reactions. So we either go for a minimalist textarea (plain background color, no border), or venture to design a gorgeous 3D shadowed rounded gradient-colored textarea box that is meant to look desirable but not necessarily usable.

When Google Chrome came out 4 years ago, among the top-located tabs, omnibar and dazzling speed, what new feature that struck me was the default ability for a textarea to be resized at will by the user. It was a small but oh so useful little innovation that proved to be a huge improvement in user experience.

If we didn't choose to go for the simple minimalist styling, chances are any resizing of the textarea was doomed to break our design. Should we then define a <code>resize: none</code> on our textareas and risk infuriating our users? Definitely, no.

Luckily, CSS 3 support spread quite quickly and allowed us to resort to its new fancy properties and style shadows, rounded corners and gradients dynamically, without using any fixed image.

Firefox was keen enough to implement textarea resizing as well. But here's the problem: Chrome (by default) only allows users to **expand** the textarea, from whatever size the designer initially coded. On the other hand, Firefox *also* allows users to **reduce** the textarea size. As far as I know, I've never encountered a user who was eager to reduce the size of a textarea. Quite the opposite actually: designers (myself included) often implement ridiculously small textareas to fit in their layout, which brings the user to feel restricted by this decision.

One workaround is to set both <code>width</code> **and** <code>min-width</code> (as well for height) at the same value to prevent further reduction. But I wish Firefox was smart enough to include this behavior as a default.
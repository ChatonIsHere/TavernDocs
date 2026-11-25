---
title: "AnimatedValue<T>"
description: "abstract class AnimatedValue<T> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnimatedValue&lt;T&gt;

An **abstract class** in `Root.Township`, `Alta.Networking.Animation`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`INameable`](/game-api/types/alta-networking/inameable)
- **Derived types** [`AnimatedBool`](/game-api/types/alta-networking/animatedbool), [`AnimatedFloat`](/game-api/types/alta-networking/animatedfloat), [`AnimatedInt`](/game-api/types/alta-networking/animatedint), [`AnimatedLayerWeight`](/game-api/types/alta-networking/animatedlayerweight), [`AnimatedTrigger`](/game-api/types/alta-networking/animatedtrigger)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AnimatedValue(string name)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-animator" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkanimator">{"NetworkAnimator"}</Link>{" animator"}</code> |  |
| <Link id="m-index" /><code>{"private int index"}</code> |  |
| <Link id="m-name" /><code>{"private string name"}</code> |  |
| <Link id="m-value" /><code>{"protected T value"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-animator-2" /><code><Link to="/game-api/types/alta-networking/networkanimator">{"NetworkAnimator"}</Link>{" Animator { get; }"}</code> |  |
| <Link id="m-changed" /><code>{"int Changed { get; set; }"}</code> |  |
| <Link id="m-changedcounter" /><code>{"virtual int ChangedCounter { get; }"}</code> |  |
| <Link id="m-guiname" /><code>{"virtual string GUIName { get; }"}</code> |  |
| <Link id="m-index-2" /><code>{"int Index { get; }"}</code> |  |
| <Link id="m-name-2" /><code>{"string Name { get; }"}</code> |  |
| <Link id="m-value-2" /><code>{"virtual T Value { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-gui" /><code>{"virtual void GUI()"}</code> |  |
| <Link id="m-initialize" /><code>{"virtual void Initialize("}<Link to="/game-api/types/alta-networking/networkanimator">{"NetworkAnimator"}</Link>{" animator, int index)"}</code> |  |
| <Link id="m-serialize" /><code>{"virtual void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWriteFull)"}</code> |  |
| <Link id="m-serialize-2" /><code>{"protected abstract void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-update" /><code>{"protected abstract void Update()"}</code> |  |

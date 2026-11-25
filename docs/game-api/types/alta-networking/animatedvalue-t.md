---
title: "AnimatedValue<T>"
description: "Base for one synced animator parameter (bool, float, trigger) on a NetworkAnimator."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnimatedValue&lt;T&gt;

An **abstract class** in `Root.Township`, `Alta.Networking.Animation`.

Base for one synced animator parameter (bool, float, trigger) on a `NetworkAnimator`. A change is resent in the next several syncs so it gets through. Get one from the animator with `GetBool`, `GetFloat` or `GetTrigger`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`INameable`](/game-api/types/alta-networking/inameable)
- **Derived types** [`AnimatedBool`](/game-api/types/alta-networking/animatedbool), [`AnimatedFloat`](/game-api/types/alta-networking/animatedfloat), [`AnimatedInt`](/game-api/types/alta-networking/animatedint), [`AnimatedLayerWeight`](/game-api/types/alta-networking/animatedlayerweight), [`AnimatedTrigger`](/game-api/types/alta-networking/animatedtrigger)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AnimatedValue(string name)"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-value" /><code>{"protected T value"}</code> | Backing field for `Value`. |

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-animator" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkanimator">{"NetworkAnimator"}</Link>{" animator"}</code> |
| <Link id="m-index" /><code>{"private int index"}</code> |
| <Link id="m-name" /><code>{"private string name"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-animator-2" /><code><Link to="/game-api/types/alta-networking/networkanimator">{"NetworkAnimator"}</Link>{" Animator { get; }"}</code> | The network animator this value belongs to. |
| <Link id="m-changed" /><code>{"int Changed { get; set; }"}</code> | How many more syncs will include this value. Counts down to 0. |
| <Link id="m-changedcounter" /><code>{"virtual int ChangedCounter { get; }"}</code> | How many syncs a change is sent in (10 by default). |
| <Link id="m-guiname" /><code>{"virtual string GUIName { get; }"}</code> | Name and current value, for debug display. |
| <Link id="m-index-2" /><code>{"int Index { get; }"}</code> | Index of the parameter in the animator. |
| <Link id="m-name-2" /><code>{"string Name { get; }"}</code> | Animator parameter name. |
| <Link id="m-value-2" /><code>{"virtual T Value { get; set; }"}</code> | The current value. Setting a different value marks it changed and applies it. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-gui" /><code>{"virtual void GUI()"}</code> | Debug GUI hook. Does nothing by default. |
| <Link id="m-initialize" /><code>{"virtual void Initialize("}<Link to="/game-api/types/alta-networking/networkanimator">{"NetworkAnimator"}</Link>{" animator, int index)"}</code> | Links the value to its animator and index. |
| <Link id="m-serialize" /><code>{"virtual void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWriteFull)"}</code> | Writes or reads a flag and, if set (changed or full write), the value itself. |
| <Link id="m-serialize-2" /><code>{"protected abstract void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads a flag and, if set (changed or full write), the value itself. |
| <Link id="m-update" /><code>{"protected abstract void Update()"}</code> | Applies the value to the local animator. Implement in subclasses. |

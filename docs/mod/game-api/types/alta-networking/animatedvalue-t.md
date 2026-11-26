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

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** [`INameable`](/mod/game-api/types/alta-networking/inameable)
- **Derived types** [`AnimatedBool`](/mod/game-api/types/alta-networking/animatedbool), [`AnimatedFloat`](/mod/game-api/types/alta-networking/animatedfloat), [`AnimatedInt`](/mod/game-api/types/alta-networking/animatedint), [`AnimatedLayerWeight`](/mod/game-api/types/alta-networking/animatedlayerweight), [`AnimatedTrigger`](/mod/game-api/types/alta-networking/animatedtrigger)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AnimatedValue(string name)"}</code> | <span className="api-desc">Creates an `AnimatedValue` from `name`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-value" /><code>{"protected T value"}</code> | <span className="api-desc">Backing field for `Value`.</span> |

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animator" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkanimator">{"NetworkAnimator"}</Link>{" animator"}</code> | <span className="api-desc">The `NetworkAnimator` that owns this value.</span> |
| <Link id="m-index" /><code>{"private int index"}</code> | <span className="api-desc">This value's position in the animator's list of values.</span> |
| <Link id="m-name" /><code>{"private string name"}</code> | <span className="api-desc">The animator parameter name.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-animator-2" /><code><Link to="/mod/game-api/types/alta-networking/networkanimator">{"NetworkAnimator"}</Link>{" Animator { get; }"}</code> | <span className="api-desc">The network animator this value belongs to.</span> |
| <Link id="m-changed" /><code>{"int Changed { get; set; }"}</code> | <span className="api-desc">How many more syncs will include this value. Counts down to 0.</span> |
| <Link id="m-changedcounter" /><code>{"virtual int ChangedCounter { get; }"}</code> | <span className="api-desc">How many syncs a change is sent in (10 by default).</span> |
| <Link id="m-guiname" /><code>{"virtual string GUIName { get; }"}</code> | <span className="api-desc">Name and current value, for debug display.</span> |
| <Link id="m-index-2" /><code>{"int Index { get; }"}</code> | <span className="api-desc">Index of the parameter in the animator.</span> |
| <Link id="m-name-2" /><code>{"string Name { get; }"}</code> | <span className="api-desc">Animator parameter name.</span> |
| <Link id="m-value-2" /><code>{"virtual T Value { get; set; }"}</code> | <span className="api-desc">The current value. Setting a different value marks it changed and applies it.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-gui" /><code>{"virtual void GUI()"}</code> | <span className="api-desc">Debug GUI hook. Does nothing by default.</span> |
| <Link id="m-initialize" /><code>{"virtual void Initialize("}<Link to="/mod/game-api/types/alta-networking/networkanimator">{"NetworkAnimator"}</Link>{" animator, int index)"}</code> | <span className="api-desc">Links the value to its animator and index.</span> |
| <Link id="m-serialize" /><code>{"virtual void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWriteFull)"}</code> | <span className="api-desc">Writes or reads a flag and, if set (changed or full write), the value itself.</span> |
| <Link id="m-serialize-2" /><code>{"protected abstract void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes or reads a flag and, if set (changed or full write), the value itself.</span> |
| <Link id="m-update" /><code>{"protected abstract void Update()"}</code> | <span className="api-desc">Applies the value to the local animator. Implement in subclasses.</span> |

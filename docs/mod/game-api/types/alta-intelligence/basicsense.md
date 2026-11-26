---
title: "BasicSense"
description: "A creature AI sense asset whose value is read straight from the target's sense intensity array, at a slot assigned when the asset initializes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BasicSense

A **class** in `Root.Township`, `Alta.Intelligence`.

A creature AI sense asset whose value is read straight from the target's sense intensity array, at a slot assigned when the asset initializes.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`Sense`](/mod/game-api/types/alta-intelligence/sense)
- **Derived types** [`BasicSense.Create`](/mod/game-api/types/alta-intelligence/basicsense-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-intelligence/basicsense-create)
- **Documented in** [Targets and senses](/mod/game-api/creatures/targets-and-senses)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BasicSense()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-indexcount" /><code>{"const int IndexCount"}</code> | Number of sense slots (32). |

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-index" /><code>{"private int index"}</code> | Backing field for `Index`. |
| <Link id="m-senses" /><code>{"private static List<"}<Link to="/mod/game-api/types/alta-intelligence/basicsense">{"BasicSense"}</Link>{"> senses"}</code> | Static list of every registered `BasicSense`; a sense's position in it is its index. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-index-2" /><code>{"int Index { get; }"}</code> | Slot of this sense in the intensity array, assigned on `Initialize`. -1 before that. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fromindex" /><code>{"static "}<Link to="/mod/game-api/types/alta-intelligence/basicsense">{"BasicSense"}</Link>{" FromIndex(int index)"}</code> | Returns the registered sense at a slot, or null if no sense has that slot yet. |
| <Link id="m-get" /><code>{"override float Get("}<Link to="/mod/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{" requester, "}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> | Returns the target's intensity for this sense, read from `target.Senses.Intensities` at `Index`. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Registers the sense in the static list and assigns its `Index` if it doesn't have one. |

## Used in

Members of other types that take, return or hold a `BasicSense`:

[`SenseSetup.Sense`](/mod/game-api/types/alta-intelligence/sensesetup#m-sense-2), [`SenseSetup.type`](/mod/game-api/types/alta-intelligence/sensesetup#m-type).

---
title: "BasicSense"
description: "A fixed value the target gives off, from its BasicSenseSet."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BasicSense

A **class** in `Root.Township`, `Alta.Intelligence`.

A fixed value the target gives off, from its `BasicSenseSet`. Up to 32 of these.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`Sense`](/game-api/types/alta-intelligence/sense)
- **Derived types** [`BasicSense.Create`](/game-api/types/alta-intelligence/basicsense-create)
- **Nested types** [`Create`](/game-api/types/alta-intelligence/basicsense-create)
- **Documented in** [Targets and senses](/game-api/creatures/targets-and-senses)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"BasicSense()"}</code> |

## Fields

| Member |
| --- |
| <Link id="m-indexcount" /><code>{"const int IndexCount"}</code> |

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-index" /><code>{"private int index"}</code> |
| <Link id="m-senses" /><code>{"private static List<"}<Link to="/game-api/types/alta-intelligence/basicsense">{"BasicSense"}</Link>{"> senses"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-index-2" /><code>{"int Index { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-fromindex" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/basicsense">{"BasicSense"}</Link>{" FromIndex(int index)"}</code> |
| <Link id="m-get" /><code>{"override float Get("}<Link to="/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{" requester, "}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |

## Used in

Members of other types that take, return or hold a `BasicSense`:

[`SenseSetup.Sense`](/game-api/types/alta-intelligence/sensesetup#m-sense-2), [`SenseSetup.type`](/game-api/types/alta-intelligence/sensesetup#m-type).

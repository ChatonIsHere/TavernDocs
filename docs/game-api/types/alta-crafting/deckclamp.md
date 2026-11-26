---
title: "DeckClamp"
description: "Visual clamp on a chiselling deck that slides along X to the builder, the current block, or its rest position."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DeckClamp

A **class** in `Root.Township`, `Alta.Carpentry`.

Visual clamp on a chiselling deck that slides along X to the builder, the current block, or its rest position. Both sides, local only.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DeckClamp()"}</code> |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basedistance" /><code>{"private float baseDistance"}</code> | The clamp's starting local X, used as its rest position. |
| <Link id="m-baseparent" /><code>{"private Transform baseParent"}</code> | The clamp's original parent, restored when there is no block. |
| <Link id="m-blocktransform" /><code>{"private Transform blockTransform"}</code> | Transform the clamp is parented to while holding a block or builder. |
| <Link id="m-deck" /><code>{"private "}<Link to="/game-api/types/alta-crafting/chisellingdeck">{"ChisellingDeck"}</Link>{" deck"}</code> | The chiselling deck this clamp belongs to. |
| <Link id="m-distancefromblock" /><code>{"private float distanceFromBlock"}</code> | X offset from the current block when one is present. |
| <Link id="m-distancefrombuilder" /><code>{"private float distanceFromBuilder"}</code> | X offset from the builder when the dock is active. |
| <Link id="m-docker" /><code>{"private "}<Link to="/game-api/types/alta-crafting/builderdock">{"BuilderDock"}</Link>{" docker"}</code> | The builder dock whose active state is tracked. |
| <Link id="m-movementspeed" /><code>{"private float movementSpeed"}</code> | Slide speed in units per second. |

</details>

## Methods

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Remembers the rest position and parent and subscribes to the deck's block change and the dock's active change. |
| <Link id="m-movement" /><code>{"private IEnumerator Movement(float target) (iterator)"}</code> | Coroutine that moves the clamp along local X towards the target at `movementSpeed`. |
| <Link id="m-updateblock" /><code>{"private void UpdateBlock("}<Link to="/game-api/types/alta-crafting/timberblock">{"TimberBlock"}</Link>{" block)"}</code> | Deck block change handler; repositions the clamp. |
| <Link id="m-updatebuilder" /><code>{"private void UpdateBuilder(bool isActive)"}</code> | Builder dock active change handler; repositions the clamp. |
| <Link id="m-updateposition" /><code>{"private void UpdatePosition(bool isDockerActive)"}</code> | Picks the target (builder, current block or rest) and starts the move. |

</details>

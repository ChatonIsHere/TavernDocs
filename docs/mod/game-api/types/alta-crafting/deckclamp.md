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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DeckClamp()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basedistance" /><code>{"private float baseDistance"}</code> | <span className="api-desc">The clamp's starting local X, used as its rest position.</span> |
| <Link id="m-baseparent" /><code>{"private Transform baseParent"}</code> | <span className="api-desc">The clamp's original parent, restored when there is no block.</span> |
| <Link id="m-blocktransform" /><code>{"private Transform blockTransform"}</code> | <span className="api-desc">Transform the clamp is parented to while holding a block or builder.</span> |
| <Link id="m-deck" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/chisellingdeck">{"ChisellingDeck"}</Link>{" deck"}</code> | <span className="api-desc">The chiselling deck this clamp belongs to.</span> |
| <Link id="m-distancefromblock" /><code>{"private float distanceFromBlock"}</code> | <span className="api-desc">X offset from the current block when one is present.</span> |
| <Link id="m-distancefrombuilder" /><code>{"private float distanceFromBuilder"}</code> | <span className="api-desc">X offset from the builder when the dock is active.</span> |
| <Link id="m-docker" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/builderdock">{"BuilderDock"}</Link>{" docker"}</code> | <span className="api-desc">The builder dock whose active state is tracked.</span> |
| <Link id="m-movementspeed" /><code>{"private float movementSpeed"}</code> | <span className="api-desc">Slide speed in units per second.</span> |

</details>

## Methods

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Remembers the rest position and parent and subscribes to the deck's block change and the dock's active change.</span> |
| <Link id="m-movement" /><code>{"private IEnumerator Movement(float target) (iterator)"}</code> | <span className="api-desc">Coroutine that moves the clamp along local X towards the target at `movementSpeed`.</span> |
| <Link id="m-updateblock" /><code>{"private void UpdateBlock("}<Link to="/mod/game-api/types/alta-crafting/timberblock">{"TimberBlock"}</Link>{" block)"}</code> | <span className="api-desc">Deck block change handler; repositions the clamp.</span> |
| <Link id="m-updatebuilder" /><code>{"private void UpdateBuilder(bool isActive)"}</code> | <span className="api-desc">Builder dock active change handler; repositions the clamp.</span> |
| <Link id="m-updateposition" /><code>{"private void UpdatePosition(bool isDockerActive)"}</code> | <span className="api-desc">Picks the target (builder, current block or rest) and starts the move.</span> |

</details>

---
title: "CleaningHelper"
description: "When its target chunk finishes loading, turns on trigger colliders for one frame and pushes any loose, unheld pickup they touch by a fixed offset."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CleaningHelper

A **class** in `Root.Township`, the global namespace.

When its target chunk finishes loading, turns on trigger colliders for one frame and pushes any loose, unheld pickup they touch by a fixed offset. Probably clears items stuck in a spot.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`IBuildRendererBakeable`](/mod/game-api/types/assembly-other/ibuildrendererbakeable), [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CleaningHelper()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-colliders" /><code>{"private Collider[] colliders"}</code> | <span className="api-desc">Trigger colliders used for the check.</span> |
| <Link id="m-moveonfound" /><code>{"private Vector3 moveOnFound"}</code> | <span className="api-desc">World offset added to a pickup found in the triggers.</span> |
| <Link id="m-targetchunk" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" targetChunk"}</code> | <span className="api-desc">Location chunk whose full load starts the check.</span> |

</details>

## Properties

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ibuildrendererbakeable-sortingorder" /><code>{"private int IBuildRendererBakeable.SortingOrder { get; }"}</code> | <span className="api-desc">Bake order, always 0.</span> |

</details>

## Methods

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Disables the colliders and waits for the target chunk to fully load.</span> |
| <Link id="m-bake" /><code>{"private void IBuildRendererBakeable.Bake(bool isSaving)"}</code> | <span className="api-desc">Empty build bake step.</span> |
| <Link id="m-clean" /><code>{"private void IBuildRendererBakeable.Clean()"}</code> | <span className="api-desc">Empty build clean step.</span> |
| <Link id="m-enablecheck" /><code>{"private void EnableCheck("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" obj)"}</code> | <span className="api-desc">Turns the colliders on, then off again next frame.</span> |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | <span className="api-desc">Moves a touched non-kinematic pickup that nobody holds by `moveOnFound`.</span> |

</details>

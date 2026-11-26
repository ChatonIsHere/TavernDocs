---
title: "CleaningHelper"
description: "When its target chunk finishes loading, turns on trigger colliders for one frame and pushes any loose, unheld pickup they touch by a fixed offset."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CleaningHelper

A **class** in `Root.Township`, no namespace.

When its target chunk finishes loading, turns on trigger colliders for one frame and pushes any loose, unheld pickup they touch by a fixed offset. Probably clears items stuck in a spot.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`IBuildRendererBakeable`](/game-api/types/assembly-other/ibuildrendererbakeable), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CleaningHelper()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-colliders" /><code>{"private Collider[] colliders"}</code> | Trigger colliders used for the check. |
| <Link id="m-moveonfound" /><code>{"private Vector3 moveOnFound"}</code> | World offset added to a pickup found in the triggers. |
| <Link id="m-targetchunk" /><code>{"private "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" targetChunk"}</code> | Location chunk whose full load starts the check. |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ibuildrendererbakeable-sortingorder" /><code>{"private int IBuildRendererBakeable.SortingOrder { get; }"}</code> | Bake order, always 0. |

</details>

## Methods

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Disables the colliders and waits for the target chunk to fully load. |
| <Link id="m-bake" /><code>{"private void IBuildRendererBakeable.Bake(bool isSaving)"}</code> | Empty build bake step. |
| <Link id="m-clean" /><code>{"private void IBuildRendererBakeable.Clean()"}</code> | Empty build clean step. |
| <Link id="m-enablecheck" /><code>{"private void EnableCheck("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" obj)"}</code> | Turns the colliders on, then off again next frame. |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | Moves a touched non-kinematic pickup that nobody holds by `moveOnFound`. |

</details>

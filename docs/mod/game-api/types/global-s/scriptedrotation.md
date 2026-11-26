---
title: "ScriptedRotation"
description: "Animates a transform's local rotation between stored key rotations when Animate is called."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ScriptedRotation

A **class** in `Root.Township`, the global namespace.

Animates a transform's local rotation between stored key rotations when `Animate` is called. Client only; removed on headless servers.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ScriptedRotation()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animationspeed" /><code>{"private float animationSpeed"}</code> | <span className="api-desc">Unused: the animation always takes one second.</span> |
| <Link id="m-btnsavekey" /><code>{"private bool btnSaveKey"}</code> | <span className="api-desc">Inspector button that calls `SaveKey`.</span> |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | <span className="api-desc">Cached own transform.</span> |
| <Link id="m-currentkey" /><code>{"private int currentKey"}</code> | <span className="api-desc">Index of the key it's at, or turning from.</span> |
| <Link id="m-keys" /><code>{"private Quaternion[] keys"}</code> | <span className="api-desc">The stored local rotations.</span> |
| <Link id="m-progress" /><code>{"private float progress"}</code> | <span className="api-desc">Animation progress from 0 to 1.</span> |
| <Link id="m-startingkey" /><code>{"private int startingKey"}</code> | <span className="api-desc">Key it starts at.</span> |
| <Link id="m-targetkey" /><code>{"private int targetKey"}</code> | <span className="api-desc">Index of the key it's turning toward.</span> |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | <span className="api-desc">Registered update method while animating.</span> |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/mod/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> | <span className="api-desc">Shared update module for all scripted rotations.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-animate" /><code>{"void Animate(int targetKey)"}</code> | <span className="api-desc">Starts turning toward the key at the given index, unless it's already there or heading there.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Destroys itself on headless servers, otherwise snaps to the starting key.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Keeps `startingKey` inside the key list.</span> |
| <Link id="m-savekey" /><code>{"private void SaveKey()"}</code> | <span className="api-desc">Editor: adds the current local rotation to `keys` if not already in it.</span> |
| <Link id="m-updaterotation" /><code>{"private void UpdateRotation()"}</code> | <span className="api-desc">Lerps from the current to the target key over one second, then stops updating.</span> |

</details>

---
title: "ScriptedRotation"
description: "Animates a transform's local rotation between stored key rotations when Animate is called."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ScriptedRotation

A **class** in `Root.Township`, no namespace.

Animates a transform's local rotation between stored key rotations when `Animate` is called. Client only; removed on headless servers.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ScriptedRotation()"}</code> |

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animationspeed" /><code>{"private float animationSpeed"}</code> | Unused: the animation always takes one second. |
| <Link id="m-btnsavekey" /><code>{"private bool btnSaveKey"}</code> | Inspector button that calls `SaveKey`. |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | Cached own transform. |
| <Link id="m-currentkey" /><code>{"private int currentKey"}</code> | Index of the key it's at, or turning from. |
| <Link id="m-keys" /><code>{"private Quaternion[] keys"}</code> | The stored local rotations. |
| <Link id="m-progress" /><code>{"private float progress"}</code> | Animation progress from 0 to 1. |
| <Link id="m-startingkey" /><code>{"private int startingKey"}</code> | Key it starts at. |
| <Link id="m-targetkey" /><code>{"private int targetKey"}</code> | Index of the key it's turning toward. |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | Registered update method while animating. |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> | Shared update module for all scripted rotations. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-animate" /><code>{"void Animate(int targetKey)"}</code> | Starts turning toward the key at the given index, unless it's already there or heading there. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Destroys itself on headless servers, otherwise snaps to the starting key. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Keeps `startingKey` inside the key list. |
| <Link id="m-savekey" /><code>{"private void SaveKey()"}</code> | Editor: adds the current local rotation to `keys` if not already in it. |
| <Link id="m-updaterotation" /><code>{"private void UpdateRotation()"}</code> | Lerps from the current to the target key over one second, then stops updating. |

</details>

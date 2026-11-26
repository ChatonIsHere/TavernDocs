---
title: "AmbienceManager"
description: "Singleton holding the Wwise RTPC used for ambience volume."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AmbienceManager

A **class** in `Root.Township`, the global namespace.

Singleton holding the Wwise RTPC used for ambience volume. Get it with `SingletonBehaviour<AmbienceManager>.Instance`; `AmbienceAudio` reads it.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`SingletonBehaviour<AmbienceManager>`](/mod/game-api/types/assembly-other/singletonbehaviour-t)
- **Derived types** [`AmbienceManager`](/mod/game-api/types/global-a-b/ambiencemanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AmbienceManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-volumertpc" /><code>{"private RTPC volumeRTPC"}</code> | <span className="api-desc">Backing field for `VolumeRTPC`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-volumertpc-2" /><code>{"RTPC VolumeRTPC { get; }"}</code> | <span className="api-desc">The ambience volume RTPC that `AmbienceAudio` prepares and sets.</span> |

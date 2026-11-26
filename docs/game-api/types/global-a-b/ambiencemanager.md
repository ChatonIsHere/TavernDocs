---
title: "AmbienceManager"
description: "Singleton holding the Wwise RTPC used for ambience volume."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AmbienceManager

A **class** in `Root.Township`, no namespace.

Singleton holding the Wwise RTPC used for ambience volume. Get it with `SingletonBehaviour<AmbienceManager>.Instance`; `AmbienceAudio` reads it.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`SingletonBehaviour<AmbienceManager>`](/game-api/types/assembly-other/singletonbehaviour-t)
- **Derived types** [`AmbienceManager`](/game-api/types/global-a-b/ambiencemanager)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AmbienceManager()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-volumertpc" /><code>{"private RTPC volumeRTPC"}</code> | Backing field for `VolumeRTPC`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-volumertpc-2" /><code>{"RTPC VolumeRTPC { get; }"}</code> | The ambience volume RTPC that `AmbienceAudio` prepares and sets. |

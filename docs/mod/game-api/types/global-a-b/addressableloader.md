---
title: "AddressableLoader"
description: "Loads an Addressables prefab and instantiates it under itself, only on the chosen platforms."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AddressableLoader

A **class** in `Root.Township`, the global namespace.

Loads an Addressables prefab and instantiates it under itself, only on the chosen platforms.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AddressableLoader()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-targetaddressable" /><code>{"private AssetReference targetAddressable"}</code> | The addressable prefab to load. |
| <Link id="m-targetplatform" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" targetPlatform"}</code> | Platforms this runs on. |

</details>

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-start" /><code>{"private async void Start()"}</code> | If the current platform matches, loads the addressable and instantiates it as a child. |

</details>

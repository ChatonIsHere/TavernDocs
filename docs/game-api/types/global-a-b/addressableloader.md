---
title: "AddressableLoader"
description: "Loads an Addressables prefab and instantiates it under itself, only on the chosen platforms."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AddressableLoader

A **class** in `Root.Township`, no namespace.

Loads an Addressables prefab and instantiates it under itself, only on the chosen platforms.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AddressableLoader()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-targetaddressable" /><code>{"private AssetReference targetAddressable"}</code> | The addressable prefab to load. |
| <Link id="m-targetplatform" /><code>{"private "}<Link to="/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" targetPlatform"}</code> | Platforms this runs on. |

</details>

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-start" /><code>{"private async void Start()"}</code> | If the current platform matches, loads the addressable and instantiates it as a child. |

</details>

---
title: "OculusDestinationController"
description: "class OculusDestinationController in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OculusDestinationController

A **class** in `Root.Township`, `Alta.PlatformSpecific.Oculus`.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererBakeable`](/game-api/types/assembly-other/ibuildrendererbakeable), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"OculusDestinationController()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-currentfrienddestination" /><code>{"private "}<Link to="/game-api/types/alta-menus/chunkregion">{"ChunkRegion"}</Link>{" currentFriendDestination"}</code> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member |
| --- |
| <Link id="m-ibuildrendererbakeable-sortingorder" /><code>{"private int IBuildRendererBakeable.SortingOrder { get; }"}</code> |

</details>

## Methods

<details>
<summary>13 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-bake" /><code>{"private void IBuildRendererBakeable.Bake(bool isSaving)"}</code> |
| <Link id="m-clean" /><code>{"private void IBuildRendererBakeable.Clean()"}</code> |
| <Link id="m-hasfreeplayerslot" /><code>{"private static async Task<bool> HasFreePlayerSlot(int serverId)"}</code> |
| <Link id="m-initializedeeplinkfromsetup" /><code>{"private async void InitializeDeepLinkFromSetup()"}</code> |
| <Link id="m-initializedeeplinkinvalidteleportlocation" /><code>{"private void InitializeDeepLinkInvalidTeleportLocation()"}</code> |
| <Link id="m-islastdestination" /><code>{"private bool IsLastDestination("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> |
| <Link id="m-isvaliddestination" /><code>{"private static bool IsValidDestination("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-onplayercountchanged" /><code>{"private async void OnPlayerCountChanged("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |
| <Link id="m-setdestination" /><code>{"private void SetDestination("}<Link to="/game-api/types/alta-menus/chunkregion">{"ChunkRegion"}</Link>{" destination)"}</code> |
| <Link id="m-setup" /><code>{"private void Setup("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |
| <Link id="m-start" /><code>{"private void Start()"}</code> |
| <Link id="m-updatepresence" /><code>{"private void UpdatePresence("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> |

</details>

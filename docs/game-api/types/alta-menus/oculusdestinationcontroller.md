---
title: "OculusDestinationController"
description: "Client component that keeps Quest rich presence up to date: the region the player is in, the server deep link and whether there is a free slot."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OculusDestinationController

A **class** in `Root.Township`, `Alta.PlatformSpecific.Oculus`.

Client component that keeps Quest rich presence up to date: the region the player is in, the server deep link and whether there is a free slot. Removes itself on other platforms.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererBakeable`](/game-api/types/assembly-other/ibuildrendererbakeable), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OculusDestinationController()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentfrienddestination" /><code>{"private "}<Link to="/game-api/types/alta-menus/chunkregion">{"ChunkRegion"}</Link>{" currentFriendDestination"}</code> | The region last sent as the destination. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for this class. |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ibuildrendererbakeable-sortingorder" /><code>{"private int IBuildRendererBakeable.SortingOrder { get; }"}</code> | Bake order; always 0. |

</details>

## Methods

<details>
<summary>13 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"private void IBuildRendererBakeable.Bake(bool isSaving)"}</code> | Build bake step; does nothing. |
| <Link id="m-clean" /><code>{"private void IBuildRendererBakeable.Clean()"}</code> | Build clean step; removes the object on non-Quest builds. |
| <Link id="m-hasfreeplayerslot" /><code>{"private static async Task<bool> HasFreePlayerSlot(int serverId)"}</code> | Asks the Alta API whether the server has fewer players than its limit. |
| <Link id="m-initializedeeplinkfromsetup" /><code>{"private async void InitializeDeepLinkFromSetup()"}</code> | Sets the deep link to the joined server, marks presence joinable if there's room, and sets the current region. |
| <Link id="m-initializedeeplinkinvalidteleportlocation" /><code>{"private void InitializeDeepLinkInvalidTeleportLocation()"}</code> | Before the local player exists: clears the deep link, marks presence not joinable and sets the destination to the main menu. |
| <Link id="m-islastdestination" /><code>{"private bool IsLastDestination("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | True if the chunk's region is the one already set. |
| <Link id="m-isvaliddestination" /><code>{"private static bool IsValidDestination("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | True if the chunk exists and has a region other than `none`. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Unhooks events and clears rich presence on Quest. |
| <Link id="m-onplayercountchanged" /><code>{"private async void OnPlayerCountChanged("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | When a player joins or leaves, rechecks free slots and updates joinable presence. |
| <Link id="m-setdestination" /><code>{"private void SetDestination("}<Link to="/game-api/types/alta-menus/chunkregion">{"ChunkRegion"}</Link>{" destination)"}</code> | Sets the rich presence destination to a chunk region's name and pushes it. |
| <Link id="m-setup" /><code>{"private void Setup("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Once the local player exists, hooks chunk changes and player join and leave, then sets up the deep link. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Destroys itself off Quest; otherwise sets up now or waits for the local player. |
| <Link id="m-updatepresence" /><code>{"private void UpdatePresence("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | Sets the destination to the local player's new chunk region if it is valid and changed. |

</details>

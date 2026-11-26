---
title: "CameraFilters"
description: "Network behaviour that syncs the hand camera's chosen filter."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CameraFilters

A **class** in `Root.Township`, `Alta.ScreenshotCamera`.

Network behaviour that syncs the hand camera's chosen filter. The owner sends it when they swipe, the server relays it, and joining players get the current one.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CameraFilters()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-button" /><code>{"private "}<Link to="/game-api/types/alta-customization/filtersbutton">{"FiltersButton"}</Link>{" button"}</code> | The filters button holding the current filter. |
| <Link id="m-handcamera" /><code>{"private "}<Link to="/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" handCamera"}</code> | The hand camera. |
| <Link id="m-syncfilter" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncfilter"}</code> | The filter sync. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the `SyncFilters` sync and hooks the filter button's swipe. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends the current filter to the joining player. |
| <Link id="m-syncfilter-2" /><code>{"void SyncFilter("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Message handler: writes the button's filter, or on non-owners applies the received one; the server passes it on. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-sync" /><code>{"private void Sync()"}</code> | Sends the current filter after the local owner swipes. |

</details>

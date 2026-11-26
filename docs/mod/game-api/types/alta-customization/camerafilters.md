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

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CameraFilters()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-button" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/filtersbutton">{"FiltersButton"}</Link>{" button"}</code> | <span className="api-desc">The filters button holding the current filter.</span> |
| <Link id="m-handcamera" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" handCamera"}</code> | <span className="api-desc">The hand camera.</span> |
| <Link id="m-syncfilter" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncfilter"}</code> | <span className="api-desc">The filter sync.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the `SyncFilters` sync and hooks the filter button's swipe.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Sends the current filter to the joining player.</span> |
| <Link id="m-syncfilter-2" /><code>{"void SyncFilter("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Message handler: writes the button's filter, or on non-owners applies the received one; the server passes it on.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-sync" /><code>{"private void Sync()"}</code> | <span className="api-desc">Sends the current filter after the local owner swipes.</span> |

</details>

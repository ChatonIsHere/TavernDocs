---
title: "CameraFilters"
description: "class CameraFilters in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CameraFilters

A **class** in `Root.Township`, `Alta.ScreenshotCamera`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CameraFilters()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-button" /><code>{"private "}<Link to="/game-api/types/alta-customization/filtersbutton">{"FiltersButton"}</Link>{" button"}</code> |  |
| <Link id="m-handcamera" /><code>{"private "}<Link to="/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" handCamera"}</code> |  |
| <Link id="m-syncfilter" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncfilter"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-syncfilter-2" /><code>{"void SyncFilter("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-sync" /><code>{"private void Sync()"}</code> |  |

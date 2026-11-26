---
title: "FiltersButton"
description: "Touch screen button on the hand camera that turns filter mode on, then lets the owner swipe through the filters."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FiltersButton

A **class** in `Root.Township`, `Alta.ScreenshotCamera`.

Touch screen button on the hand camera that turns filter mode on, then lets the owner swipe through the filters. `CameraFilters` syncs the choice to other players. Client only.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** [`BasicTouchScreenButton`](/game-api/types/global-a-b/basictouchscreenbutton)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"FiltersButton()"}</code> |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activefilters" /><code>{"private List<"}<Link to="/game-api/types/alta-customization/filter">{"Filter"}</Link>{"> activeFilters"}</code> | Filters whose `IsActive` is set, in the order swipes cycle through. |
| <Link id="m-currentfilter" /><code>{"private int currentFilter"}</code> | Backing field for `CurrentFilter`. |
| <Link id="m-filters" /><code>{"private "}<Link to="/game-api/types/alta-customization/filter">{"Filter"}</Link>{"[] filters"}</code> | Every filter set on the button, active or not. |
| <Link id="m-handcamera" /><code>{"private "}<Link to="/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" handCamera"}</code> | The hand camera this button belongs to. |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> | True while filter mode is on. |
| <Link id="m-ishorizontal" /><code>{"private bool isHorizontal"}</code> | Whether swipes along x (true) or y (false) change the filter. |
| <Link id="m-targetvolume" /><code>{"private PostProcessVolume targetVolume"}</code> | Post process volume the filters change. |
| <Link id="m-touchscreen" /><code>{"private "}<Link to="/game-api/types/alta-customization/touchscreenmenu">{"TouchScreenMenu"}</Link>{" touchScreen"}</code> | Touch screen menu that reports swipes. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentfilter-2" /><code>{"int CurrentFilter { get; }"}</code> | Index into the active filters, or -1 for no filter. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-localownerswiped" /><code>{"event Action LocalOwnerSwiped"}</code> | Raised after the local owner swipes to a new filter. `CameraFilters` uses it to sync. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatefilterexternal" /><code>{"void UpdateFilterExternal(int newFilter)"}</code> | Applies a filter index received from the network. Only remote clients apply the effect; the owner and server just store the index. |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Hooks owner changes and builds the list of active filters. Does nothing on a headless server. |
| <Link id="m-internalpress" /><code>{"protected override void InternalPress()"}</code> | Toggles filter mode. Turning it off also removes the current filter. |
| <Link id="m-internalrelease" /><code>{"protected override void InternalRelease()"}</code> | Does nothing. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Empty. |
| <Link id="m-swiped" /><code>{"private void Swiped(Vector2 swipe)"}</code> | Moves to the previous or next filter (wrapping through no filter) when filter mode is on and the swipe is along the button's axis. |
| <Link id="m-terminate" /><code>{"private void Terminate("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Removes the current filter when the camera entity is destroyed. |
| <Link id="m-updatefilter" /><code>{"private void UpdateFilter(int newFilter)"}</code> | Terminates the old filter and initializes the new one. |
| <Link id="m-updateowner" /><code>{"private void UpdateOwner(bool isOwned)"}</code> | When the local player owns the camera, subscribes to swipes and entity destruction. |

</details>

## Used in

Members of other types that take, return or hold a `FiltersButton`:

[`CameraFilters.button`](/game-api/types/alta-customization/camerafilters#m-button).

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

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** [`BasicTouchScreenButton`](/mod/game-api/types/global-a-b/basictouchscreenbutton)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FiltersButton()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activefilters" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-customization/filter">{"Filter"}</Link>{"> activeFilters"}</code> | <span className="api-desc">Filters whose `IsActive` is set, in the order swipes cycle through.</span> |
| <Link id="m-currentfilter" /><code>{"private int currentFilter"}</code> | <span className="api-desc">Backing field for `CurrentFilter`.</span> |
| <Link id="m-filters" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/filter">{"Filter"}</Link>{"[] filters"}</code> | <span className="api-desc">Every filter set on the button, active or not.</span> |
| <Link id="m-handcamera" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" handCamera"}</code> | <span className="api-desc">The hand camera this button belongs to.</span> |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> | <span className="api-desc">True while filter mode is on.</span> |
| <Link id="m-ishorizontal" /><code>{"private bool isHorizontal"}</code> | <span className="api-desc">Whether swipes along x (true) or y (false) change the filter.</span> |
| <Link id="m-targetvolume" /><code>{"private PostProcessVolume targetVolume"}</code> | <span className="api-desc">Post process volume the filters change.</span> |
| <Link id="m-touchscreen" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/touchscreenmenu">{"TouchScreenMenu"}</Link>{" touchScreen"}</code> | <span className="api-desc">Touch screen menu that reports swipes.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentfilter-2" /><code>{"int CurrentFilter { get; }"}</code> | <span className="api-desc">Index into the active filters, or -1 for no filter.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-localownerswiped" /><code>{"event Action LocalOwnerSwiped"}</code> | <span className="api-desc">Raised after the local owner swipes to a new filter. `CameraFilters` uses it to sync.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatefilterexternal" /><code>{"void UpdateFilterExternal(int newFilter)"}</code> | <span className="api-desc">Applies a filter index received from the network. Only remote clients apply the effect; the owner and server just store the index.</span> |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">Hooks owner changes and builds the list of active filters. Does nothing on a headless server.</span> |
| <Link id="m-internalpress" /><code>{"protected override void InternalPress()"}</code> | <span className="api-desc">Toggles filter mode. Turning it off also removes the current filter.</span> |
| <Link id="m-internalrelease" /><code>{"protected override void InternalRelease()"}</code> | <span className="api-desc">Does nothing.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Empty.</span> |
| <Link id="m-swiped" /><code>{"private void Swiped(Vector2 swipe)"}</code> | <span className="api-desc">Moves to the previous or next filter (wrapping through no filter) when filter mode is on and the swipe is along the button's axis.</span> |
| <Link id="m-terminate" /><code>{"private void Terminate("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Removes the current filter when the camera entity is destroyed.</span> |
| <Link id="m-updatefilter" /><code>{"private void UpdateFilter(int newFilter)"}</code> | <span className="api-desc">Terminates the old filter and initializes the new one.</span> |
| <Link id="m-updateowner" /><code>{"private void UpdateOwner(bool isOwned)"}</code> | <span className="api-desc">When the local player owns the camera, subscribes to swipes and entity destruction.</span> |

</details>

## Used in

Members of other types that take, return or hold a `FiltersButton`:

<div className="api-used-in">

[`CameraFilters.button`](/mod/game-api/types/alta-customization/camerafilters#m-button).

</div>

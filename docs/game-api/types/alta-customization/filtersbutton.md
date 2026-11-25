---
title: "FiltersButton"
description: "class FiltersButton in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FiltersButton

A **class** in `Root.Township`, `Alta.ScreenshotCamera`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** [`BasicTouchScreenButton`](/game-api/types/global-a-b/basictouchscreenbutton)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FiltersButton()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-activefilters" /><code>{"private List<"}<Link to="/game-api/types/alta-customization/filter">{"Filter"}</Link>{"> activeFilters"}</code> |  |
| <Link id="m-currentfilter" /><code>{"private int currentFilter"}</code> |  |
| <Link id="m-filters" /><code>{"private "}<Link to="/game-api/types/alta-customization/filter">{"Filter"}</Link>{"[] filters"}</code> |  |
| <Link id="m-handcamera" /><code>{"private "}<Link to="/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" handCamera"}</code> |  |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> |  |
| <Link id="m-ishorizontal" /><code>{"private bool isHorizontal"}</code> |  |
| <Link id="m-targetvolume" /><code>{"private PostProcessVolume targetVolume"}</code> |  |
| <Link id="m-touchscreen" /><code>{"private "}<Link to="/game-api/types/alta-customization/touchscreenmenu">{"TouchScreenMenu"}</Link>{" touchScreen"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentfilter-2" /><code>{"int CurrentFilter { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-localownerswiped" /><code>{"event Action LocalOwnerSwiped"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatefilterexternal" /><code>{"void UpdateFilterExternal(int newFilter)"}</code> |  |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> |  |
| <Link id="m-internalpress" /><code>{"protected override void InternalPress()"}</code> |  |
| <Link id="m-internalrelease" /><code>{"protected override void InternalRelease()"}</code> |  |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |  |
| <Link id="m-swiped" /><code>{"private void Swiped(Vector2 swipe)"}</code> |  |
| <Link id="m-terminate" /><code>{"private void Terminate("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |  |
| <Link id="m-updatefilter" /><code>{"private void UpdateFilter(int newFilter)"}</code> |  |
| <Link id="m-updateowner" /><code>{"private void UpdateOwner(bool isOwned)"}</code> |  |

## Used in

Members of other types that take, return or hold a `FiltersButton`:

[`CameraFilters.button`](/game-api/types/alta-customization/camerafilters#m-button).

---
title: "Filter"
description: "A hand camera filter: a list of actions run on the camera and its post process volume, optionally only during a festivity."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Filter

A **class** in `Root.Township`, `Alta.ScreenshotCamera`.

A hand camera filter: a list of actions run on the camera and its post process volume, optionally only during a festivity.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Filter()"}</code> | <span className="api-desc">Creates a `Filter` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-actions" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/filteraction">{"FilterAction"}</Link>{"[] actions"}</code> | <span className="api-desc">The filter actions.</span> |
| <Link id="m-targetfestivity" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/festivity">{"Festivity"}</Link>{" targetFestivity"}</code> | <span className="api-desc">Festivity the filter is limited to, or none.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"bool IsActive { get; }"}</code> | <span className="api-desc">True if there is no target festivity or it is active.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"void Initialize("}<Link to="/mod/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" camera, PostProcessVolume volume)"}</code> | <span className="api-desc">Runs each action's setup on the camera and volume.</span> |
| <Link id="m-terminate" /><code>{"void Terminate("}<Link to="/mod/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" camera, PostProcessVolume volume)"}</code> | <span className="api-desc">Runs each action's teardown on the camera and volume.</span> |

## Used in

Members of other types that take, return or hold a `Filter`:

<div className="api-used-in">

[`FiltersButton.activeFilters`](/mod/game-api/types/alta-customization/filtersbutton#m-activefilters), [`FiltersButton.filters`](/mod/game-api/types/alta-customization/filtersbutton#m-filters).

</div>

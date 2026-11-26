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

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Filter()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-actions" /><code>{"private "}<Link to="/game-api/types/alta-customization/filteraction">{"FilterAction"}</Link>{"[] actions"}</code> | The filter actions. |
| <Link id="m-targetfestivity" /><code>{"private "}<Link to="/game-api/types/global-e-h/festivity">{"Festivity"}</Link>{" targetFestivity"}</code> | Festivity the filter is limited to, or none. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"bool IsActive { get; }"}</code> | True if there is no target festivity or it is active. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"void Initialize("}<Link to="/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" camera, PostProcessVolume volume)"}</code> | Runs each action's setup on the camera and volume. |
| <Link id="m-terminate" /><code>{"void Terminate("}<Link to="/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" camera, PostProcessVolume volume)"}</code> | Runs each action's teardown on the camera and volume. |

## Used in

Members of other types that take, return or hold a `Filter`:

[`FiltersButton.activeFilters`](/game-api/types/alta-customization/filtersbutton#m-activefilters), [`FiltersButton.filters`](/game-api/types/alta-customization/filtersbutton#m-filters).

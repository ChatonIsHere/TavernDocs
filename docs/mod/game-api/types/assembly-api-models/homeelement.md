---
title: "HomeElement"
description: "Web API model for one element of the game's home screen layout (GameHomeConfiguration.Elements)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HomeElement

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

Web API model for one element of the game's home screen layout (`GameHomeConfiguration.Elements`).

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HomeElement()"}</code> | <span className="api-desc">Creates a `HomeElement` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-address" /><code>{"string Address { get; set; }"}</code> | <span className="api-desc">Address the element points at, probably a URL.</span> |
| <Link id="m-component" /><code>{"string Component { get; set; }"}</code> | <span className="api-desc">Name of the UI component that should show this element.</span> |
| <Link id="m-image" /><code>{"string Image { get; set; }"}</code> | <span className="api-desc">Image shown for the element.</span> |
| <Link id="m-initial" /><code>{"int? Initial { get; set; }"}</code> | <span className="api-desc">Optional starting index or page, null when not set.</span> |
| <Link id="m-limit" /><code>{"int? Limit { get; set; }"}</code> | <span className="api-desc">Optional maximum number of items to show, null when not set.</span> |
| <Link id="m-pages" /><code><Link to="/mod/game-api/types/assembly-api-models/homeelementpage">{"HomeElementPage"}</Link>{"[] Pages { get; set; }"}</code> | <span className="api-desc">Sub-pages of the element, each with its own image, type and target.</span> |
| <Link id="m-target" /><code>{"string Target { get; set; }"}</code> | <span className="api-desc">Where the element leads when used.</span> |
| <Link id="m-type" /><code>{"string Type { get; set; }"}</code> | <span className="api-desc">Element type as a string.</span> |

## Used in

Members of other types that take, return or hold a `HomeElement`:

<div className="api-used-in">

[`GameHomeConfiguration.Elements`](/mod/game-api/types/assembly-api-models/gamehomeconfiguration#m-elements).

</div>

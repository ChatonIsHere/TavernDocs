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

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"HomeElement()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-address" /><code>{"string Address { get; set; }"}</code> | Address the element points at, probably a URL. |
| <Link id="m-component" /><code>{"string Component { get; set; }"}</code> | Name of the UI component that should show this element. |
| <Link id="m-image" /><code>{"string Image { get; set; }"}</code> | Image shown for the element. |
| <Link id="m-initial" /><code>{"int? Initial { get; set; }"}</code> | Optional starting index or page, null when not set. |
| <Link id="m-limit" /><code>{"int? Limit { get; set; }"}</code> | Optional maximum number of items to show, null when not set. |
| <Link id="m-pages" /><code><Link to="/game-api/types/assembly-api-models/homeelementpage">{"HomeElementPage"}</Link>{"[] Pages { get; set; }"}</code> | Sub-pages of the element, each with its own image, type and target. |
| <Link id="m-target" /><code>{"string Target { get; set; }"}</code> | Where the element leads when used. |
| <Link id="m-type" /><code>{"string Type { get; set; }"}</code> | Element type as a string. |

## Used in

Members of other types that take, return or hold a `HomeElement`:

[`GameHomeConfiguration.Elements`](/game-api/types/assembly-api-models/gamehomeconfiguration#m-elements).

---
title: "AutoComplete"
description: "Case-insensitive autocomplete over an IAutoCompletionSource: prefix matches first, then other matches containing the input."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AutoComplete

A **class** in `Root.Township`, `Alta.Meta.UI`.

Case-insensitive autocomplete over an `IAutoCompletionSource`: prefix matches first, then other matches containing the input.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AutoComplete("}<Link to="/mod/game-api/types/alta-menus/iautocompletionsource">{"IAutoCompletionSource"}</Link>{" autoCompletions, int maxCompletions = 4)"}</code> | <span className="api-desc">Creates an `AutoComplete` from `autoCompletions` and `maxCompletions`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-autocompletions" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/iautocompletionsource">{"IAutoCompletionSource"}</Link>{" autoCompletions"}</code> | <span className="api-desc">The completion source.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentcompletions" /><code>{"string[] CurrentCompletions { get; private set; }"}</code> | <span className="api-desc">The last completions returned.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcompletions" /><code>{"string[] GetCompletions(string input, int required = 4)"}</code> | <span className="api-desc">Returns matches for the input, or none if it's empty or already one of the current completions.</span> |
| <Link id="m-isvalidcompletion" /><code>{"bool IsValidCompletion(string completion)"}</code> | <span className="api-desc">True if the text is exactly one of the source's completions.</span> |
| <Link id="m-trysetnewcompletionsource" /><code>{"void TrySetNewCompletionSource("}<Link to="/mod/game-api/types/alta-menus/iautocompletionsource">{"IAutoCompletionSource"}</Link>{" newSource)"}</code> | <span className="api-desc">Switches to a new source and clears the current completions, if it's different.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"private string[] Filter(string input, int required)"}</code> | <span className="api-desc">Returns completions starting with the input, adding ones that contain it if there are fewer than required.</span> |
| <Link id="m-hascompletionsource" /><code>{"private bool HasCompletionSource("}<Link to="/mod/game-api/types/alta-menus/iautocompletionsource">{"IAutoCompletionSource"}</Link>{" newSource)"}</code> | <span className="api-desc">True if the given source is the current one.</span> |

</details>

## Used in

Members of other types that take, return or hold a `AutoComplete`:

<div className="api-used-in">

[`TouchScreenKeyboard.autoComplete`](/mod/game-api/types/global-t-x/touchscreenkeyboard#m-autocomplete).

</div>

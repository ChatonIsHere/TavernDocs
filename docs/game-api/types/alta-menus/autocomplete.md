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

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AutoComplete("}<Link to="/game-api/types/alta-menus/iautocompletionsource">{"IAutoCompletionSource"}</Link>{" autoCompletions, int maxCompletions = 4)"}</code> | Creates an `AutoComplete` from `autoCompletions` and `maxCompletions`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-autocompletions" /><code>{"private "}<Link to="/game-api/types/alta-menus/iautocompletionsource">{"IAutoCompletionSource"}</Link>{" autoCompletions"}</code> | The completion source. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentcompletions" /><code>{"string[] CurrentCompletions { get; private set; }"}</code> | The last completions returned. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcompletions" /><code>{"string[] GetCompletions(string input, int required = 4)"}</code> | Returns matches for the input, or none if it's empty or already one of the current completions. |
| <Link id="m-isvalidcompletion" /><code>{"bool IsValidCompletion(string completion)"}</code> | True if the text is exactly one of the source's completions. |
| <Link id="m-trysetnewcompletionsource" /><code>{"void TrySetNewCompletionSource("}<Link to="/game-api/types/alta-menus/iautocompletionsource">{"IAutoCompletionSource"}</Link>{" newSource)"}</code> | Switches to a new source and clears the current completions, if it's different. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"private string[] Filter(string input, int required)"}</code> | Returns completions starting with the input, adding ones that contain it if there are fewer than required. |
| <Link id="m-hascompletionsource" /><code>{"private bool HasCompletionSource("}<Link to="/game-api/types/alta-menus/iautocompletionsource">{"IAutoCompletionSource"}</Link>{" newSource)"}</code> | True if the given source is the current one. |

</details>

## Used in

Members of other types that take, return or hold a `AutoComplete`:

[`TouchScreenKeyboard.autoComplete`](/game-api/types/global-t-x/touchscreenkeyboard#m-autocomplete).

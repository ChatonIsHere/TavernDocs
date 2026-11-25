---
title: "AutoComplete"
description: "class AutoComplete in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AutoComplete

A **class** in `Root.Township`, `Alta.Meta.UI`.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AutoComplete("}<Link to="/game-api/types/alta-menus/iautocompletionsource">{"IAutoCompletionSource"}</Link>{" autoCompletions, int maxCompletions = 4)"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-autocompletions" /><code>{"private "}<Link to="/game-api/types/alta-menus/iautocompletionsource">{"IAutoCompletionSource"}</Link>{" autoCompletions"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-currentcompletions" /><code>{"string[] CurrentCompletions { get; private set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-getcompletions" /><code>{"string[] GetCompletions(string input, int required = 4)"}</code> |
| <Link id="m-isvalidcompletion" /><code>{"bool IsValidCompletion(string completion)"}</code> |
| <Link id="m-trysetnewcompletionsource" /><code>{"void TrySetNewCompletionSource("}<Link to="/game-api/types/alta-menus/iautocompletionsource">{"IAutoCompletionSource"}</Link>{" newSource)"}</code> |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-filter" /><code>{"private string[] Filter(string input, int required)"}</code> |
| <Link id="m-hascompletionsource" /><code>{"private bool HasCompletionSource("}<Link to="/game-api/types/alta-menus/iautocompletionsource">{"IAutoCompletionSource"}</Link>{" newSource)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `AutoComplete`:

[`TouchScreenKeyboard.autoComplete`](/game-api/types/global-t-x/touchscreenkeyboard#m-autocomplete).

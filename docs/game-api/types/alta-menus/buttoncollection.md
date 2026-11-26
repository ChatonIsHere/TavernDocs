---
title: "ButtonCollection"
description: "A group of menu buttons where one is selected at a time, like tabs."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ButtonCollection

A **class** in `Root.Township`, `Alta.Meta.UI`.

A group of menu buttons where one is selected at a time, like tabs. The selected button is disabled until another is pressed.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ButtonCollection()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-buttons" /><code>{"private "}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{"[] buttons"}</code> | The buttons in the group. |
| <Link id="m-issetup" /><code>{"private bool isSetup"}</code> | True once `Setup` has run. |
| <Link id="m-startingbuttonindex" /><code>{"private int startingButtonIndex"}</code> | Index of the button pressed on setup. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentbutton" /><code><Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{" CurrentButton { get; private set; }"}</code> | The selected button. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-currentbuttonchanged" /><code>{"event Action<"}<Link to="/game-api/types/alta-menus/buttoncollection">{"ButtonCollection"}</Link>{"> CurrentButtonChanged"}</code> | Raised when a different button is selected. |

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handlebuttonpress" /><code>{"private void HandleButtonPress("}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{" obj)"}</code> | Selects the pressed button, disables it, enables the others and raises `CurrentButtonChanged`. |
| <Link id="m-setup" /><code>{"private void Setup()"}</code> | Listens to every button and presses the starting one. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Runs `Setup` if it hasn't run yet. |

</details>

## Used in

Members of other types that take, return or hold a `ButtonCollection`:

[`CreateServerPanel.HandleRegionChanged`](/game-api/types/alta-menus/createserverpanel#m-handleregionchanged), [`CreateServerPanel.regionButtons`](/game-api/types/alta-menus/createserverpanel#m-regionbuttons), [`ServerDetailsPanel.HandleJoinTypeChanged`](/game-api/types/alta-menus/serverdetailspanel#m-handlejointypechanged), [`ServerDetailsPanel.joinButtons`](/game-api/types/alta-menus/serverdetailspanel#m-joinbuttons).

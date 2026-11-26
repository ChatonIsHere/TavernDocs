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

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ButtonCollection()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-buttons" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{"[] buttons"}</code> | <span className="api-desc">The buttons in the group.</span> |
| <Link id="m-issetup" /><code>{"private bool isSetup"}</code> | <span className="api-desc">True once `Setup` has run.</span> |
| <Link id="m-startingbuttonindex" /><code>{"private int startingButtonIndex"}</code> | <span className="api-desc">Index of the button pressed on setup.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentbutton" /><code><Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" CurrentButton { get; private set; }"}</code> | <span className="api-desc">The selected button.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-currentbuttonchanged" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-menus/buttoncollection">{"ButtonCollection"}</Link>{"> CurrentButtonChanged"}</code> | <span className="api-desc">Raised when a different button is selected.</span> |

## Methods

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handlebuttonpress" /><code>{"private void HandleButtonPress("}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" obj)"}</code> | <span className="api-desc">Selects the pressed button, disables it, enables the others and raises `CurrentButtonChanged`.</span> |
| <Link id="m-setup" /><code>{"private void Setup()"}</code> | <span className="api-desc">Listens to every button and presses the starting one.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Runs `Setup` if it hasn't run yet.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ButtonCollection`:

<div className="api-used-in">

[`CreateServerPanel.HandleRegionChanged`](/mod/game-api/types/alta-menus/createserverpanel#m-handleregionchanged), [`CreateServerPanel.regionButtons`](/mod/game-api/types/alta-menus/createserverpanel#m-regionbuttons), [`ServerDetailsPanel.HandleJoinTypeChanged`](/mod/game-api/types/alta-menus/serverdetailspanel#m-handlejointypechanged), [`ServerDetailsPanel.joinButtons`](/mod/game-api/types/alta-menus/serverdetailspanel#m-joinbuttons).

</div>

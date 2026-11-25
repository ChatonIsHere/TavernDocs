---
title: "ButtonCollection"
description: "class ButtonCollection in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ButtonCollection

A **class** in `Root.Township`, `Alta.Meta.UI`.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ButtonCollection()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-buttons" /><code>{"private "}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{"[] buttons"}</code> |
| <Link id="m-issetup" /><code>{"private bool isSetup"}</code> |
| <Link id="m-startingbuttonindex" /><code>{"private int startingButtonIndex"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-currentbutton" /><code><Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{" CurrentButton { get; private set; }"}</code> |

## Events

| Member |
| --- |
| <Link id="m-currentbuttonchanged" /><code>{"event Action<"}<Link to="/game-api/types/alta-menus/buttoncollection">{"ButtonCollection"}</Link>{"> CurrentButtonChanged"}</code> |

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-handlebuttonpress" /><code>{"private void HandleButtonPress("}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{" obj)"}</code> |
| <Link id="m-setup" /><code>{"private void Setup()"}</code> |
| <Link id="m-start" /><code>{"private void Start()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `ButtonCollection`:

[`CreateServerPanel.HandleRegionChanged`](/game-api/types/alta-menus/createserverpanel#m-handleregionchanged), [`CreateServerPanel.regionButtons`](/game-api/types/alta-menus/createserverpanel#m-regionbuttons), [`ServerDetailsPanel.HandleJoinTypeChanged`](/game-api/types/alta-menus/serverdetailspanel#m-handlejointypechanged), [`ServerDetailsPanel.joinButtons`](/game-api/types/alta-menus/serverdetailspanel#m-joinbuttons).

---
title: "AccessibilitySeatedStandingBoard"
description: "Main menu popup board with seated and standing buttons."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AccessibilitySeatedStandingBoard

A **class** in `Root.Township`, `Features.Main_Menu.Scripts`.

Main menu popup board with seated and standing buttons. In this code the buttons only report the choice to `SignupAnalyticsReporter`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`PopupBoard`](/game-api/types/global-p/popupboard)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AccessibilitySeatedStandingBoard()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-seatedbutton" /><code>{"private "}<Link to="/game-api/types/global-a-b/analyticalbutton">{"AnalyticalButton"}</Link>{" seatedButton"}</code> | The seated choice button. |
| <Link id="m-standingbutton" /><code>{"private "}<Link to="/game-api/types/global-a-b/analyticalbutton">{"AnalyticalButton"}</Link>{" standingButton"}</code> | The standing choice button. |

</details>

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the two buttons. |
| <Link id="m-seated" /><code>{"private async void Seated()"}</code> | Reports "Seated" and finishes the accessibility screen in sign-up analytics. |
| <Link id="m-standing" /><code>{"private async void Standing()"}</code> | Reports "Standing" and finishes the accessibility screen in sign-up analytics. |

</details>

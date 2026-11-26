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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`PopupBoard`](/mod/game-api/types/global-p/popupboard)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AccessibilitySeatedStandingBoard()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-seatedbutton" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/analyticalbutton">{"AnalyticalButton"}</Link>{" seatedButton"}</code> | <span className="api-desc">The seated choice button.</span> |
| <Link id="m-standingbutton" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/analyticalbutton">{"AnalyticalButton"}</Link>{" standingButton"}</code> | <span className="api-desc">The standing choice button.</span> |

</details>

## Methods

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the two buttons.</span> |
| <Link id="m-seated" /><code>{"private async void Seated()"}</code> | <span className="api-desc">Reports "Seated" and finishes the accessibility screen in sign-up analytics.</span> |
| <Link id="m-standing" /><code>{"private async void Standing()"}</code> | <span className="api-desc">Reports "Standing" and finishes the accessibility screen in sign-up analytics.</span> |

</details>

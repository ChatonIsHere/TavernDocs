---
title: "AccessibilityFeaturesChecker"
description: "Shows the accessibility popup once, if the features are off and the player hasn't been asked before."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AccessibilityFeaturesChecker

A **class** in `Root.Township`, the global namespace.

Shows the accessibility popup once, if the features are off and the player hasn't been asked before.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AccessibilityFeaturesChecker()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-accessibilitypopup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/popupboard">{"PopupBoard"}</Link>{" accessibilityPopup"}</code> | The popup board prefab. |
| <Link id="m-popupposition" /><code>{"private Transform popupPosition"}</code> | Optional place to spawn the popup. |
| <Link id="m-prefskey" /><code>{"private const string prefsKey"}</code> | Player prefs key marking that the player has been asked. |

</details>

## Methods

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-decisionmade" /><code>{"private void DecisionMade("}<Link to="/mod/game-api/types/global-i-l/ipopupboard">{"IPopupBoard"}</Link>{" board)"}</code> | Records in player prefs that the player has been asked. |
| <Link id="m-setup" /><code>{"private void Setup("}<Link to="/mod/game-api/types/global-i-l/ipopupboard">{"IPopupBoard"}</Link>{" board)"}</code> | Hooks the popup's `Closed` event. |
| <Link id="m-showpopup" /><code>{"private void ShowPopup()"}</code> | Spawns the popup at `popupPosition`, or through `PopupManager` if none is set. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Shows the popup if the features are off and the prefs key isn't set. |

</details>

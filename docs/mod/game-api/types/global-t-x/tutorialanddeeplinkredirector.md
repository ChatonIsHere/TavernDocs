---
title: "TutorialAndDeeplinkRedirector"
description: "Client: when enabled, shows the deeplink popup if the game was launched from an Oculus deeplink, otherwise the tutorial popup."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TutorialAndDeeplinkRedirector

A **class** in `Root.Township`, the global namespace.

Client: when enabled, shows the deeplink popup if the game was launched from an Oculus deeplink, otherwise the tutorial popup.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TutorialAndDeeplinkRedirector()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-deeplinkpopup" /><code>{"private GameObject deeplinkPopup"}</code> | Popup shown when launched from a deeplink. |
| <Link id="m-tutorialpopup" /><code>{"private GameObject tutorialPopup"}</code> | Popup shown on a normal launch. |

</details>

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Checks the Oculus launch type; on a deeplink logs the start analytics event and shows `deeplinkPopup`, otherwise shows `tutorialPopup`. |

</details>

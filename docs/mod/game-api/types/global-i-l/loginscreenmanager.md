---
title: "LoginScreenManager"
description: "Internal controller for the registration scene: switches off normal startup and offers starting the tutorial, skipping it, or joining a deep link server."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LoginScreenManager

A **internal class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Internal controller for the registration scene: switches off normal startup and offers starting the tutorial, skipping it, or joining a deep link server. Client.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LoginScreenManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isprocessing" /><code>{"static bool IsProcessing { get; set; }"}</code> | <span className="api-desc">Shared busy flag, also used by `LoginAndRegisterHelper`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-loaddeeplinkserver" /><code>{"void LoadDeeplinkServer()"}</code> | <span className="api-desc">Marks a first time player and joins the server from the Oculus deep link.</span> |
| <Link id="m-skiptutorial" /><code>{"void SkipTutorial()"}</code> | <span className="api-desc">Goes to the main menu and records a skipped deep link event.</span> |
| <Link id="m-starttutorial" /><code>{"void StartTutorial()"}</code> | <span className="api-desc">Goes to the tutorial.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Marks the scene as a local test and turns off the regular startup actions.</span> |
| <Link id="m-finishloginscreen" /><code>{"private async void FinishLoginScreen(bool isSkippingTutorial)"}</code> | <span className="api-desc">Loads the tutorial, or the main menu if skipped or the tutorial fails to load. Ignored while busy.</span> |

</details>

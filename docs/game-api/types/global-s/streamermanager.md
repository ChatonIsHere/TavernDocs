---
title: "StreamerManager"
description: "class StreamerManager in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StreamerManager

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"StreamerManager()"}</code> |

## Fields

| Member |
| --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/global-s/streamermanager">{"StreamerManager"}</Link>{" Instance"}</code> |

<details>
<summary>6 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-cancelcurrent" /><code>{"private CancellationTokenSource cancelCurrent"}</code> |
| <Link id="m-current" /><code>{"private Task current"}</code> |
| <Link id="m-isautosaving" /><code>{"private bool isAutoSaving"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-minutesbetweenautosaves" /><code>{"private float minutesBetweenAutoSaves"}</code> |
| <Link id="m-streamingmillisecondsallowance" /><code>{"private float streamingMillisecondsAllowance"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-autosavingbehaviours" /><code>{"static List<"}<Link to="/game-api/types/global-i-l/iautosave">{"IAutoSave"}</Link>{"> AutoSavingBehaviours { get; }"}</code> |
| <Link id="m-streamingtimeallowancemilliseconds" /><code>{"float StreamingTimeAllowanceMilliseconds { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-saveworld" /><code>{"async Task SaveWorld(bool isInstant)"}</code> |
| <Link id="m-startautosave" /><code>{"void StartAutoSave()"}</code> |

<details>
<summary>5 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-autosave" /><code>{"private async void AutoSave()"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |
| <Link id="m-saveworld-2" /><code>{"private async Task SaveWorld(bool isInstant, CancellationToken cancellationToken)"}</code> |
| <Link id="m-update" /><code>{"private void Update()"}</code> |

</details>

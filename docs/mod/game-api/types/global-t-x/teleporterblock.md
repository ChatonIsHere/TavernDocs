---
title: "TeleporterBlock"
description: "Global switch that turns off the player's teleport while any behaviour is blocking it (for example ClimberActivator)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TeleporterBlock

A **static class** in `Root.Township`, the global namespace.

Global switch that turns off the player's teleport while any behaviour is blocking it (for example `ClimberActivator`). Checked by `Teleporter`.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-blockingbehaviours" /><code>{"private static HashSet<MonoBehaviour> blockingBehaviours"}</code> | Behaviours currently blocking teleport. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isblocked" /><code>{"static bool IsBlocked { get; private set; }"}</code> | True while at least one behaviour is blocking teleport. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-startblocking" /><code>{"static void StartBlocking(MonoBehaviour blockingBehaviour)"}</code> | Adds a behaviour to the blockers and turns blocking on. |
| <Link id="m-stopblocking" /><code>{"static void StopBlocking(MonoBehaviour blockingBehaviour)"}</code> | Removes a behaviour; blocking turns off when none are left. |

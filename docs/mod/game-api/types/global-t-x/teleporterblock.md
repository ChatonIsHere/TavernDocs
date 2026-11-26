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

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-blockingbehaviours" /><code>{"private static HashSet<MonoBehaviour> blockingBehaviours"}</code> | <span className="api-desc">Behaviours currently blocking teleport.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isblocked" /><code>{"static bool IsBlocked { get; private set; }"}</code> | <span className="api-desc">True while at least one behaviour is blocking teleport.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-startblocking" /><code>{"static void StartBlocking(MonoBehaviour blockingBehaviour)"}</code> | <span className="api-desc">Adds a behaviour to the blockers and turns blocking on.</span> |
| <Link id="m-stopblocking" /><code>{"static void StopBlocking(MonoBehaviour blockingBehaviour)"}</code> | <span className="api-desc">Removes a behaviour; blocking turns off when none are left.</span> |

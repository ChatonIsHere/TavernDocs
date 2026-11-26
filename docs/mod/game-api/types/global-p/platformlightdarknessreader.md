---
title: "PlatformLightDarknessReader"
description: "Darkness reader method that checks every so often whether the local player's head is out of range of all platform lights, and requests a spawn if so."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlatformLightDarknessReader

A **class** in `Root.Township`, the global namespace.

Darkness reader method that checks every so often whether the local player's head is out of range of all platform lights, and requests a spawn if so. Client-side.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`DarknessReaderMethod`](/mod/game-api/types/global-c-d/darknessreadermethod)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlatformLightDarknessReader("}<Link to="/mod/game-api/types/global-c-d/darknessreader">{"DarknessReader"}</Link>{" reader, "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" character, Action requestSpawn)"}</code> | <span className="api-desc">Creates a `PlatformLightDarknessReader` from `reader`, `character` and `requestSpawn`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-timer" /><code>{"private float timer"}</code> | <span className="api-desc">Time left until the next darkness check.</span> |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | <span className="api-desc">The registered late update method, or null when not running.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disableinternal" /><code>{"protected override void DisableInternal()"}</code> | <span className="api-desc">Stops the update loop and unhooks the local player event.</span> |
| <Link id="m-enableinternal" /><code>{"protected override void EnableInternal()"}</code> | <span className="api-desc">Resets the timer, starts the update loop if there's a local player, and watches for the local player changing.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isindarkness" /><code>{"private bool IsInDarkness()"}</code> | <span className="api-desc">True when no relevant platform light is within range of the head (range scaled by settings, within 10 m vertically).</span> |
| <Link id="m-updateloop" /><code>{"private void UpdateLoop()"}</code> | <span className="api-desc">Counts down and, every read interval, requests a spawn if the player is in darkness.</span> |
| <Link id="m-updateplayer" /><code>{"private void UpdatePlayer("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> | <span className="api-desc">Starts or stops the update loop when the local player is set or cleared.</span> |

</details>

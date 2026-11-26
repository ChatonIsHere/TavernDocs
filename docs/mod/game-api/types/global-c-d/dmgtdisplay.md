---
title: "DmgTDisplay"
description: "Client debug text that shows total damage dealt (DamageDisplayer.TotalDamage), toggled with the FPS display action without Shift by users with debug_features."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DmgTDisplay

A **class** in `Root.Township`, the global namespace.

Client debug text that shows total damage dealt (`DamageDisplayer.TotalDamage`), toggled with the FPS display action without Shift by users with `debug_features`. It also pings the server and requests server diagnostics while shown.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DmgTDisplay()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>15 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bytespersecond" /><code>{"private float bytesPerSecond"}</code> | <span className="api-desc">Unused.</span> |
| <Link id="m-entity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | <span className="api-desc">The parent network entity.</span> |
| <Link id="m-format" /><code>{"private const string format"}</code> | <span className="api-desc">Text format for the damage line.</span> |
| <Link id="m-gameping" /><code>{"private float gamePing"}</code> | <span className="api-desc">Last game ping in seconds from `PingMessage`.</span> |
| <Link id="m-interval" /><code>{"private float interval"}</code> | <span className="api-desc">Seconds between pings.</span> |
| <Link id="m-lasthit" /><code>{"private float lastHit"}</code> | <span className="api-desc">Unused.</span> |
| <Link id="m-messagespersecond" /><code>{"private float messagesPerSecond"}</code> | <span className="api-desc">Unused.</span> |
| <Link id="m-oldfullbytes" /><code>{"private float oldFullBytes"}</code> | <span className="api-desc">Unused.</span> |
| <Link id="m-oldmessagecount" /><code>{"private float oldMessageCount"}</code> | <span className="api-desc">Unused.</span> |
| <Link id="m-oldpacketcount" /><code>{"private float oldPacketCount"}</code> | <span className="api-desc">Unused.</span> |
| <Link id="m-packetspersecond" /><code>{"private float packetsPerSecond"}</code> | <span className="api-desc">Unused.</span> |
| <Link id="m-ping" /><code>{"private float ping"}</code> | <span className="api-desc">Last measured connection ping.</span> |
| <Link id="m-playercontroller" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController"}</code> | <span className="api-desc">The player this display is on.</span> |
| <Link id="m-text" /><code>{"private Text text"}</code> | <span className="api-desc">The UI `Text` drawn to.</span> |
| <Link id="m-updatetime" /><code>{"private float updateTime"}</code> | <span className="api-desc">Time since the last ping.</span> |

</details>

## Methods

<details className="api-private">
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Gets the text, entity and player controller.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Tells the server to stop sending diagnostics.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Asks the server to send diagnostics.</span> |
| <Link id="m-ping-2" /><code>{"private void Ping()"}</code> | <span className="api-desc">Pings the first connection and stores the result.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Hooks the left controller's `DisplayFPS` action and starts hidden.</span> |
| <Link id="m-togglefpsdisplay" /><code>{"private void ToggleFPSDisplay("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | <span className="api-desc">Shows or hides the display when Shift is not held and the user has `debug_features`.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Each interval, pings and sends a ping message for the local player; every frame, updates the damage text.</span> |
| <Link id="m-updateping" /><code>{"private void UpdatePing(float ping)"}</code> | <span className="api-desc">Stores the measured connection ping.</span> |

</details>

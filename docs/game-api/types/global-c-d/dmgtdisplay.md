---
title: "DmgTDisplay"
description: "Client debug text that shows total damage dealt (DamageDisplayer.TotalDamage), toggled with the FPS display action without Shift by users with debug_features."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DmgTDisplay

A **class** in `Root.Township`, no namespace.

Client debug text that shows total damage dealt (`DamageDisplayer.TotalDamage`), toggled with the FPS display action without Shift by users with `debug_features`. It also pings the server and requests server diagnostics while shown.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `RequireComponent`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DmgTDisplay()"}</code> |

## Fields

<details>
<summary>15 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bytespersecond" /><code>{"private float bytesPerSecond"}</code> | Unused. |
| <Link id="m-entity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | The parent network entity. |
| <Link id="m-format" /><code>{"private const string format"}</code> | Text format for the damage line. |
| <Link id="m-gameping" /><code>{"private float gamePing"}</code> | Last game ping in seconds from `PingMessage`. |
| <Link id="m-interval" /><code>{"private float interval"}</code> | Seconds between pings. |
| <Link id="m-lasthit" /><code>{"private float lastHit"}</code> | Unused. |
| <Link id="m-messagespersecond" /><code>{"private float messagesPerSecond"}</code> | Unused. |
| <Link id="m-oldfullbytes" /><code>{"private float oldFullBytes"}</code> | Unused. |
| <Link id="m-oldmessagecount" /><code>{"private float oldMessageCount"}</code> | Unused. |
| <Link id="m-oldpacketcount" /><code>{"private float oldPacketCount"}</code> | Unused. |
| <Link id="m-packetspersecond" /><code>{"private float packetsPerSecond"}</code> | Unused. |
| <Link id="m-ping" /><code>{"private float ping"}</code> | Last measured connection ping. |
| <Link id="m-playercontroller" /><code>{"private "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController"}</code> | The player this display is on. |
| <Link id="m-text" /><code>{"private Text text"}</code> | The UI `Text` drawn to. |
| <Link id="m-updatetime" /><code>{"private float updateTime"}</code> | Time since the last ping. |

</details>

## Methods

<details>
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Gets the text, entity and player controller. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Tells the server to stop sending diagnostics. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Asks the server to send diagnostics. |
| <Link id="m-ping-2" /><code>{"private void Ping()"}</code> | Pings the first connection and stores the result. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Hooks the left controller's `DisplayFPS` action and starts hidden. |
| <Link id="m-togglefpsdisplay" /><code>{"private void ToggleFPSDisplay("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | Shows or hides the display when Shift is not held and the user has `debug_features`. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Each interval, pings and sends a ping message for the local player; every frame, updates the damage text. |
| <Link id="m-updateping" /><code>{"private void UpdatePing(float ping)"}</code> | Stores the measured connection ping. |

</details>

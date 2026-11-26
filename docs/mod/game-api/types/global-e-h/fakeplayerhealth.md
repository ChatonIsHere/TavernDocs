---
title: "FakePlayerHealth"
description: "A training dummy that shows the damage it takes as popups and a text list of recent hits."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FakePlayerHealth

A **class** in `Root.Township`, the global namespace.

A training dummy that shows the damage it takes as popups and a text list of recent hits. The server works out the damage and syncs the popup to clients.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`HealthObject`](/mod/game-api/types/global-e-h/healthobject)
- **Documented in** [Items, interaction and damage](/mod/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FakePlayerHealth()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-damage" /><code>{"private float damage"}</code> | Last damage value, sent with the popup. |
| <Link id="m-lastdamages" /><code>{"private Queue<float> lastDamages"}</code> | Recent damage values shown in the text. |
| <Link id="m-mindamagevalue" /><code>{"private float minDamageValue"}</code> | Damage at or below this isn't added to the text list. |
| <Link id="m-point" /><code>{"private Vector3 point"}</code> | Last hit point, sent with the popup. |
| <Link id="m-showlastxdamages" /><code>{"private int showLastXDamages"}</code> | How many recent hits to list (0 to 10). |
| <Link id="m-syncpopup" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncPopup"}</code> | Method sync that sends popups to clients. |
| <Link id="m-textcanvas" /><code>{"private Text textCanvas"}</code> | UI text that lists recent damage. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the method sync used to send damage popups. |
| <Link id="m-receivedamage" /><code>{"override void ReceiveDamage(float healthDamage, float crippleDamage, "}<Link to="/mod/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" damage = null)"}</code> | Server: for impact hits, applies the server's PvP rules to player tool hits, records the damage and sends a popup to clients. Doesn't lower any health. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: shows the text only if `showLastXDamages` is above 0. |
| <Link id="m-showpopup" /><code>{"private void ShowPopup(Vector3 position, float damage)"}</code> | Spawns a red damage popup at a position. |
| <Link id="m-syncpopup-2" /><code>{"private void SyncPopup("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Sends the hit point and damage. Client: shows the popup when received. |
| <Link id="m-updatelastdamagetext" /><code>{"private void UpdateLastDamageText()"}</code> | Trims the recent damage list to `showLastXDamages` and writes it to the text. |

</details>

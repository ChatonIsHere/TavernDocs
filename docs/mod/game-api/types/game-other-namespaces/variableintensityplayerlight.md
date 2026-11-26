---
title: "VariableIntensityPlayerLight"
description: "Light on the player that brightens with the number of orbs carried."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VariableIntensityPlayerLight

A **class** in `Root.Township`, `Features`.

Light on the player that brightens with the number of orbs carried. Reached through `PlayerController.PlayerLight`.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"VariableIntensityPlayerLight()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maxintensity" /><code>{"private float maxIntensity"}</code> | <span className="api-desc">Highest intensity allowed (default 2.5).</span> |
| <Link id="m-minintensity" /><code>{"private float minIntensity"}</code> | <span className="api-desc">Lowest intensity; at or below this the light is turned off.</span> |
| <Link id="m-platformlight" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/platformlight">{"PlatformLight"}</Link>{" platformLight"}</code> | <span className="api-desc">The `PlatformLight` being driven.</span> |
| <Link id="m-playerlightcolorwithorb" /><code>{"private Color playerLightColorWithOrb"}</code> | <span className="api-desc">Colour used while carrying orbs (default green).</span> |
| <Link id="m-playerlightintensityperorb" /><code>{"private float playerLightIntensityPerOrb"}</code> | <span className="api-desc">Intensity added per orb carried (default 0.5).</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setlightcolor" /><code>{"void SetLightColor(Color color)"}</code> | <span className="api-desc">Sets the light's colour.</span> |
| <Link id="m-setlightintensityfororbcount" /><code>{"void SetLightIntensityForOrbCount(int orbCount)"}</code> | <span className="api-desc">Turns the light off at zero orbs, otherwise sets intensity to orbs times `playerLightIntensityPerOrb` and the orb colour.</span> |
| <Link id="m-setplayerlightenabled" /><code>{"void SetPlayerLightEnabled(bool shouldEnable)"}</code> | <span className="api-desc">Turns the light component on or off.</span> |
| <Link id="m-setplayerlightintensity" /><code>{"void SetPlayerLightIntensity(float intensity)"}</code> | <span className="api-desc">Sets intensity clamped between the min and max; the light is off unless it is above the minimum.</span> |

## Used in

Members of other types that take, return or hold a `VariableIntensityPlayerLight`:

<div className="api-used-in">

[`PlayerController.playerLight`](/mod/game-api/types/global-p/playercontroller#m-playerlight), [`PlayerController.PlayerLight`](/mod/game-api/types/global-p/playercontroller#m-playerlight-2).

</div>

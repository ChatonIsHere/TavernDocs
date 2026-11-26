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

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"VariableIntensityPlayerLight()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maxintensity" /><code>{"private float maxIntensity"}</code> | Highest intensity allowed (default 2.5). |
| <Link id="m-minintensity" /><code>{"private float minIntensity"}</code> | Lowest intensity; at or below this the light is turned off. |
| <Link id="m-platformlight" /><code>{"private "}<Link to="/game-api/types/alta-world/platformlight">{"PlatformLight"}</Link>{" platformLight"}</code> | The `PlatformLight` being driven. |
| <Link id="m-playerlightcolorwithorb" /><code>{"private Color playerLightColorWithOrb"}</code> | Colour used while carrying orbs (default green). |
| <Link id="m-playerlightintensityperorb" /><code>{"private float playerLightIntensityPerOrb"}</code> | Intensity added per orb carried (default 0.5). |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setlightcolor" /><code>{"void SetLightColor(Color color)"}</code> | Sets the light's colour. |
| <Link id="m-setlightintensityfororbcount" /><code>{"void SetLightIntensityForOrbCount(int orbCount)"}</code> | Turns the light off at zero orbs, otherwise sets intensity to orbs times `playerLightIntensityPerOrb` and the orb colour. |
| <Link id="m-setplayerlightenabled" /><code>{"void SetPlayerLightEnabled(bool shouldEnable)"}</code> | Turns the light component on or off. |
| <Link id="m-setplayerlightintensity" /><code>{"void SetPlayerLightIntensity(float intensity)"}</code> | Sets intensity clamped between the min and max; the light is off unless it is above the minimum. |

## Used in

Members of other types that take, return or hold a `VariableIntensityPlayerLight`:

[`PlayerController.playerLight`](/game-api/types/global-p/playercontroller#m-playerlight), [`PlayerController.PlayerLight`](/game-api/types/global-p/playercontroller#m-playerlight-2).

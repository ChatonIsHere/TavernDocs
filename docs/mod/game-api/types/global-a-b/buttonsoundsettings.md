---
title: "ButtonSoundSettings"
description: "UI button settings asset that adds sounds for press and release."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ButtonSoundSettings

A **class** in `Root.Township`, the global namespace.

UI button settings asset that adds sounds for press and release.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`ButtonSettings`](/mod/game-api/types/alta-menus/buttonsettings)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ButtonSoundSettings()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-onpressed" /><code><Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" onPressed"}</code> | Sounds played when the button is pressed. |
| <Link id="m-onreleased" /><code><Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" onReleased"}</code> | Sounds played when the button is released. |

## Used in

Members of other types that take, return or hold a `ButtonSoundSettings`:

[`Button.sounds`](/mod/game-api/types/alta-menus/button#m-sounds), [`BasicTouchScreenButton.sounds`](/mod/game-api/types/global-a-b/basictouchscreenbutton#m-sounds).

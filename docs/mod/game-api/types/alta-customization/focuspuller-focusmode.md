---
title: "FocusPuller.FocusMode"
description: "Hand camera focus mode: Perfect, Auto (focuses when a photo is taken or the screen is free) or Manual (set by the player turning the control)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FocusPuller.FocusMode

An **enum** in `Root.Township`, `Alta.ScreenshotCamera`.

Hand camera focus mode: `Perfect`, `Auto` (focuses when a photo is taken or the screen is free) or `Manual` (set by the player turning the control).

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Nested in** [`FocusPuller`](/mod/game-api/types/alta-customization/focuspuller)

## Values

| Member |
| --- |
| <Link id="m-auto" /><code>{"Auto = 1"}</code> |
| <Link id="m-manual" /><code>{"Manual = 2"}</code> |
| <Link id="m-perfect" /><code>{"Perfect = 0"}</code> |

## Used in

Members of other types that take, return or hold a `FocusMode`:

<div className="api-used-in">

[`FocusButton.OnFocusModeChanged`](/mod/game-api/types/alta-customization/focusbutton#m-onfocusmodechanged), [`FocusPuller.CurrentFocus`](/mod/game-api/types/alta-customization/focuspuller#m-currentfocus), [`FocusPuller.OnFocusModeChanged`](/mod/game-api/types/alta-customization/focuspuller#m-onfocusmodechanged).

</div>

---
title: "ILabeledTouchScreenButton"
description: "A touch screen button with a text label."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ILabeledTouchScreenButton

An **interface** in `Root.Township`, the global namespace.

A touch screen button with a text label.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** [`ITouchScreenButton`](/mod/game-api/types/global-i-l/itouchscreenbutton)
- **Derived types** [`TouchScreenKeyboardKey`](/mod/game-api/types/global-t-x/touchscreenkeyboardkey)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applytext" /><code>{"void ApplyText(string text)"}</code> | Sets the button's label. |
| <Link id="m-gettext" /><code>{"string GetText()"}</code> | Returns the button's label. |

## Used in

Members of other types that take, return or hold a `ILabeledTouchScreenButton`:

[`TouchScreenMenuBase.instantiatedSuggestionKeys`](/mod/game-api/types/global-t-x/touchscreenmenubase#m-instantiatedsuggestionkeys).

---
title: "PickupFromDockRestriction"
description: "Flags limiting how a pickup can be taken from a dock: fixed, not with the left hand, or not with the right hand."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupFromDockRestriction

An **enum** in `Root.Township`, no namespace.

Flags limiting how a pickup can be taken from a dock: fixed, not with the left hand, or not with the right hand.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Attributes** `Flags`

## Values

| Member |
| --- |
| <Link id="m-fixed" /><code>{"Fixed = 1"}</code> |
| <Link id="m-nolefthand" /><code>{"NoLeftHand = 2"}</code> |
| <Link id="m-norighthand" /><code>{"NoRightHand = 4"}</code> |

## Used in

Members of other types that take, return or hold a `PickupFromDockRestriction`:

[`GrabPoint.dockedRestriction`](/game-api/types/global-e-h/grabpoint#m-dockedrestriction), [`GrabPoint.nonDockedRestriction`](/game-api/types/global-e-h/grabpoint#m-nondockedrestriction), [`GrabPoint.NonDockedRestriction`](/game-api/types/global-e-h/grabpoint#m-nondockedrestriction-2).

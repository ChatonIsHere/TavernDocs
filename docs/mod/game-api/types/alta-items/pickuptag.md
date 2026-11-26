---
title: "PickupTag"
description: "An empty asset used as a tag for marking and matching pickups."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupTag

A **class** in `Root.Township`, `Alta.Inventory`.

An empty asset used as a tag for marking and matching pickups.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`PickupTag.Create`](/mod/game-api/types/alta-items/pickuptag-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-items/pickuptag-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PickupTag()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Used in

Members of other types that take, return or hold a `PickupTag`:

<div className="api-used-in">

[`Inventory.DropHeldItems`](/mod/game-api/types/alta-player/inventory#m-drophelditems-2), [`Item.tags`](/mod/game-api/types/alta-items/item#m-tags), [`Item.Tags`](/mod/game-api/types/alta-items/item#m-tags-2), [`PickupDockSettings.excludedTags`](/mod/game-api/types/alta-items/pickupdocksettings#m-excludedtags), [`PickupDockSettings.ExcludedTags`](/mod/game-api/types/alta-items/pickupdocksettings#m-excludedtags-2), [`PickupDockSettings.includedTags`](/mod/game-api/types/alta-items/pickupdocksettings#m-includedtags), [`PickupDockSettings.IncludedTags`](/mod/game-api/types/alta-items/pickupdocksettings#m-includedtags-2), [`PickupDockSettings.isAllowingFireFromTags`](/mod/game-api/types/alta-items/pickupdocksettings#m-isallowingfirefromtags), [`PickupDockSettings.physicalTags`](/mod/game-api/types/alta-items/pickupdocksettings#m-physicaltags), [`PickupDockSettings.scalingTags`](/mod/game-api/types/alta-items/pickupdocksettings#m-scalingtags), [`PickupDockSettings.ScalingTags`](/mod/game-api/types/alta-items/pickupdocksettings#m-scalingtags-2), [`BowMultiArrowShot.validItemsTags`](/mod/game-api/types/alta-player/bowmultiarrowshot#m-validitemstags), [`SpecificPickupBasedSkill.validItemsTags`](/mod/game-api/types/alta-player/specificpickupbasedskill#m-validitemstags), [`MicroTutorialSystemSettings.DropTags`](/mod/game-api/types/game-other-namespaces/microtutorialsystemsettings#m-droptags), [`EmbeddableGlobalSettings.validPickupsToEmbedInto`](/mod/game-api/types/global-e-h/embeddableglobalsettings#m-validpickupstoembedinto), [`EmbeddableGlobalSettings.ValidPickupsToEmbedInto`](/mod/game-api/types/global-e-h/embeddableglobalsettings#m-validpickupstoembedinto-2), [`Fuse.whenLitAcceptOnlyTags`](/mod/game-api/types/global-e-h/fuse#m-whenlitacceptonlytags), [`PickupArea.allowedTags`](/mod/game-api/types/global-p/pickuparea#m-allowedtags).

</div>

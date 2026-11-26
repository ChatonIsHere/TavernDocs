---
title: "CosmeticPresetData"
description: "A player's whole cosmetic setup written out as packed bits, so it can be stored or sent as a preset."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CosmeticPresetData

A **class** in `Root.Township`, `Alta.Customization`.

A player's whole cosmetic setup written out as packed bits, so it can be stored or sent as a preset.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CosmeticPresetData()"}</code> | <span className="api-desc">Creates a `CosmeticPresetData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-cosmeticbytes" /><code>{"int cosmeticBytes"}</code> | <span className="api-desc">Number of bytes of `cosmeticData` in use.</span> |
| <Link id="m-cosmeticdata" /><code>{"uint[] cosmeticData"}</code> | <span className="api-desc">The packed cosmetic data, from a pooled array.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-asyncrequest" /><code>{"static async Task<"}<Link to="/mod/game-api/types/alta-customization/cosmeticpresetdata">{"CosmeticPresetData"}</Link>{"> AsyncRequest("}<Link to="/mod/game-api/types/alta-customization/customizationwrapper">{"CustomizationWrapper"}</Link>{" cosmeticWrapper)"}</code> | <span className="api-desc">Writes a cosmetic setup to a new preset, using the async serializer.</span> |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | <span className="api-desc">Returns the data array to the shared array pool and clears it.</span> |
| <Link id="m-request" /><code>{"static "}<Link to="/mod/game-api/types/alta-customization/cosmeticpresetdata">{"CosmeticPresetData"}</Link>{" Request("}<Link to="/mod/game-api/types/alta-customization/customizationwrapper">{"CustomizationWrapper"}</Link>{" cosmeticWrapper)"}</code> | <span className="api-desc">Writes a cosmetic setup to a new preset.</span> |

## Used in

Members of other types that take, return or hold a `CosmeticPresetData`:

<div className="api-used-in">

[`CosmeticCustomizationManager.originalData`](/mod/game-api/types/alta-customization/cosmeticcustomizationmanager#m-originaldata), [`CosmeticPresetTrophy.Data`](/mod/game-api/types/alta-customization/cosmeticpresettrophy#m-data), [`CosmeticRotatingSlot.data`](/mod/game-api/types/alta-customization/cosmeticrotatingslot#m-data), [`CosmeticRotatingSlot.GetDataFrom`](/mod/game-api/types/alta-customization/cosmeticrotatingslot#m-getdatafrom), [`CustomizationHistoryAction.CustomizationHistoryAction`](/mod/game-api/types/alta-customization/customizationhistoryaction#m-ctor), [`CustomizationHistoryAction.newState`](/mod/game-api/types/alta-customization/customizationhistoryaction#m-newstate), [`CustomizationHistoryAction.oldState`](/mod/game-api/types/alta-customization/customizationhistoryaction#m-oldstate), [`CustomizationWrapper.lastState`](/mod/game-api/types/alta-customization/customizationwrapper#m-laststate), [`CustomizationWrapperSerializer.LoadAsync`](/mod/game-api/types/alta-customization/customizationwrapperserializer#m-loadasync), [`StaticRandomCustomization.CurrentRandom`](/mod/game-api/types/alta-customization/staticrandomcustomization#m-currentrandom).

</div>

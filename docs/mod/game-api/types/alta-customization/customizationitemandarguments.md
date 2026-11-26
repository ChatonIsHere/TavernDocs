---
title: "CustomizationItemAndArguments"
description: "A customization definition paired with the arguments (such as colours) to apply it with."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CustomizationItemAndArguments

A **struct** in `Root.Township`, `Alta.Customization`.

A customization definition paired with the arguments (such as colours) to apply it with.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-arguments" /><code><Link to="/mod/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] arguments"}</code> | Arguments to apply the definition with. |
| <Link id="m-definition" /><code><Link to="/mod/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{" definition"}</code> | The cosmetic or customization definition. |

## Used in

Members of other types that take, return or hold a `CustomizationItemAndArguments`:

[`CustomizationWrapper.ApplyStreamItems`](/mod/game-api/types/alta-customization/customizationwrapper#m-applystreamitems), [`CustomizationWrapperSerializer.AddDefaultItem`](/mod/game-api/types/alta-customization/customizationwrapperserializer#m-adddefaultitem), [`CustomizationWrapperSerializer.ForceBasicBodyParts`](/mod/game-api/types/alta-customization/customizationwrapperserializer#m-forcebasicbodyparts), [`CustomizationWrapperSerializer.GetMissingDefaults`](/mod/game-api/types/alta-customization/customizationwrapperserializer#m-getmissingdefaults), [`ICustomizationWrapper.ApplyStreamItems`](/mod/game-api/types/alta-customization/icustomizationwrapper#m-applystreamitems).

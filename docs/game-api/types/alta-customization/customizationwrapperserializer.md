---
title: "CustomizationWrapperSerializer"
description: "Writes and reads a wrapper to a stream or a save (Save, LoadAsync, SerializeStreamAsync)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CustomizationWrapperSerializer

A **static class** in `Root.Township`, `Alta.Customization`.

Writes and reads a wrapper to a stream or a save (`Save`, `LoadAsync`, `SerializeStreamAsync`).

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Documented in** [Customization](/game-api/game-systems/customization)

## Fields

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-loadasync" /><code>{"static async Task<bool> LoadAsync("}<Link to="/game-api/types/alta-customization/icustomizationwrapper">{"ICustomizationWrapper"}</Link>{" wrapper, "}<Link to="/game-api/types/alta-customization/cosmeticpresetdata">{"CosmeticPresetData"}</Link>{" data)"}</code> |
| <Link id="m-loadasync-2" /><code>{"static async Task<bool> LoadAsync("}<Link to="/game-api/types/alta-customization/icustomizationwrapper">{"ICustomizationWrapper"}</Link>{" wrapper, uint[] data, int bytes)"}</code> |
| <Link id="m-readstreamasync" /><code>{"static async Task ReadStreamAsync("}<Link to="/game-api/types/alta-customization/icustomizationwrapper">{"ICustomizationWrapper"}</Link>{" wrapper, "}<Link to="/game-api/types/assembly-other/streamreader">{"StreamReader"}</Link>{" stream, bool isApplying = true, CancellationToken cancellation = null)"}</code> |
| <Link id="m-save" /><code>{"static void Save("}<Link to="/game-api/types/alta-customization/icustomizationwrapper">{"ICustomizationWrapper"}</Link>{" wrapper, out int bytes, out uint[] data)"}</code> |
| <Link id="m-serializearguments" /><code>{"static void SerializeArguments("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, uint definitionHash, "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] arguments)"}</code> |
| <Link id="m-serializestreamasync" /><code>{"static async Task SerializeStreamAsync("}<Link to="/game-api/types/alta-customization/icustomizationwrapper">{"ICustomizationWrapper"}</Link>{" wrapper, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isApplying = true, CancellationToken cancellation = null)"}</code> |
| <Link id="m-writestream" /><code>{"static void WriteStream("}<Link to="/game-api/types/alta-customization/icustomizationwrapper">{"ICustomizationWrapper"}</Link>{" wrapper, "}<Link to="/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{" stream)"}</code> |

<details>
<summary>5 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-adddefaultitem" /><code>{"private static void AddDefaultItem(ICollection<"}<Link to="/game-api/types/alta-customization/customizationitemandarguments">{"CustomizationItemAndArguments"}</Link>{"> results, "}<Link to="/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{" definition, "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] arguments = null)"}</code> |
| <Link id="m-forcebasicbodyparts" /><code>{"private static void ForceBasicBodyParts("}<Link to="/game-api/types/alta-customization/icustomizationwrapper">{"ICustomizationWrapper"}</Link>{" wrapper, List<"}<Link to="/game-api/types/alta-customization/customizationitemandarguments">{"CustomizationItemAndArguments"}</Link>{"> results)"}</code> |
| <Link id="m-getdefaults" /><code>{"private static Dictionary<"}<Link to="/game-api/types/assembly-api-models/itemcategory">{"ItemCategory"}</Link>{", "}<Link to="/game-api/types/alta-customization/defaultcosmeticinfo">{"DefaultCosmeticInfo"}</Link>{"> GetDefaults("}<Link to="/game-api/types/alta-customization/icustomizationwrapper">{"ICustomizationWrapper"}</Link>{" wrapper)"}</code> |
| <Link id="m-getmissingdefaults" /><code>{"private static IEnumerable<"}<Link to="/game-api/types/alta-customization/defaultcosmeticinfo">{"DefaultCosmeticInfo"}</Link>{"> GetMissingDefaults(IReadOnlyCollection<"}<Link to="/game-api/types/alta-customization/customizationitemandarguments">{"CustomizationItemAndArguments"}</Link>{"> loadedItems, IReadOnlyDictionary<"}<Link to="/game-api/types/assembly-api-models/itemcategory">{"ItemCategory"}</Link>{", "}<Link to="/game-api/types/alta-customization/defaultcosmeticinfo">{"DefaultCosmeticInfo"}</Link>{"> defaults)"}</code> |
| <Link id="m-writestreamrestricted" /><code>{"private static void WriteStreamRestricted("}<Link to="/game-api/types/alta-customization/icustomizationwrapper">{"ICustomizationWrapper"}</Link>{" wrapper, "}<Link to="/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{" stream)"}</code> |

</details>

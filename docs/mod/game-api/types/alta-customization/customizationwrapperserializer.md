---
title: "CustomizationWrapperSerializer"
description: "Static helpers that write and read a player's cosmetics as a bit stream (item hashes plus their colour arguments), for saving presets and syncing to other..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CustomizationWrapperSerializer

A **static class** in `Root.Township`, `Alta.Customization`.

Static helpers that write and read a player's cosmetics as a bit stream (item hashes plus their colour arguments), for saving presets and syncing to other players.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Documented in** [Customization](/mod/game-api/game-systems/customization)

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">Logger for this class.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-loadasync" /><code>{"static async Task<bool> LoadAsync("}<Link to="/mod/game-api/types/alta-customization/icustomizationwrapper">{"ICustomizationWrapper"}</Link>{" wrapper, "}<Link to="/mod/game-api/types/alta-customization/cosmeticpresetdata">{"CosmeticPresetData"}</Link>{" data)"}</code> | <span className="api-desc">Loads cosmetics from saved data into the wrapper. Returns false on bad data, an error or a cancelled load.</span> |
| <Link id="m-loadasync-2" /><code>{"static async Task<bool> LoadAsync("}<Link to="/mod/game-api/types/alta-customization/icustomizationwrapper">{"ICustomizationWrapper"}</Link>{" wrapper, uint[] data, int bytes)"}</code> | <span className="api-desc">Loads cosmetics from saved data into the wrapper. Returns false on bad data, an error or a cancelled load.</span> |
| <Link id="m-readstreamasync" /><code>{"static async Task ReadStreamAsync("}<Link to="/mod/game-api/types/alta-customization/icustomizationwrapper">{"ICustomizationWrapper"}</Link>{" wrapper, "}<Link to="/mod/game-api/types/assembly-other/streamreader">{"StreamReader"}</Link>{" stream, bool isApplying = true, CancellationToken cancellation = null)"}</code> | <span className="api-desc">Reads item hashes and arguments from a stream; when applying, fills in missing defaults and applies the items to the wrapper. Throws on an unknown hash.</span> |
| <Link id="m-save" /><code>{"static void Save("}<Link to="/mod/game-api/types/alta-customization/icustomizationwrapper">{"ICustomizationWrapper"}</Link>{" wrapper, out int bytes, out uint[] data)"}</code> | <span className="api-desc">Writes the wrapper's cosmetics to a new buffer and returns its byte count and data.</span> |
| <Link id="m-serializearguments" /><code>{"static void SerializeArguments("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, uint definitionHash, "}<Link to="/mod/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] arguments)"}</code> | <span className="api-desc">Writes or reads an item's arguments with a size prefix. On a size mismatch it skips the bits, except for two hashes it converts from an older format.</span> |
| <Link id="m-serializestreamasync" /><code>{"static async Task SerializeStreamAsync("}<Link to="/mod/game-api/types/alta-customization/icustomizationwrapper">{"ICustomizationWrapper"}</Link>{" wrapper, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isApplying = true, CancellationToken cancellation = null)"}</code> | <span className="api-desc">Writes the wrapper, or reads into it inside an addressable loading session (clearing it first when applying).</span> |
| <Link id="m-writestream" /><code>{"static void WriteStream("}<Link to="/mod/game-api/types/alta-customization/icustomizationwrapper">{"ICustomizationWrapper"}</Link>{" wrapper, "}<Link to="/mod/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{" stream)"}</code> | <span className="api-desc">Writes every item and its arguments, or only whitelisted categories if `UseCategoryWhitelistWhenSaving` is on.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-adddefaultitem" /><code>{"private static void AddDefaultItem(ICollection<"}<Link to="/mod/game-api/types/alta-customization/customizationitemandarguments">{"CustomizationItemAndArguments"}</Link>{"> results, "}<Link to="/mod/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{" definition, "}<Link to="/mod/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] arguments = null)"}</code> | <span className="api-desc">Adds a default item to the results unless something in its category (or the item itself) is already there.</span> |
| <Link id="m-forcebasicbodyparts" /><code>{"private static void ForceBasicBodyParts("}<Link to="/mod/game-api/types/alta-customization/icustomizationwrapper">{"ICustomizationWrapper"}</Link>{" wrapper, List<"}<Link to="/mod/game-api/types/alta-customization/customizationitemandarguments">{"CustomizationItemAndArguments"}</Link>{"> results)"}</code> | <span className="api-desc">Adds any required default body parts missing from the loaded items.</span> |
| <Link id="m-getdefaults" /><code>{"private static Dictionary<"}<Link to="/mod/game-api/types/assembly-api-models/itemcategory">{"ItemCategory"}</Link>{", "}<Link to="/mod/game-api/types/alta-customization/defaultcosmeticinfo">{"DefaultCosmeticInfo"}</Link>{"> GetDefaults("}<Link to="/mod/game-api/types/alta-customization/icustomizationwrapper">{"ICustomizationWrapper"}</Link>{" wrapper)"}</code> | <span className="api-desc">Gets the required defaults per category from `CustomizationSettings`, swapped for the wrapper's override items where they match.</span> |
| <Link id="m-getmissingdefaults" /><code>{"private static IEnumerable<"}<Link to="/mod/game-api/types/alta-customization/defaultcosmeticinfo">{"DefaultCosmeticInfo"}</Link>{"> GetMissingDefaults(IReadOnlyCollection<"}<Link to="/mod/game-api/types/alta-customization/customizationitemandarguments">{"CustomizationItemAndArguments"}</Link>{"> loadedItems, IReadOnlyDictionary<"}<Link to="/mod/game-api/types/assembly-api-models/itemcategory">{"ItemCategory"}</Link>{", "}<Link to="/mod/game-api/types/alta-customization/defaultcosmeticinfo">{"DefaultCosmeticInfo"}</Link>{"> defaults)"}</code> | <span className="api-desc">Lists required defaults whose category has no loaded item.</span> |
| <Link id="m-writestreamrestricted" /><code>{"private static void WriteStreamRestricted("}<Link to="/mod/game-api/types/alta-customization/icustomizationwrapper">{"ICustomizationWrapper"}</Link>{" wrapper, "}<Link to="/mod/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{" stream)"}</code> | <span className="api-desc">Writes only items in the debug category whitelist.</span> |

</details>

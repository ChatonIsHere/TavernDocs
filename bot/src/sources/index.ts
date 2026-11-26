// The one list of sources. /search and "Find in TavernDocs" go through all of these, plus one ReferenceSource per
// table in bot/content/sources.yml (made by SourcesService on each refresh).
import { GuidesSource } from './guides/guides.source';
import { TypesSource } from './types/types.source';
import { SnippetsSource } from './snippets/snippets.source';
import { ModsSource } from './mods/mods.source';

export const SOURCE_CLASSES = [GuidesSource, TypesSource, SnippetsSource, ModsSource] as const;

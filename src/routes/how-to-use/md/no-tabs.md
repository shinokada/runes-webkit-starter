<script lang="ts">
  import type { ComponentType } from 'svelte';
  import { IconPage, filterStringKeys } from 'runes-webkit'
  import * as icons from 'runes-webkit'

  const keyIcons = filterStringKeys(icons);

</script>

<IconPage icons={keyIcons as ComponentType} threeTabs={false} title="No Tabs" />
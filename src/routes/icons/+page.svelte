<script lang="ts">
  import type { ComponentType } from 'svelte';
  import { IconPage, filterStringKeys } from 'svelte-icon-webkit';
  import * as icons from '$lib';

  const keyIcons = filterStringKeys(icons);
</script>

<IconPage icons={keyIcons as ComponentType} threeTabs={false} title="No Tabs" />

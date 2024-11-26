<script lang="ts">
  import { IconPage, filterStringKeys } from 'runes-webkit';
  import * as icons from '../awesome-samples';

  const keyIcons = filterStringKeys(icons);
</script>

<IconPage
  minSize="60"
  defaultSize="80"
  maxSize="100"
  classDiv3="grid lg:grid-cols-3 grid-cols-2 gap-4"
  icons={keyIcons}
  threeTabs={false}
  title="No Tabs"
/>

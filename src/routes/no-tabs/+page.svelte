<script lang="ts">
	import { IconPage, filterStringKeys } from 'runes-webkit';
	import * as icons from '../awesome-samples/index.js';

	const keyIcons = filterStringKeys(icons);
</script>

<IconPage
	minSize="20"
	defaultSize="40"
	maxSize="60"
	classDiv3="grid lg:grid-cols-3 grid-cols-2 gap-4"
	icons={keyIcons}
	threeTabs={false}
	title="No Tabs"
/>

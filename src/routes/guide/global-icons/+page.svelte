<script lang="ts">
	import { HighlightCompo, Code, H1, H2 } from 'runes-webkit';

	const modules = import.meta.glob('./md/*.md', {
		query: '?raw',
		import: 'default',
		eager: true
	});
</script>

<H1>Setting Global Icon - Runes Webkit Starter</H1>

<p>
	You can create global icon preferences in your Svelte application using <Code>setContext</Code>.
	This allows you to configure icon-related properties once and share them across multiple
	components.
</p>

<H2>Setting preferences</H2>

<p>
	In your <Code>+layout.svelte</Code> or <Code>+page.svelte</Code>, you can define and set global
	icon preferences as follows:
</p>

<HighlightCompo codeLang="ts" code={modules['./md/setting-preferences.md'] as string} />

<p>
	All properties are optional, allowing you to fine-tune the appearance and accessibility of your
	icons as needed.
</p>

<H2>Prop size</H2>

<p>If you set <Code>size</Code>, icons can be customized with different color. For example:</p>

<HighlightCompo codeLang="ts" code={modules['./md/prop-size.md'] as string} />

<H2>Setting more than one props</H2>

<p>
	Remember that you can set one or more properties, allowing you to tailor icon settings to your
	specific design and accessibility requirements.
</p>

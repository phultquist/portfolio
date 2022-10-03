<script lang="ts">
	export let href: string;
	export let src: string;
	export let alt: string;
</script>

<div class="my-6 px-6 w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
	<div class="bg-white card rounded-xl overflow-hidden transition-all group">
		<a {href}>
			<div class="m-0 p-0 overflow-hidden">
				<img class="p-0 m-0 object-cover" {src} {alt} />
			</div>
			<div class="p-4 pt-2">
				<slot />
			</div>
		</a>
	</div>
</div>

<script>
	export let posts;
</script>

<div class="relative bg-gray-50 pt-12 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-28 lg:px-8">
	<div class="absolute inset-0">
		<div class="bg-white h-1/3 sm:h-2/3" />
	</div>
	<div class="relative max-w-7xl mx-auto">
		<div class="text-center">
			<h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Наш блог</h2>
			<p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
				Интересные статьи на строительную тематику
			</p>
		</div>
		<div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
			{#each posts as { id, img, alt, title, description, avatar, author, date }}
				<a href="/blog/post/{id}" class="flex flex-col rounded-lg shadow-lg overflow-hidden">
					<div class="flex-shrink-0">
						<img class="h-64 w-full object-cover" src={img} alt="" />
					</div>
					<div class="flex-1 bg-white p-6 flex flex-col justify-between">
						<div class="flex-1">
							<div class="text-sm font-medium text-indigo-600">
								<span class="hover:underline"> Статья </span>
							</div>
							<div class="block mt-2">
								<p class="text-xl font-semibold text-gray-900">{title}</p>
								<p class="mt-3 text-base text-gray-500">{description}</p>
							</div>
						</div>
						<div class="mt-6 flex items-center">
							<div class="flex-shrink-0">
								<div>
									<span class="sr-only">{author}</span>
									<img class="h-10 w-10 rounded-full" src={avatar} alt="" />
								</div>
							</div>
							<div class="ml-3">
								<p class="text-sm font-medium text-gray-900">
									<span class="hover:underline"> {author} </span>
								</p>
								<div class="flex space-x-1 text-sm text-gray-500">
									<time datetime="2020-03-16"> {date} </time>
								</div>
							</div>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
</div>

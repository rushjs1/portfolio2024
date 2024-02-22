<template>
  <div class="flex flex-col items-start w-full">
    <div class="flex items-center space-x-4 w-full">
      <BackButton />
      <span class="text-5xl font-bold"> Projects </span>
    </div>
    <div class="w-full mt-6 mb-20 grid md:grid-cols-2 grid-cols-1 gap-4">
      <ProjectCard
        title="Filter Fetch"
        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo blanditiis ratione culpa provident vero corporis perferendis,"
        img="/ff2.png"
        link="https://filterfetch.com"
      >
        <template #tags>
          <ProjectTag title="Vue">
            <IconVue class="h-4 w-4" />
          </ProjectTag>

          <ProjectTag title="Laravel">
            <IconLaravel class="h-4 w-4" />
          </ProjectTag>

          <ProjectTag title="Tailwindcss">
            <IconTailwind class="h-5 w-5" />
          </ProjectTag>

          <ProjectTag title="New Design">
            <IconPaintBrush class="h-4 w-4" />
          </ProjectTag>
        </template>
      </ProjectCard>

      <ProjectCard
        title="EContractor"
        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo blanditiis ratione culpa provident vero corporis perferendis,"
        img="/EContractor_2.0.png"
        link="https://v2--rainmakerhvac.netlify.app/econtractor#/home"
      >
        <template #tags>
          <ProjectTag title="Vue">
            <IconVue class="h-4 w-4" />
          </ProjectTag>

          <ProjectTag title="Laravel">
            <IconLaravel class="h-4 w-4" />
          </ProjectTag>

          <ProjectTag title="Tailwindcss">
            <IconTailwind class="h-5 w-5" />
          </ProjectTag>

          <ProjectTag title="New Design">
            <IconPaintBrush class="h-4 w-4" />
          </ProjectTag>
        </template>
      </ProjectCard>

      <ProjectCard
        title="Filter Fetch Mobile"
        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo blanditiis ratione culpa provident vero corporis perferendis,"
        img="/ff-mobile4.png"
        link="itms-apps://apps.apple.com/us/app/filterfetch-mobile/id1166270595"
      >
        <template #tags>
          <ProjectTag title="Vue">
            <IconVue class="h-4 w-4" />
          </ProjectTag>

          <ProjectTag title="Ionic">
            <IconIonic class="h-4 w-4 text-[#2f6bff]" />
          </ProjectTag>

          <ProjectTag title="Capacitor">
            <IconCapacitor class="h-4 w-4 text-[#3a9eff]" />
          </ProjectTag>

          <ProjectTag title="TypeScript">
            <IconTypescript class="h-4 w-4" />
          </ProjectTag>

          <ProjectTag title="Laravel">
            <IconLaravel class="h-4 w-4" />
          </ProjectTag>

          <ProjectTag title="New Design">
            <IconPaintBrush class="h-4 w-4" />
          </ProjectTag>
        </template>
      </ProjectCard>

      <ProjectCard
        title="Tailwind UI Rebuilds"
        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo blanditiis ratione culpa provident vero corporis perferendis,"
        img="/tur2.png"
        link="https://tailwind-ui-rebuilds.netlify.app/"
      >
        <template #tags>
          <ProjectTag title="Vue">
            <IconVue class="h-4 w-4" />
          </ProjectTag>

          <ProjectTag title="Tailwindcsss">
            <IconTailwind class="h-4 w-4" />
          </ProjectTag>
        </template>
      </ProjectCard>

      <ProjectCard
        title="Clock.nvim"
        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo blanditiis ratione culpa provident vero corporis perferendis,"
        img="/clock-alt2.png"
        link="https://github.com/rushjs1/clock.nvim"
      >
        <template #tags>
          <ProjectTag title="Neovim">
            <IconNeovim class="h-4 w-4" />
          </ProjectTag>

          <ProjectTag title="Plugin">
            <IconPuzzlePiece class="h-4 w-4" />
          </ProjectTag>
        </template>
      </ProjectCard>

      <ProjectCard
        title="Nuxt-goto-alias.nvim"
        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo blanditiis ratione culpa provident vero corporis perferendis,"
        img="/nuxt-goto-alt.png"
        link="https://github.com/rushjs1/nuxt-goto-alias.nvim"
      >
        <template #tags>
          <ProjectTag title="Neovim">
            <IconNeovim class="h-4 w-4" />
          </ProjectTag>

          <ProjectTag title="Plugin">
            <IconPuzzlePiece class="h-4 w-4" />
          </ProjectTag>
        </template>
      </ProjectCard>

      <div class="bg-emerald-500">foo</div>
    </div>
  </div>
</template>

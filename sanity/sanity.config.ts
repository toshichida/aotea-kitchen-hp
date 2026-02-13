import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import menuItem from './schemas/menuItem'
import page from './schemas/page'
import settings from './schemas/settings'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export default defineConfig({
    basePath: '/studio',
    projectId,
    dataset,

    schema: {
        types: [menuItem, page, settings],
    },

    plugins: [structureTool(), visionTool()],
})

export default {
    name: 'menuItem',
    title: 'Menu Item',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Breakfast', value: 'breakfast' },
                    { title: 'Lunch', value: 'lunch' },
                    { title: 'Sweets', value: 'sweets' },
                    { title: 'Drinks', value: 'drinks' },
                ],
            },
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'dietary',
            title: 'Dietary Info',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                list: [
                    { title: 'Vegetarian', value: 'vegetarian' },
                    { title: 'Vegan', value: 'vegan' },
                    { title: 'Gluten Free', value: 'gf' },
                    { title: 'Dairy Free', value: 'df' },
                ],
            },
        },
        {
            name: 'isFeatured',
            title: 'Featured',
            type: 'boolean',
        },
    ],
}

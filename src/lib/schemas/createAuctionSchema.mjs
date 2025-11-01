import { transpileSchema } from "@middy/validator/transpile";

const schema = transpileSchema({
    type: 'object',
    properties: {
        body: {
            type: 'object',
            properties: {
                title: {
                    type: 'string',
                },
            },
            required: ['title'],
        },
    },
    required: ['body'],
});

export default schema;

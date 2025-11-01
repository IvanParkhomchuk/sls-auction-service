import { transpileSchema } from "@middy/validator/transpile";

const schema = transpileSchema({
    type: 'object',
    properties: {
        body: {
            type: 'object',
            properties: {
                amount: {
                    type: 'number',
                },
            },
            required: ['amount'],
        },
    },
    required: ['body'],
});

export default schema;

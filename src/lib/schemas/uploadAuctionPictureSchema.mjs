import {transpileSchema} from "@middy/validator/transpile";

const schema = transpileSchema({
    type: 'object',
    properties: {
        body: {
            type: 'string',
            minLength: 1,
        },
    },
    required: ['body'],
});

export default schema;
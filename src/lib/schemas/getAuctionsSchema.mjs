import { transpileSchema } from "@middy/validator/transpile";

const schema = transpileSchema({
    type: 'object',
    properties: {
        queryStringParameters: {
            type: 'object',
            properties: {
                status: {
                    type: 'string',
                    enum: ['OPEN', 'CLOSED'],
                    default: 'OPEN',
                },
            },
        },
    },
    required: ['queryStringParameters'],
});

export default schema;

export const feedbackSwagger = {
    '/feedback': {
      get: {
        summary: 'Get all feedback',
        tags: ['Feedback'],
        security: [{ bearerAuth: [] }],
        responses: {
          '200': {
            description: 'List of feedback',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
      post: {
        summary: 'Submit feedback',
        tags: ['Feedback'],
        security: [{ bearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: {
                    type: 'string',
                    example: 'Great service!',
                  },
                },
              },
            },
          },
        },
        responses: {
          '201': {
            description: 'Feedback submitted successfully',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
    },
  };
  